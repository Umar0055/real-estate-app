import React from 'react'
import { Link } from 'react-router'
export default function Navbar() {
  return (
    <nav className='navbar'>
    <div className="navbar-container">
      <div className='box'>
      <h3 className="logo">Rentiz</h3>
      </div>
      <ul className="navbar-list">
        <li>  <Link to="/" className="navbar-link">Home</Link></li>
        <li> <Link to="/about" className="navbar-link">About us</Link> </li>
        <li> <Link to="/buying" className="navbar-link">Buying</Link></li>
        <li>  <Link to="/renting" className="navbar-link">Renting</Link></li>
        <li>  <Link to="/selling" className="navbar-link">Selling</Link></li>
        
        <li> <Link to="/contact" className="navbar-link">Contact us</Link></li>
       
        <li>  <Link to="/login" className="btn ">Login</Link></li>
        <li>  <button type="button" className="btn btn-success">sign up</button></li>
      </ul>

    </div>
  </nav>

  )
}
