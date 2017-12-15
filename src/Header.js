import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/game'>Game</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
        <li><Link to='/Profile'>Profile</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header