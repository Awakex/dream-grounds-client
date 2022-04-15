import React from "react";
import { Menu } from "antd";
import { AppstoreOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";

const LayoutMenu = () => {
    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]} style={{ marginTop: 60 }}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/">Владения</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<AppstoreOutlined />}>
                <Link to={ROUTES.GROUNDS.ROOT}>Земли</Link>
            </Menu.Item>
        </Menu>
    );
};

export default LayoutMenu;
