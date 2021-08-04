import React, { useContext, useEffect } from 'react'
import './Login.css';
import { UserOutlined } from '@ant-design/icons';
import { Menu, Button, Dropdown } from 'antd';
import { TokenContext } from '../../../contexts/TokenContext';

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

const Login = () => {
    const accessToken = useContext(TokenContext);
    const localToken = accessToken || localStorage.getItem('accessToken');


    useEffect(() => {
        if (!localToken) return;
    }, [localToken]);

    const handleMenuClick = (e) => {
        if (e.key === "2") {
            localStorage.removeItem('accessToken');
            <TokenContext.Provider value={null} />
            window.location = '/';
        }
    }

    const logIn = (e) => {
        e.preventDefault();
        window.location.href = AUTH_URL;
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item disabled key="1" icon={<UserOutlined />}>
                Profile
            </Menu.Item>
            <Menu.Item danger key="2">
                Log out
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            {localToken
                ? <Dropdown.Button overlay={menu} placement="bottomCenter">Welcome!</Dropdown.Button>
                : <Button id="link-btn" type="primary" shape="round" size="large" onClick={logIn}>Log in</Button>
            }
        </>
    )
}

export default Login
