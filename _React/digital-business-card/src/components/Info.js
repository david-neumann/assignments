import React from 'react';
import photo from '../images/photo.jpeg';
import email from '../images/email-button.png';
import linkedin from '../images/linkedin-button.png';

export default function Info() {
    return (
        <div className='header'>
            <img src={photo} className='header--photo' />
            <h1 className='header--name'>David Neumann</h1>
            <h3 className='header--title'>Full Stack Developer</h3>
            <a href='' className='header--website'>davidneumann.website</a>
            <div>
                <a href=''><img src={email} className='contact-button' /></a>
                <a href=''><img src={linkedin} className='contact-button' /></a>
            </div>
        </div>
    )
}