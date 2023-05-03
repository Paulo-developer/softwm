import React, {useState} from 'react'
import '../App.css'

export default function Header() {
  const [toggle, setToggle]=useState(true)

  return (
      <header>
        <div className='logo'>SoftWM</div>
        <div className="info-header">
          <a href='#'>Home</a>
          <a href='#'>About us</a>
          <a href='#'>Contact</a>
          <div class="cadastro">
              <button><a href="#">Login</a></button>
              <button><a href="#">Sign in</a></button>
          </div>
        </div>
      </header>
    )
}