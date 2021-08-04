import React, { createContext } from "react";
import useAuth from "../hooks/useAuth";
const code = new URLSearchParams(window.location.search).get('code');

export const TokenContext = createContext();

export const TokenProvider = (props) => {
    const accessToken = useAuth(code);
    if (accessToken) localStorage.setItem('accessToken', accessToken);


    return (
        <TokenContext.Provider value={accessToken}>
            {props.children}
        </TokenContext.Provider>
    );
}