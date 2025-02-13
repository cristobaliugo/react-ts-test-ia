import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,            // Permite usar variables globales en tests (como describe, it, expect)
    environment: 'jsdom',     // Configura el entorno de pruebas para simular el DOM
    setupFiles: './src/setupTests.ts' // Archivo de configuración para pruebas
  }
})
