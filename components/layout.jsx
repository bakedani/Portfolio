//layout.jsx, Dani Baker, 301070844, September 26th 2024
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/assets/logo.jpg';
import './layout.css';
export default function Layout() {
    return (
    <>
    <div className='navbar-container'>
    <div className='container2'>
    <div className='navtext'>
    < img src={logo}alt="Danielle Baker" className="logo" width="50px" height="50px"/>
    <h1 >My Portfolio</h1>
    </div>
    <nav className='navbar'>
    <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/education">Education</Link>| <Link to="/project">Project</Link>| <Link to="/services">Services</Link>| <Link to="/contact">Contact</Link>
    </nav>
   <br/>
   </div>
    </div>
    </>
    
    );
   }
