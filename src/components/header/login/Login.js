import React from 'react'
import './Login.css';
import { UserOutlined } from '@ant-design/icons';
import { Menu, Button } from 'antd';

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

function Login() {
    const handleMenuClick = (e) => {
        console.log('click', e);
    }

    const logIn = (e) => {
        e.preventDefault();
        window.location.href = AUTH_URL;
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                Profile
            </Menu.Item>
            <Menu.Item key="2">
                Log out
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <Button id="link-btn" type="primary" shape="round" size="large" onClick={logIn}>
                Log in
            </Button>
            {/* <Dropdown.Button overlay={menu} placement="bottomCenter">
                    Jose Amaya
                </Dropdown.Button> */}
        </>
    )
}

export default Login
