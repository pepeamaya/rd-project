import React from 'react'
import './Album.css'

function Album({ listAlbums }) {
    return (
        <div className="wrapper-grid">
            {listAlbums.map((item, index) => {
                return (
                    <div key={index} className="container">
                        <img src={item.albumUrl} className="profile-img" alt="album" />
                        <h2 className="name">{item.title}</h2>
                        <h3 className="artist">{item.artist}</h3>
                        <p className="description">{item.totalTracks} songs</p>
                    </div>
                );
            })}
        </div>
    )
}

export default Album;
