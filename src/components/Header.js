import React from "react"
import logo from '../images/meme-icon.png';

export default function Header() {
    return (
        <header className="header">
            <img 
                src={logo} 
                className="header--logo"
            />
            <h2 className="header--title">Meme Generator</h2>
        </header>
    )
}