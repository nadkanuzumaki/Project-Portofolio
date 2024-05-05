import React from 'react';
import './Navbar.css';
import Logo from '../../assets/logo.png';
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={Logo} alt="Logo" className="logo" />
        <div className="navbarMenu">
            <Link className="navbarMenuListItem">Home</Link>
            <Link className="navbarMenuListItem">Portofolio</Link>
            <Link className="navbarMenuListItem">About</Link>
        </div>
        <button className="navbarMenuBtn">Contact Me</button>
    </div>
  )
};

export default Navbar;