import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [count, setCount] = useState(0)
  console.warn(count)
  return (
    <div className='App'>
      <h2>Use State {count} </h2>
      <button onClick={()=>setCount(count-1)}>Updating Data</button>
    </div>
  )
    
}

export default App