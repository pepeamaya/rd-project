import React, { createContext, useMemo } from "react";
import useAuth from "../hooks/useAuth";
const code = new URLSearchParams(window.location.search).get('code');

export const TokenContext = createContext();

export const TokenProvider = (props) => {
    const accessToken = useAuth(code);

    return (
        <TokenContext.Provider value={accessToken}>
            {props.children}
        </TokenContext.Provider>
    );
}