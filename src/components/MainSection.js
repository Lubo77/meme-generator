import React from "react"
import memesData from "../memesData.js"

export default function MainSection() {
    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "https://i.imgflip.com/3l60ph.jpg"
        }
    )
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: memesArray[randomNumber].url
            }
        })
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

                <img src={meme.randomImage} className='meme--image' />
            </div>
            
        </main>
    )
}