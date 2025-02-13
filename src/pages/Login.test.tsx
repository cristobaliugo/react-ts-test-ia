import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { vi } from 'vitest';
import { store } from '../redux/store';
import Login from './Login';

// Simulamos el servicio de autenticación para la prueba
vi.mock('../services/authService', () => ({
  authService: {
    login: vi.fn().mockResolvedValue({ token: 'fake-token' })
  }
}));

describe('Página de Login', () => {
  it('renderiza el formulario de login y redirige al enviar datos válidos', async () => {
    const user = userEvent.setup();
    
    // Configuración de rutas de prueba (utilizamos MemoryRouter)
    const routes = [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/dashboard',
        element: <h1>Dashboard</h1>
      }
    ];
    const router = createMemoryRouter(routes, { initialEntries: ['/'] });
 
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    
    const emailInput = screen.getByLabelText(/correo electrónico/i);
    const passwordInput = screen.getByLabelText(/contraseña/i);
    const submitButton = screen.getByRole('button', { name: /ingresar/i });

    await user.type(emailInput, 'test@example.com');
    await user.type(passwordInput, 'password123');
    await user.click(submitButton);

    await waitFor(() => {
      expect(router.state.location.pathname).toBe('/dashboard');
    });
  });
}); 