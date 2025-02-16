import { useState } from 'react'
import './App.css'

function App() {
  // Estados para la calculadora
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  // Agrega el número u operador a la operación actual
  const updateCalc = (value: string) => {
    setCalc(calc + value)
  };

  // Evalúa la operación actual y muestra el resultado
  const calculate = () => {
    try {
      const evalResult = eval(calc);
      setResult(evalResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  // Limpia la operación y el resultado
  const clearCalc = () => {
    setCalc("");
    setResult("");
  };

  return (
    <div className="App">
      <h1>Calculadora Básica</h1>
      <div className="display">
        <div className="calculation">{calc}</div>
        <div className="result">{result !== "" && `= ${result}`}</div>
      </div>
      <br />
      <div className="buttons">
        {/* Fila 1 */}
        <button onClick={() => updateCalc("7")}>7</button>
        <button onClick={() => updateCalc("8")}>8</button>
        <button onClick={() => updateCalc("9")}>9</button>
        <button onClick={() => updateCalc("/")}>/</button>
        <br />
        {/* Fila 2 */}
        <button onClick={() => updateCalc("4")}>4</button>
        <button onClick={() => updateCalc("5")}>5</button>
        <button onClick={() => updateCalc("6")}>6</button>
        <button onClick={() => updateCalc("*")}>*</button>
        <br />
        {/* Fila 3 */}
        <button onClick={() => updateCalc("1")}>1</button>
        <button onClick={() => updateCalc("2")}>2</button>
        <button onClick={() => updateCalc("3")}>3</button>
        <button onClick={() => updateCalc("-")}>-</button>
        <br />
        {/* Fila 4 */}
        <button onClick={() => updateCalc("0")}>0</button>
        <button onClick={clearCalc}>C</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => updateCalc("+")}>+</button>
      </div>
    </div>
  )
}

export default App
