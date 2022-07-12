import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import data from './data';

export default function App() {
  const cards = data.map(card => <Card {...card}/>)
  console.log(cards)
  return (
    <div className='container'>
      <Header />
      <main>
        {cards}
      </main>
    </div>
  )
}
