import React from "react";

import { Layout } from "antd";
import LayoutMenu from "../components/LayoutMenu/LayoutMenu";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";

const { Content, Footer, Sider, Header } = Layout;

const AppLayout = ({ children }) => {
    return (
        <Layout hasSider>
            <Sider
                style={{
                    overflow: "auto",
                    height: "100vh",
                    position: "fixed",
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <div className="logo" />
                <LayoutMenu />
            </Sider>

            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <HeaderMenu />
                <Content style={{ margin: "24px 16px 0", overflow: "initial", minHeight: "100vh" }}>
                    <div
                        className="site-layout-background"
                        style={{ padding: 24, textAlign: "center" }}
                    >
                        {children}
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>Dream Grounds</Footer>
            </Layout>
        </Layout>
    );
};

export default AppLayout;
