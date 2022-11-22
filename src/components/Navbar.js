import React, {useState} from 'react';
import Logo from '../assets/logoshop.jpg';
import {Link} from 'react-router-dom';

import'../styles/Navbar.css'


function Navbar() {

   const [openLinks,setOpennLinks] = useState(false)

    const toggleNavbar = ()=>{
        setOpennLinks(!openLinks);
    };
  return (

      
    <div className='navbar'>

      
        <div className='leftSide' id={openLinks ? "open" : "close"}>
            <img src={Logo} alt="" />
            <div className='hiddenLinks'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Product</Link>
            <Link to="/newarrivals">New Arrivals</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/cart">Cart</Link>

            
            

            </div>
        </div>
        <div className='rightSide'>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/newarrivals">New Arrivals</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/cart">Cart</Link>
            <button onClick={toggleNavbar}>
                {/* <ReorderIcon /> */}
            </button>
        </div>
    </div>
  )
}

export default Navbar