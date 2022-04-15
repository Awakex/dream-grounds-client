import React, { useState } from "react";
import styles from "./styles.module.sass";
import Login from "../Login/Login";
import Register from "../Register/Register";

const Authorization = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div className={styles.wrapper}>
            <div className={styles.auth}>
                {isLogin ? <Login /> : <Register />}
                <p className={styles.authHelperText} onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? "Нет аккаунта? Регистрация" : "Вход в систему"}{" "}
                </p>
            </div>
        </div>
    );
};

export default Authorization;
