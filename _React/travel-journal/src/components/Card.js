import React from 'react';

export default function Card(props) {
    return (
        <section className='card'>
            <figure className='card--image'>
                <img src={props.imageUrl} className='card--photo'/>
            </figure>
            <div className='card--info'>
                <div className='card--location'>
                    <img src='/images/location-marker.png' className='card--location--marker'/>
                    <h4 className='card--location--state'>{props.location}</h4>
                    <a href={props.googleMapsUrl} >View on Google Maps</a>
                </div>
                <h1 className='card--title'>{props.title}</h1>
                <h3 className='card--dates'>{`${props.startDate} - ${props.endDate}`}</h3>
                <p className='card--desc'>{props.description}</p>
            </div>
        </section>
    )
}