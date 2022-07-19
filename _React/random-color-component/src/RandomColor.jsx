import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function RandomColor() {
    const [randomColor, setRandomColor] = useState();

    useEffect(() => {
        axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
            .then(res => setRandomColor(res.data.colors[0].hex))
            .catch(err => console.log(err))
    }, [])
    
    return (
        <div>
            <div 
                className='color-box'
                style={{backgroundColor: `#${randomColor}`}}
            >
    
            </div>
        </div>
    )
}