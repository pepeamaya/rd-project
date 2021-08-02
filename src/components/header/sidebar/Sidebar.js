import React from 'react';
import { Link } from 'react-router-dom';
import { SideBarData } from './SidebarData';
import { MenuOutlined } from '@ant-design/icons';
import './Sidebar.css';

function Sidebar({sidebar, onShowSideBar}) {
    return (
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={() => onShowSideBar()}>
                <li className="navbar-toggle">
                    <MenuOutlined className="menu-bars" />
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
    )
}

export default Sidebar;
