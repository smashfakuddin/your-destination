import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='navbar'>
            <h3>Urban Ride</h3>
            <ul>
                <li>Home</li>
                <li>Destination</li>
                <li>Blog</li>
                <li>Contact</li>
                <li><button className='button'>Log in</button></li>
            </ul>
        </div>
    );
};

export default Header;