import React, { useState } from 'react'
import '../App.css'

export default function Header() {
  const [toggle, setToggle] = useState(true)

  return (
    <header>
      <div className='logo'>SoftWM</div>
        <div className="info-header">
          <a href='#'>Home</a>
          <a href='#'>About us</a>
          <a href='#'>Contact</a>
          <label for="check" class="menuButton">
            <input id="check" type="checkbox"/>
              <span class="top"></span>
              <span class="mid"></span>
              <span class="bot"></span>
          </label>
      </div>
    </header>
  )
}