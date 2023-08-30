import React from 'react'
import {  Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
    <div className="nav-wrapper white">
      <a href="#" className="brand-logo left">Bank_System</a>
      <ul id="nav-mobile" className="right">

      <li><a href="/">Signin</a></li>,
      <li><a href="/">SignUp</a></li>,
      
      </ul>
    </div>
  </nav>
    </div>
  )
}

export default Navbar
