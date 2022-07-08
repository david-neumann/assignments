import React from 'react';
import katieZaferes from '../images/katie-zaferes.png'
import star from '../images/star.png'

export default function Card(props) {
    return (
        <div className='exp-card'>
            <img src={katieZaferes} className='exp-card--photo'/>
            <div className='exp-card__rating-reviews-loc'>
                <img src={star} className='rating-star'/>
                {props.rating} <span className='exp-card__reviews-loc'>({props.reviewCount}) • {props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='exp-card__price'>From ${props.price}</span> / person</p>
        </div>
    )
}