import React from 'react';
import Cheese from '../../images/cheese.png'

const Footer = () => {
    return (
       <footer>
           <a className="footerItem" href="https://github.com/jesusoyer/Gym-Ratz" rel="noopener noreferrer" target="_blank"> RatzRepo </a> 
           <img className="footerItem" src={Cheese} alt="cheese-icon" />
       </footer>
    )
}

export default Footer;