import React, { useEffect, useState, useContext } from 'react';
import Album from './album/Album';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import './Dashboard.css';
import SpotifyWebApi from 'spotify-web-api-node';
import { TokenContext } from '../../contexts/TokenContext';

const spotifyApi = new SpotifyWebApi({
    clientId: `${process.env.REACT_APP_CLIENT_ID}`,
});

const Dashboard = () => {
    const { Search } = Input;
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([])
    const accessToken = useContext(TokenContext);

    useEffect(() => {
        console.log('Dash:>', accessToken);
        if (!accessToken) return;
        spotifyApi.setAccessToken(accessToken);
    }, [accessToken]);

    useEffect(() => {
        if (!accessToken) { return setSearchResults([]) };
        if (!search) {
            const promiseMySavedAlbums = async() => {
                // Retrieve the albums that are saved to the authenticated users
                const restSavedAlbums = await spotifyApi.getMySavedAlbums();
                const data = restSavedAlbums.body.items.map(item => {
                    const image = item.album.images.reduce(
                        (biggest, image) => {
                            if (image.height > biggest.height) {
                                return image;
                            } else {
                                return biggest;
                            }
                        }, item.album.images[0]
                    );

                    return {
                        title: item.album.name,
                        artist: item.album.artists[0].name,
                        uri: item.album.uri,
                        albumUrl: image.url,
                        totalTracks: item.album.total_tracks,
                    }
                });

                setSearchResults(data);
            };

            promiseMySavedAlbums()
            .catch((e) => {
                console.error(`There has been a problem with getMySavedAlbums(): ${e.message}`);
            });
        } else {
            const promiseSearchAlbums = async () => {
                // Search for an album
                const restSearchAlbum = await spotifyApi.searchAlbums(search);
                const data = restSearchAlbum.body.albums.items.map(item => {
                    const image = item.images.reduce(
                        (biggest, image) => {
                            if (image.height > biggest.height) {
                                return image;
                            } else {
                                return biggest;
                            }
                        }, item.images[0]
                    );
    
                    return {
                        title: item.name,
                        artist: item.artists[0].name,
                        uri: item.uri,
                        albumUrl: image.url,
                        totalTracks: item.total_tracks,
                    }
                });
    
                setSearchResults(data);
            };
    
            promiseSearchAlbums()
                .catch((e) => {
                    console.error(`There has been a problem with searchAlbums(): ${e.message}`);
                });
        }

    }, [search, accessToken]);

    return (
        <div className="dashboard">
            {searchResults.length > 0
                ?
                <>
                    <div className="custom-search-ant-input">
                        <Search
                            placeholder="Search"
                            onSearch={setSearch}
                        />
                    </div>
                    <Album listAlbums={searchResults} />
                </>
                :
                <h1 className="show-message">No albums yet...</h1>
            }
        </div>
    )
}

export default Dashboard;
