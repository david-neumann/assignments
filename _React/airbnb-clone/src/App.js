import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Card from './components/Card';

export default function App() {
    return (
        <div className='container'>
            <Nav />
            <Hero />
            <Card 
                img="katie-zaferes.png"
                rating="5.0"
                reviewCount={6}
                location="USA"
                title="Life Lessons with Katie Zaferes"
                price={136}
            />
        </div>
    )
}