import React from "react";
import { Menu } from "antd";
import { AppstoreOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";
const LayoutMenu = () => {
    return (React.createElement(Menu, { theme: "dark", mode: "inline", defaultSelectedKeys: ["4"], style: { marginTop: 60 } },
        React.createElement(Menu.Item, { key: "1", icon: React.createElement(UserOutlined, null) },
            React.createElement(Link, { to: "/" }, "\u0412\u043B\u0430\u0434\u0435\u043D\u0438\u044F")),
        React.createElement(Menu.Item, { key: "6", icon: React.createElement(AppstoreOutlined, null) },
            React.createElement(Link, { to: ROUTES.GROUNDS.ROOT }, "\u0417\u0435\u043C\u043B\u0438"))));
};
export default LayoutMenu;
