import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [result, setResult] = useState("")
  const handleClick = e => setResult(result.concat(e.target.id))
  const clear =() => setResult("")
  const deleteEL  = () => setResult(result.slice((0,-1)))

  const calculate = () => {
    try{
      setResult(eval((result),toString()))
    }catch(error){
      setResult("Error")
    }
  }

  return (

     <div className="calculator-grid">
      <div className="output">
          <div className="prev-operand"></div>
          <div className="current-operand"></div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <button>/</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>*</button>
      <button>.</button>
      <button>0</button>
      <button className="span-two">=</button>
    </div>
  )
}

export default App
