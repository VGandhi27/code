import React from 'react'
import {  Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
    <div className="nav-wrapper white">
      <Link to="/" className="brand-logo left">Bank_System</Link>
      <ul id="nav-mobile" className="right">

      <li>
        <Link to ="/signin">Signin</Link>
      </li>,
      <li>
        <Link to="/signup">SignUp</Link>
      </li>,
      
      </ul>
    </div>
  </nav>
    </div>
  )
}

export default Navbar
