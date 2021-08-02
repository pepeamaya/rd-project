import React, { useState } from 'react'
import './Header.css';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import Sidebar from './sidebar/Sidebar';

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

export const Header = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSideBar = () => setSidebar(!sidebar);

    return (
        <>
            <div className="Header-navbar">
                <div className="btn-logo">
                    <MenuOutlined className="menu-btn" onClick={showSideBar} />
                    <div className="max-width">
                        <div className="logo">My <span>albums</span></div>
                    </div>
                </div>

                <a className="link-btn" href={AUTH_URL}><UserOutlined className="user-btn" /></a>
            </div>
            <Sidebar sidebar={sidebar} onShowSideBar={showSideBar}/>
        </>
    )
}

export default Header;
