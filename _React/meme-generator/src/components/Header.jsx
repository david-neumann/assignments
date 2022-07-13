import React from 'react';

export default function Header() {
    return (
        <header>
            <div className='header--logo'>
                <img src='/images/troll-face.png' className='header--icon'/>
                <h2 className='header--title'>Meme Generator</h2>
            </div>
            <h4 className='header--info'>React Course - Project 3</h4>
        </header>
    )
}