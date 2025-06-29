import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div style={{ height:"100vh", background:"black", color:"white" }} className='container'>
     <h2>Counter</h2>
     <div className="coiunter-section">
        <button>4</button>
        <h3>0</h3>
        <button>-</button>
     </div>
    </div>
    </>
  )
}

export default App
