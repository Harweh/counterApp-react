import { useState } from 'react'
import './App.css'

const App = () => {
  const [counter, setCounter] = useState(0)
   //NOTE for useState
  //1. counter : a variable which at first has a value of 0.
  //2. seetCounter : a function that can change counter. {0, func}
  // every function returns something to you

  return (
    <div style={{height:"100vh", background:"black", color:"white"}} className='container'>
      <h2>Counter</h2>
       <div className="coiunter-section">
          <button onClick={()=> setCounter(counter+1)}>+</button>
          <h3>{counter}</h3>
          <button onClick={()=> setCounter(counter-1)}>-</button>
       </div>
    </div>
  )
}

export default App
