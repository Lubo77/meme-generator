import React from "react"
import memesData from "../memesData.js"

export default function MainSection() {
    const [memeImage, setMemeImage] = React.useState('') 
    
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }
    
    return (
        <main>
            <div className="container">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="input"
                />
                <button 
                    className="get-button"
                    onClick={getMemeImage}
                >
                    GET A NEW IMAGE
                </button>

                <img src={memeImage} className='meme--image' />
            </div>
            
        </main>
    )
}