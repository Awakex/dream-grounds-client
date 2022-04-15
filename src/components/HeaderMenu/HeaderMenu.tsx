import React from "react";
import { Layout } from "antd";
import styles from "./styles.module.sass";
import cn from "classnames";
import { useAppSelector } from "../../hooks/redux";

const { Header } = Layout;

const HeaderMenu = () => {
    const { online, isConnected, user } = useAppSelector((state) => state.authReducer);

    return (
        <Header
            className={cn({
                "site-layout-background -sider-right": true,
                [styles.menu]: true,
            })}
        >
            <p>{isConnected ? `Онлайн: ${online} человек` : "Оффлайн"}</p>

            <p>{user?.money} монет</p>
        </Header>
    );
};

export default HeaderMenu;
