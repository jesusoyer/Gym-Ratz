import React from 'react';
import {Link } from "react-router-dom";
import logo from '../../images/rat.png';

import Auth from '../../utils/auth';

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
           <Link to="profile"> profile </Link>
            <Link to="workout"> add workout </Link>
            <a className="btn" onClick={logout}>
                logout
            </a>
            </>

        ) : ( 
        <>
        <Link to="/"> our story </Link>
        <Link to="login"> login + register </Link>
        
        </>
        )}

        </div>  
    </nav>
    )
}

export default Header;