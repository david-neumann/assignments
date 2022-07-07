import React from 'react';
import reactLogo from '../images/reactjs-icon.png';

export default function Navbar() {
    return (
        <nav>
            <img src={reactLogo} className='nav__logo' />
            <h3 className='nav__logo-text'>ReactFacts</h3>
            <h4 className='nav__title'>React Course - Project 1</h4>
        </nav>
    )
}