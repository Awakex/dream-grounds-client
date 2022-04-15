import React from "react";
import { Layout } from "antd";
import styles from "./styles.module.sass";
import cn from "classnames";
import { useAppSelector } from "../../hooks/redux";
const { Header } = Layout;
const HeaderMenu = () => {
    const { online, isConnected, user } = useAppSelector((state) => state.authReducer);
    return (React.createElement(Header, { className: cn({
            "site-layout-background -sider-right": true,
            [styles.menu]: true,
        }) },
        React.createElement("p", null, isConnected ? `Онлайн: ${online} человек` : "Оффлайн"),
        React.createElement("p", null, user === null || user === void 0 ? void 0 :
            user.money,
            " \u043C\u043E\u043D\u0435\u0442")));
};
export default HeaderMenu;
