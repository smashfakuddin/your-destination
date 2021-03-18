import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='navbar'>
            <h3>Urban Ride</h3>
            <ul>
                <li><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
                <li><Link to="/destination" style={{ textDecoration: 'none' }}>Destination</Link></li>
                <li><Link to="/blog" style={{ textDecoration: 'none' }}>Blog</Link></li>
                <li><Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link></li>
                <li><Link to="/login"><button className='button'>Log in</button></Link></li>
            </ul>
        </div>
    );
};

export default Header;