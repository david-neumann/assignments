import React from 'react';

export default function Card(props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if (props.location === 'Online') {
        badgeText = 'ONLINE'
    }

    return (
        <div className='exp-card'>
            {badgeText && <div className='exp-card--badge'>{badgeText}</div>}
            <img src={`images/${props.coverImg}`} className='exp-card--photo'/>
            <div className='exp-card__rating-reviews-loc'>
                <img src='images/star.png' className='rating-star'/>
                {props.stats.rating} <span className='exp-card__reviews-loc'>({props.stats.reviewCount}) • {props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='exp-card__price'>From ${props.price}</span> / person</p>
        </div>
    )
}