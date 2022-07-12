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

        </section>
    )
}