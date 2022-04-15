import React, { useState } from "react";
import styles from "./styles.module.sass";
import Login from "../Login/Login";
import Register from "../Register/Register";
const Authorization = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (React.createElement("div", { className: styles.wrapper },
        React.createElement("div", { className: styles.auth },
            isLogin ? React.createElement(Login, null) : React.createElement(Register, null),
            React.createElement("p", { className: styles.authHelperText, onClick: () => setIsLogin(!isLogin) },
                isLogin ? "Нет аккаунта? Регистрация" : "Вход в систему",
                " "))));
};
export default Authorization;
