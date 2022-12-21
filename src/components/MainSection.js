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

    console.log(meme)

    function handleChange(event) {
        const {value, name} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
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
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="get-button"
                    onClick={getMemeImage}
                >
                    GET A NEW IMAGE
                </button>

                <div className="meme">
                    <img src={meme.randomImage} className='meme--image' />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </div>
            
        </main>
    )
}