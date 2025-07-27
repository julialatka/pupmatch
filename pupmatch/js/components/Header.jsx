import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
       <header className="main-header">
        <nav>
            <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        </header> 
    )
}

export default Header;
