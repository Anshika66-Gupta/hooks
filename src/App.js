import React from 'react'
import Navbar from './Navbar'
import About from './Pages/About'
import Pricing from './Pages/Pricing'

const App = () => {
  let Component 
  switch (window.location.pathname) {
    case "/":
      Component = <App />
        break 
    case "/about":
      Component = <About />
      break
    case "/pricing":
      Component = <Pricing />
      break
      default:

}
  return (
   <>
      <Navbar />
      {Component} 
    </>
  )
}

export default App