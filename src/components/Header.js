import React, { useState } from 'react'
import './Header.css';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { SideBarData } from './SidebarData';

export const Header = () => {
    const { Search } = Input;
    const onSearch = value => console.log(value);
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
                        <div className="logo">Dev<span>Pp</span></div>
                    </div>
                </div>
                <div className="custom-search-ant-input">
                    <Search
                        placeholder="Search"
                        allowClear
                        onSearch={onSearch}
                    />
                </div>
                <UserOutlined className="user-btn" />
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

export default Header
