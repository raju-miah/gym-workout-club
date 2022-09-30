import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <h1><FontAwesomeIcon icon={faDumbbell} /> GYM WORKOUT CLUB</h1>
            <div>
                <a href="/workout">Workout</a>
                <a href="/blog">Blog</a>
                <a href="/about">About</a>
            </div>

        </nav>
    );
};

export default Header;