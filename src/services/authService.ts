// Este servicio simula las llamadas a una API de autenticación.

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

const API_URL = 'https://api.tuservidor.com/auth'; // Cambia esta URL según tu backend.

export const authService = {
  login: async (data: LoginData): Promise<{ token: string }> => {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    // Almacena el token en localStorage.
    localStorage.setItem('token', result.token);
    return result;
  },
  register: async (data: RegisterData): Promise<{ token: string }> => {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    localStorage.setItem('token', result.token);
    return result;
  },
  verifyToken: async (token: string): Promise<boolean> => {
    const response = await fetch(`${API_URL}/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result.valid;
  },
}; 