import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [Counter, setCounter] = useState(15)
// let Counter = 15
const addValue = () => {
  // console.log("clicked",Counter);
   Counter = Counter + 1
  setCounter(Counter)
  
}
const removeValue = () => {
  // console.log("clicked",Counter);
   Counter = Counter - 1
  setCounter(Counter)
}

  return (
    <>
    <h1>SUBHAM AND REACT</h1>
    <h2>Counter value: {Counter}</h2>
    <button onClick={addValue}>Add Counter {Counter}</button>
    <br />
    <br />
    <button onClick={removeValue}>Remove value {Counter}</button>
    
    </>
  )
}

export default App
