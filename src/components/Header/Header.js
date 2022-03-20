import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>Welcome to Rest countries</h1>
            <ul className='navbar'>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/countries">Countries</a></li>
            </ul>
        </div>
    );
};

export default Header;