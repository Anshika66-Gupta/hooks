import React, { createContext, useState } from 'react'
import './App.css'
import ContextApi from './ContextApi'

export const ExampleHooks = createContext();
function App() {
  const [color, setColor] = useState('red')
  return (
    <ExampleHooks.Provider value={{appColor:color}}>
    <div className='App'>
      <h1>
       App Component
      </h1>
      <ContextApi />
      </div>
      </ExampleHooks.Provider>
  )
}

export default App