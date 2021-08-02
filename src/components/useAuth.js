import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = (code) => {
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();
    const serverURL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        if (!code) return;
        axios.post(`${serverURL}/login`, {
            code,
        })
        .then(res => {
            setAccessToken(res.data.accessToken);
            setRefreshToken(res.data.refreshToken);
            setExpiresIn(res.data.expiresIn); // 3600sec or 1h by default
            window.history.pushState({}, null, '/dashboard/');
        })
        .catch((e) => {
            console.log(`There has been a problem with: ${e}`);
            window.location = '/';
        })

    }, [code]);

    return accessToken;
};

export default useAuth;
