import React from 'react'
import './App.css'
export default function Navbar() {
  return (
      <nav className='nav'>
          <a href='/'>techy-anshika</a>
          <ul>
              <li className='active'>
                  <a href='/pricing'>Pricing</a>
              </li>
              <li>
                  <a href='/about'>About</a>
              </li>
          </ul>  
    </nav>
  )
}
