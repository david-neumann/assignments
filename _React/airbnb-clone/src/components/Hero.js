import React from 'react';
import heroPhotos from '../images/hero-photos.png';

export default function Hero() {
    return (
        <section className='hero'>
            <img src={heroPhotos} />
            <h1 className='hero--heading'>Online Experiences</h1>
            <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}