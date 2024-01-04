// Navbar.js
import React from 'react';
import { BiLogoVisualStudio } from "react-icons/bi";
import './App.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo"><BiLogoVisualStudio size={35}/></div>
            <ul className="nav-links">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;
