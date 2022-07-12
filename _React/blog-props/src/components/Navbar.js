import React from 'react';

export default function Navbar() {
    return (
        <nav>
            <a href='index.html' className='nav--brand'>Start Bootstrap</a>
            <ul className='nav--main-nav'>
                <li className='nav--item'><a href='' className='nav--link'>Home</a></li>
                <li className='nav--item'><a href='' className='nav--link'>About</a></li>
                <li className='nav--item'><a href='' className='nav--link'>Sample Post</a></li>
                <li className='nav--item'><a href='' className='nav--link'>Contact</a></li>
            </ul>
        </nav>
    )
}