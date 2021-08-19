import React, { useContext, useState, useEffect } from 'react';
import Album from './album/Album';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import './Dashboard.css';
import { AccessContext } from '../../contexts/AccessContext';
import axios from 'axios';
const serverURL = process.env.REACT_APP_API_URL;

const Dashboard = () => {
    const { Search } = Input;
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const access = useContext(AccessContext);

    useEffect(() => {
        if (!access) return;
        setLoading(true);
        axios.get(`${serverURL}/albums?search=${encodeURIComponent(search)}`)
        .then((res) => {
            setSearchResults(res.data);
            setLoading(false);
        }).catch((error) => {
            console.error(error);
            setLoading(false);
            setError(error);
        });
    }, [search, access]);

    if (!access) {
        return (
            <div className="dashboard"><h1 className="show-message">Please, log in</h1></div>
        );
    }

    if (loading) {
        return (
            <div className="dashboard"><h1 className="show-message">Loading...</h1></div>
        );
    }

    if (error) {
        return (
            <div className="dashboard"><h1 className="show-message">Something went wrong</h1></div>
        );
    }
    
    // default behavior
    return (
        <div className="dashboard">
            <div className="custom-search-ant-input">
                <Search 
                    placeholder="Search"
                    onSearch={setSearch}
                />
            </div>
            {searchResults.length === 0 ? <h1 className="show-message">Oooops, something went wrong while loading your albums</h1> : <Album listAlbums={searchResults} />}
        </div>
    );

}

export default Dashboard;
