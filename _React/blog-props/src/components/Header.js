import React from 'react';
import Navbar from './Navbar';

export default function Header() {
    return (
        <header>
            <Navbar />
            <h1 className='header--title'>Clean Blog</h1>
            <h3 className='header--subtitle'>A Blog Theme by Start Bootstrap</h3>
        </header>
    )
}