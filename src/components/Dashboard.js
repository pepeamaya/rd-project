import React from 'react';
import { useEffect } from 'react';
import Cards from './Cards';
import useAuth from './useAuth';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import './Dashboard.css'

const code = new URLSearchParams(window.location.search).get('code');
const Dashboard = () => {
    const { Search } = Input;
    const onSearch = value => console.log(value);
    const accessToken = useAuth(code);

    return (
        <div className="dashboard">
            <div className="custom-search-ant-input">
                <Search
                    placeholder="Search"
                    allowClear
                    onSearch={onSearch}
                />
            </div>
            {accessToken && <Cards />}
        </div>
    )
}

export default Dashboard;
