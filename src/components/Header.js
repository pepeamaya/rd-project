import React, { useState } from 'react'
import './Header.css';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { SideBarData } from './SidebarData';

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

export const Header = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSideBar = () => setSidebar(!sidebar);

    return (
        <>
            <div className="Header-navbar">
                <div className="btn-logo">
                    <Link to="#" className="menu-btn">
                        <MenuOutlined onClick={showSideBar}/>
                    </Link>
                    <div className="max-width">
                        <div className="logo">My <span>albums</span></div>
                    </div>
                </div>

                <a className="link-btn" href={AUTH_URL}><UserOutlined className="user-btn" /></a>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSideBar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <MenuOutlined />
                        </Link>
                    </li>
                    {
                        SideBarData.map((option, index) => {
                            return (
                                <li key={index} className={option.cName}>
                                    <Link to={option.path}>
                                        {option.icon} 
                                        <span className="title-span">{option.title}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </>

    )
}

export default Header;
