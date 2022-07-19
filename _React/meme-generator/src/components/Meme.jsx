import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Meme() {
    const [allMemes, setAllMemes] = useState([])
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: ''
    })

    useEffect(() => {
        axios.get('https://api.imgflip.com/get_memes')
            .then(res => setAllMemes(res.data))
            .catch(err => console.log(err))
    }, [])
    
    const getMemeImage = () => {
        const memesArr = allMemes.data.memes; 
        const randomNum = Math.floor(Math.random() * memesArr.length - 1);
        const {url} = memesArr[randomNum];
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    const handleChange = (event) => {
        const {name, value} = event.target; 
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    return (
        <main>
            <section className='meme-form'>
                <div className='input-container'>
                    <input 
                        type='text' 
                        placeholder='Top text' 
                        className='meme-text-input'
                        onChange={handleChange}
                        value={meme.topText}
                        name='topText'
                    />
                    <input 
                        type='text' 
                        placeholder='Bottom text' 
                        className='meme-text-input'
                        onChange={handleChange}
                        value={meme.bottomText} 
                        name='bottomText'
                    />
                </div>
                <button onClick={getMemeImage}>Get a new meme image 🖼</button>
            </section>
            <section className='meme'>
                <img src={meme.randomImage} className='meme-image'/>
                <h2 className='meme-text top'>{meme.topText}</h2>
                <h2 className='meme-text bottom'>{meme.bottomText}</h2>
            </section>
        </main>
    )
}