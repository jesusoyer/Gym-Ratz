import React from 'react';
import {Link } from "react-router-dom";
import logo from '../../images/rat.png';

import Auth from '../../utils/auth';

import '../Header/header.css'

// import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
    return (
//need to add conditional for authentication (pending connection)
    <nav className="nav">
        <Link className="logo" to="/"> <h2> Gym Ratz </h2>
        <img src={logo} className="App-logo" alt="logo" /> </Link>
        <div className="navLinks"> 

        {Auth.loggedIn() ? (
            <>
            <Link to="/"> home </Link>
           <Link to="profile"> profile </Link>
            <button className="btn" onClick={logout}> logout </button>
            </>

        ) : ( 
        <>

        <a href="/#mission"> our mission </a>
        <Link to="login"> login + register </Link>
        
        </>
        )}

        </div>  
    </nav>
    )
}

export default Header;