import React from "react";
import { Layout } from "antd";
import LayoutMenu from "../components/LayoutMenu/LayoutMenu";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
const { Content, Footer, Sider, Header } = Layout;
const AppLayout = ({ children }) => {
    return (React.createElement(Layout, { hasSider: true },
        React.createElement(Sider, { style: {
                overflow: "auto",
                height: "100vh",
                position: "fixed",
                left: 0,
                top: 0,
                bottom: 0,
            } },
            React.createElement("div", { className: "logo" }),
            React.createElement(LayoutMenu, null)),
        React.createElement(Layout, { className: "site-layout", style: { marginLeft: 200 } },
            React.createElement(HeaderMenu, null),
            React.createElement(Content, { style: { margin: "24px 16px 0", overflow: "initial", minHeight: "100vh" } },
                React.createElement("div", { className: "site-layout-background", style: { padding: 24, textAlign: "center" } }, children)),
            React.createElement(Footer, { style: { textAlign: "center" } }, "Dream Grounds"))));
};
export default AppLayout;
