import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = (code) => {
    const [access, setAccess] = useState(false);
    
    useEffect(() => {
        if (!code) return;
        const serverURL = process.env.REACT_APP_API_URL;
        axios.post(`${serverURL}/login`, {
            code,
        })
        .then((res) => {
            setAccess(true);
            window.history.pushState({}, null, '/dashboard');
        })
        .catch((error) => {
            console.error(error);
            alert(error);
            setAccess(false);
        })

    }, [code]);

    return access;
};

export default useAuth;
