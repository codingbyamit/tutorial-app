import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <div className='navbar'>
        <ul>
            <li><NavLink to={'/html'}>HTML</NavLink></li>
            <li><NavLink to={'/css'}>CSS</NavLink></li>
            <li><NavLink to={'/javascript'}>JAVASCRIPT</NavLink></li>
            <li><NavLink to={'/react'}>REACT</NavLink></li>
        </ul>
    </div>
  )
}

export default Navigation