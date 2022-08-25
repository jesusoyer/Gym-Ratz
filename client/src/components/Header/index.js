import React from 'react';
import {Link } from "react-router-dom";
import logo from '../../images/rat.png';

const Header = () => {
    return (
//need to add conditional for authentication (pending connection)
    <nav className="nav">
        <Link className="logo" to="/"> <h1> Gym Ratz </h1>
        <img src={logo} className="App-logo" alt="logo" /> </Link>
        <div className="navLinks"> 
        <Link to="login"> login </Link>
        <Link to="login"> register </Link>
        <Link to="profile"> profile </Link>
        <Link to="workout"> add workout </Link>
        </div>  
    </nav>
    )
}

export default Header;