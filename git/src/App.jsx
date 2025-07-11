import { useReducer, useEffect } from 'react'
import './App.css'

const App = () => {
 
  // step 1
  const initialState = {count:0, date: ''}

  // Step 2
  const reducer = (state, action)=>{
    if (action == 'inc') {
      return {count: state.count+1, date: new Date().toString() }
    }
    else if (action == 'dec') {
      return {count: state.count-1,  date: new Date().toString() }
    }
    else if (action == 'rst') {
      return {count: 0,  date: new Date().toString() }
    }
    else {
      return{count: state.count}
    }
  }

  // Step 3
  const [state, dispatch] = useReducer(reducer,initialState)
  // dispatch funct is same as reducer function &
  // state is the same as initialState 

  useEffect(()=>{
    setCounter((Number(localStorage.getItem('count'))))
  }, [])



  return (
    <div style={{height:"100vh", background:"black", color:"white"}} className='container'>
      <h1>Counter</h1>
       <div className="counter-section">
          <button onClick={() => dispatch('inc')}>+</button>
          <h3>{state.count}</h3>
           <button onClick={() =>dispatch('dec')}>-</button>
           <br />
           <button onClick={()=> dispatch('rst')}>RESET</button>
       </div>
       <h3>{state.date}</h3>
    </div>
  )
}

export default App
