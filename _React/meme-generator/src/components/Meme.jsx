import React, {useState} from 'react';
import memesData from '../memesData';

export default function Meme() {
    const [memeImage, setMemeImage] = useState('');
    
    const getMemeImage = () => {
        const memesArr = memesData.data.memes; 
        const randomNum = Math.floor(Math.random() * memesArr.length - 1);
        const {url} = memesArr[randomNum];
        setMemeImage(url);
    }
    
    return (
        <main>
            <section className='meme-form'>
                <div className='input-container'>
                    <input type='text' placeholder='Top text' className='meme-text-input' />
                    <input type='text' placeholder='Bottom text' className='meme-text-input' />
                </div>
                <button onClick={getMemeImage}>Get a new meme image 🖼</button>
            </section>
            <img src={memeImage} className='meme-image'/>
        </main>
    )
}