import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <h1>GYM WORKOUT CLUB</h1>
            <div>
                <a href="/workout">Workout</a>
                <a href="/blog">Blog</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;