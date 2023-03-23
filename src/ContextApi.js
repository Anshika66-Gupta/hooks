import React, { useContext } from 'react';
import {ExampleHooks } from './App'

const ContextApi = () => {
    const { appColor } = useContext(ExampleHooks);
    console.log("appcolor: " , appColor)
  return (
      <div>
          <h1>
          
              Child Component
              </h1>
      </div>
  )
}

export default ContextApi