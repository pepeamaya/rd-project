import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import useAuth from './useAuth';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import './Dashboard.css';
import SpotifyWebApi from 'spotify-web-api-node';

const code = new URLSearchParams(window.location.search).get('code');
const spotifyApi = new SpotifyWebApi({
    clientId: '4a59a2fe9e2a47deb6c6b0ecadc3a769',
});

const Dashboard = () => {
    const { Search } = Input;
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([])
    const accessToken = useAuth(code);

    useEffect(() => {
        if (!accessToken) return;
        spotifyApi.setAccessToken(accessToken);
    }, [accessToken]);

    useEffect(() => {
        if (!accessToken) { return setSearchResults([]) };
        if (!search) {
            const getchMySavedAlbums = async() => {
                const rest = await spotifyApi.getMySavedAlbums();
                const data = rest.body.items.map(item => {
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

            getchMySavedAlbums()
            .catch((e) => {
                console.log('There has been a problem with getMySavedAlbums(): ' + e.message);
            });
        } else {
            
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
                            allowClear
                            onSearch={setSearch}
                        />
                    </div>
                    <Cards listAlbums={searchResults} />
                </>
                :
                <h1 className="error-message">How are you today?</h1>
            }
        </div>
    )
}

export default Dashboard;
