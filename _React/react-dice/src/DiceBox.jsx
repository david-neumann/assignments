import React, {useState} from 'react';
import Die from './Die';

export default function DiceBox() {
    const [randomArr, setRandomArr] = useState([1, 2, 3, 4, 5])
    
    const createRandomArr = () => {
        const newArr = Array.from({length: 5}, () => Math.floor(Math.random() * 7));
        setRandomArr(newArr);
    } 

    const createArrElements = randomArr.map(num => <Die number={num} />)
    
    return (
        <div>
            <h2>
                {createArrElements}
            </h2>
            <button onClick={createRandomArr}>Roll the die!</button>
        </div>
    )
}