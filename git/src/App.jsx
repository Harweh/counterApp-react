import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [counter, setCounter] = useState(0)
  const [date, setDate] = useState('')
   //NOTE for useState
  //1. counter : a variable which at first has a value of 0.
  //2. seetCounter : a function that can change counter. {0, func}
  // every function returns something to you

  useEffect(()=>{
    console.log((Number(localStorage.getItem('count'))))
    setCounter(Number(localStorage.getItem('count')))
  }, [])

  const handleInc = ()=>{
    setDate(new Date().toString())
    localStorage.setItem('count', counter+1)
    setCounter(counter+1)
  }

   const handleDec = ()=>{
    setDate(new Date().toString())
    localStorage.setItem('count', counter-1)
    setCounter(counter-1)
  }

  return (
    <div style={{height:"100vh", background:"black", color:"white"}} className='container'>
      <h1>Counter</h1>
       <div className="counter-section">
          <button onClick={handleInc}>+</button>
          <h3>{counter}</h3>
          <button onClick={handleDec}>-</button>
       </div>
       <h3>{date}</h3>
    </div>
  )
}

export default App
