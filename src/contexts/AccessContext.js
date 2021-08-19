import React, { createContext } from "react";
import useAuth from "../hooks/useAuth";
const code = new URLSearchParams(window.location.search).get('code');

export const AccessContext = createContext();

export const AccessProvider = (props) => {
    const access = useAuth(code);
    return (
        <AccessContext.Provider value={access}>
            {props.children}
        </AccessContext.Provider>
    );
}