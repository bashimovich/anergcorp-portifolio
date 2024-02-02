import React from 'react'
import './header.css'

function Header() {
  return (
    <div>
        <div className="header">
            <div className="logo">
                <p>anergcorp</p>
            </div>
            <div className="navbar">
                <p className='active'>Home</p>
                <p>Resume</p>
            </div>
        </div>
    </div>
  )
}

export default Header