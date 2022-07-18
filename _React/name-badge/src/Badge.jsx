import React from 'react'; 

export default function Badge(props) {
    return (
        <section className='name-badge'>
        <div className='name-badge-title'>
          <h3>Badge</h3>
        </div>
        <div className='name-badge-info'>
          <p><strong>Name: </strong>{props.firstName} {props.lastName}</p>
          <p><strong>Phone: </strong>{props.phone}</p>
          <p><strong>Place of Birth: </strong>{props.birthPlace}</p>
          <p><strong>Favorite Food: </strong>{props.favFood}</p>
          <p><strong>Email: </strong>{props.email}</p>
          <p className='badge-about'><strong>About Me: </strong>{props.about}</p>
        </div>
      </section>
    )
}