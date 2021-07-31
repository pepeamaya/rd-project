import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = (code) => {
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    useEffect(() => {
        if (!code) return;
        axios.post('http://localhost:3001/login', {
            code,
        })
        .then(res => {
            setAccessToken(res.data.accessToken);
            setRefreshToken(res.data.refreshToken);
            setExpiresIn(res.data.expiresIn);
            // window.history.pushState({}, null, '/');
            console.log(res.data);
        })
        .catch(() => {
            // window.location = '/';
        })

    }, [code]);

    return accessToken;
};

export default useAuth;
