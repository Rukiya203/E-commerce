import React from 'react'
import './Navbar.css'
import myImage from './assets/logo.webp'; // Adjust the path accordingly



const Navbar = () => {
  return (
    <div className='navbar'>

        <img src={myImage} alt="" className="logo" />
      
    </div>
  )
}

export default Navbar
