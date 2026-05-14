import React, { useState } from "react";
import {Link} from 'react-router-dom';
import "../styles/Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    Health<span>AI</span>
                </div>

                <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
                    <li><Link to='/' className="li">Home</Link></li>
                    <li><Link to='/about' className="li">About</Link></li>
                    <li><Link to='/features' className="li">Features</Link></li>
                    <li><Link to='/HowItWorks' className="li">How it Works</Link></li>
                    <li><Link to='/contact' className="li">Contact</Link></li>
                </ul>

                <div className="navbar-actions">
                    <button className="btn-login"><Link to='login' className="lis">Login</Link></button> 
                    <Link to='/signup'><button className="btn-signup">Sign Up</button></Link>
                </div>

                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;