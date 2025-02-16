import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('Calculadora Básica', () => {
  it('debe renderizar el display vacío inicialmente', () => {
    render(<App />)
    // Seleccionamos los elementos del display
    const calcDisplay = document.querySelector('.calculation')
    const resultDisplay = document.querySelector('.result')
    expect(calcDisplay?.textContent).toBe('')
    expect(resultDisplay?.textContent).toBe('')
  })

  it('actualiza el display al presionar botones', async () => {
    render(<App />)
    // Simulamos presionar el botón "7"
    await userEvent.click(screen.getByRole('button', { name: "7" }))
    expect(document.querySelector('.calculation')?.textContent).toBe("7")
  })

  it('realiza una suma correctamente', async () => {
    render(<App />)
    await userEvent.click(screen.getByRole('button', { name: "1" }))
    await userEvent.click(screen.getByRole('button', { name: "+" }))
    await userEvent.click(screen.getByRole('button', { name: "2" }))
    await userEvent.click(screen.getByRole('button', { name: "=" }))
    // Se espera que el resultado sea 3
    expect(screen.getByText("= 3")).toBeInTheDocument()
  })

  it('realiza una resta correctamente', async () => {
    render(<App />)
    await userEvent.click(screen.getByRole('button', { name: "5" }))
    await userEvent.click(screen.getByRole('button', { name: "-" }))
    await userEvent.click(screen.getByRole('button', { name: "3" }))
    await userEvent.click(screen.getByRole('button', { name: "=" }))
    // Se espera que el resultado sea 2
    expect(screen.getByText("= 2")).toBeInTheDocument()
  })

  it('realiza una multiplicación correctamente', async () => {
    render(<App />)
    await userEvent.click(screen.getByRole('button', { name: "2" }))
    await userEvent.click(screen.getByRole('button', { name: "*" }))
    await userEvent.click(screen.getByRole('button', { name: "3" }))
    await userEvent.click(screen.getByRole('button', { name: "=" }))
    // Se espera que el resultado sea 6
    expect(screen.getByText("= 6")).toBeInTheDocument()
  })

  it('realiza una división correctamente', async () => {
    render(<App />)
    await userEvent.click(screen.getByRole('button', { name: "8" }))
    await userEvent.click(screen.getByRole('button', { name: "/" }))
    await userEvent.click(screen.getByRole('button', { name: "2" }))
    await userEvent.click(screen.getByRole('button', { name: "=" }))
    // Se espera que el resultado sea 4
    expect(screen.getByText("= 4")).toBeInTheDocument()
  })

  it('limpia la calculadora al presionar C', async () => {
    render(<App />)
    // Simulamos una operación
    await userEvent.click(screen.getByRole('button', { name: "1" }))
    await userEvent.click(screen.getByRole('button', { name: "0" }))
    // Presionamos el botón C para limpiar
    await userEvent.click(screen.getByRole('button', { name: "C" }))
    const calcDisplay = document.querySelector('.calculation')
    const resultDisplay = document.querySelector('.result')
    expect(calcDisplay?.textContent).toBe('')
    expect(resultDisplay?.textContent).toBe('')
  })
}) 