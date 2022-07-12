import React from 'react';

export default function Card(props) {
    let badgeText;
    if (props.price < 500) {
        badgeText = '$'
    } else if (props.price >= 500 && props.price < 1000) {
        badgeText = '$$'
    } else {
        badgeText = '$$$'
    };

    return (
        <section className='card' style={{backgroundImage: `url(${props.imgUrl})`}}>
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <h1 className='card--place'>{props.place}</h1>
            <p className='card--text'>Best time of the year to go: {props.timeToGo}</p>
        </section>
    )
}