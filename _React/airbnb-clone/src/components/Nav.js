import React from 'react';
import airbnb from '../images/airbnb-logo.png'

export default function Nav() {
    return (
        <nav>
            <img src={airbnb} className='nav--logo' ></img>
        </nav>
    )
}