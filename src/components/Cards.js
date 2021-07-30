import React from 'react'
import './Cards.css'

function Cards() {
    return (
        <div className="wrapper-grid">
            <div className="container">
                <img src="https://i.scdn.co/image/89b92c6b59131776c0cd8e5df46301ffcf36ed69" className="profile-img" alt="album"/>
                <h1 className="name">The Best Of Keane</h1>
                <h2 className="artist">Keane</h2>
                <p className="description">2013 38 songs, 2 hr 34 min</p>
            </div>
        </div>
    )
}

export default Cards
