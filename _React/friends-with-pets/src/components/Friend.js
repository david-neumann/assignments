import React from 'react';
import Pet from './Pet';
import data from '../data';

export default function Friend(props) {
    const petsArr = data.map(item => item.pets);
    const friendPets = petsArr.map(
        groupOfPets => groupOfPets.map(pet => <Pet {...pet} />)
    );
    console.log(friendPets)

    return (
        <section className='friend-card'>
            <h1>{props.name} | {props.age}</h1>
            <h3>Pets:</h3>
            {friendPets}
        </section>
    )
}