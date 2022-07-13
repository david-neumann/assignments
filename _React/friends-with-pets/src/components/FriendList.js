import React from 'react';
import Friend from './Friend';
// import Pet from './Pet';
import data from '../data';

export default function FriendList() {
    // const friends = data.map(
    //     friend => {
    //         return (
    //             <Friend {...friend} />,
    //             friend.pets.map(
    //                 pet => <Pet {...pet} />
    //             )
    //     )}
    // )

    const friends = data.map(friend => <Friend key={friend.id} {...friend}/>)
    
    
    // const pets = data.map(
    //     friend => friend.pets.map(
    //         pet => <Pet {...pet} />
    //     )
    // )
    
    return (
        <div>
            {friends}
        </div>
    )

    // const people = [
    //     {id: 1, name: 'Alice', pets: [{name: 'dog'}, {name: 'cat'}]},
    //     {id: 2, name: 'Bob', pets: [{name: 'turtle'}, {name: 'rabbit'}]},
    //     {id: 3, name: 'Carl', pets: [{name: 'hamster'}, {name: 'parrot'}]},
    //   ];
    
    //   return (
    //     <div>
    //       {people.map((person, index) => {
    //         return (
    //           <div key={index}>
    //             <h2>Name: {person.name}</h2>
    
    //             {person.pets.map((pet, index) => {
    //               return (
    //                 <div key={index}>
    //                   <h2>Pet: {pet.name}</h2>
    //                 </div>
    //               );
    //             })}
    
    //             <hr />
    //           </div>
    //         );
    //       })}
    //     </div>
    //   );
}