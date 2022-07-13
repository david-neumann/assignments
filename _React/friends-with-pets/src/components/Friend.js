import React from 'react';
import Pet from './Pet';
import data from '../data';

// console.log(data[0].pets[0].name)

export default function Friend(props) {
    const pets = data.map(
        (friend) => {
            return friend.pets.map(pet => <Pet {...pet} />)
        })
    console.log(pets)
    return (
        <section className='friend-card'>
            <h1>{props.name} | {props.age}</h1>
            <h3>Pets:</h3>
            {pets}
        </section>
    )
}