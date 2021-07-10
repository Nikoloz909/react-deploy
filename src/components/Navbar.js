/* eslint-disable no-script-url */
import React from 'react'
import logo from '../img/logo.svg'
import {
    BrowserRouter as Router, Link} from "react-router-dom";

export default function Navbar() {

    return (
        <>
        <Router>
         <header className='navbar-header d-flex container'>
            <div className="logo-header d-flex" >
            <Link to="/">
                <img className='logo' src={logo}  alt="logo"/>
            </Link>
                <p className='header-title'>Build Software to Test Software</p>
            </div>
            <nav className='navbar'>
                <ul className='navbar-ul d-flex'>
                    <li className='navbar-li'>
                        <Link to="javascript:void(0)" > <i className="fas fa-search "></i>search</Link>
                    </li>
                    <li className='navbar-li'>
                        <Link to="javascript:void(0)">@ subscribe</Link>
                    </li>
                    <li className='navbar-li'>
                        <Link to="javascript:void(0)"> <i className="fas fa-envelope"></i>Contact us</Link>
                    </li>
                </ul>
                <button className='navbar-btn'> <i className="fas fa-bars"></i>menu</button>
            </nav>
         </header>
        </Router>
        </>
    )
}
