import React, { useEffect } from "react";
import useWebsocket from "./hooks/useWebsocket";
import AppLayout from "./layouts/appLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES_COMPONENTS } from "./routes";
import { useAppSelector } from "./hooks/redux";
import Authorization from "./components/Authorization/Authorization";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { authSlice } from "./store/auth/authSlice";
const App = () => {
    const { connect, disconnect } = useWebsocket();
    const { isConnected, user, isAuth } = useAppSelector((state) => state.authReducer);
    const { setUser } = authSlice.actions;
    const dispatch = useDispatch();
    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            let decodedToken = jwtDecode(token);
            let currentDate = new Date();
            // @ts-ignore
            if (decodedToken.exp * 1000 > currentDate.getTime()) {
                dispatch(setUser(decodedToken));
            }
        }
    }, []);
    useEffect(() => {
        if (!user._id) {
            console.log("no id");
            return;
        }
        connect();
        return () => {
            disconnect();
        };
    }, [user._id]);
    if (!isAuth) {
        return React.createElement(Authorization, null);
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(BrowserRouter, null,
            React.createElement(AppLayout, null, isConnected ? (React.createElement(React.Fragment, null,
                React.createElement(Routes, null, ROUTES_COMPONENTS.map((route) => (React.createElement(Route, { key: route.id, path: route.path, element: route.component })))))) : (React.createElement(React.Fragment, null,
                React.createElement("h2", null, "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435..."))))),
        React.createElement(ToastContainer, null)));
};
export default App;
