import React from 'react';
import twitter from '../images/twitter-icon.png'
import facebook from '../images/facebook-icon.png'
import instagram from '../images/instagram-icon.png'
import github from '../images/github-icon.png'

export default function Footer() {
    return (
        <footer>
            <a href=''><img src={twitter} className='social-icon' /></a>
            <a href=''><img src={facebook} className='social-icon' /></a>
            <a href=''><img src={instagram} className='social-icon' /></a>
            <a href=''><img src={github} className='social-icon' /></a>
        </footer>
    )
}