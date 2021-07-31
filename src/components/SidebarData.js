import React from 'react';
import { 
    PlaySquareOutlined,
    HomeOutlined,
} from '@ant-design/icons';

export const SideBarData = [
    {
        title: "Home",
        path: "/",
        icon: <HomeOutlined />,
        cName: "nav-text"
    },
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <PlaySquareOutlined />,
        cName: "nav-text"
    },
]
