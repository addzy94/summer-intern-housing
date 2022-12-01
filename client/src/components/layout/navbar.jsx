import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/landing">Landing</Link>
      <Link to= "/profile">Profile</Link>
      <Link to= "/apartment">Apartment</Link>
    </div>
  )
}

export default Navbar;