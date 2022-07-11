import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

export default function App() {
    const cards = data.map(card => <Card 
        key={card.id}
        {...card}
    />)
    return (
        <div className='container'>
            <Nav />
            <Hero />
            <section className='cards-list'>
                {cards}
            </section> 
        </div>
    )
}