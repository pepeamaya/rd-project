import React from 'react'
import './Header.css';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import 'antd/dist/antd.css';

export const Header = () => {
    const { Search } = Input;

    const onSearch = value => console.log(value);
    return (
        <nav className="Header-navbar">
            <div className="btn-logo">
                <MenuOutlined className="menu-btn" />
                <div className="max-width">
                    <div className="logo"><a href="index.html">Dev<span>Pp</span></a></div>
                </div>
            </div>
            <div className='custom-search-ant-input'>
                <Search
                    placeholder="Search"
                    allowClear
                    onSearch={onSearch}
                />
            </div>
            <UserOutlined className="user-btn" />
        </nav>
    )
}

export default Header
