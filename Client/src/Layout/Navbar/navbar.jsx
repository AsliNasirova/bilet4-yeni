import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
  return (
    <nav>
    <div className='navbar'>
      <div className="textNav">
        <h1>Time</h1>
        <h1 className='zone'>Zone</h1>
      </div>
        <ul className='switchNav'>
            <li><NavLink to="/home">home</NavLink></li>
            <li><NavLink to="/add">add</NavLink></li>
            <li><NavLink to="/wishlist"><i className="fa-solid fa-heart"></i></NavLink></li>
            <li><NavLink to="/basket"><i className="fa-solid fa-basket-shopping"></i></NavLink></li>
            <li><NavLink to="/search"><i className="fa-solid fa-magnifying-glass"></i></NavLink></li>
           
            

        </ul>
    </div>
    </nav>
  )
}

export default Navbar