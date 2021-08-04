import React, { useState } from 'react'
import './Header.css';
import { MenuOutlined } from '@ant-design/icons';
import Sidebar from './sidebar/Sidebar';
import Login from './login/Login';

const Header = () => {
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
                <Login />
            </div>
            <Sidebar sidebar={sidebar} onShowSideBar={showSideBar} />
        </>
    )
}

export default Header;
