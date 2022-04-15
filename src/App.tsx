import React, { FC, useEffect } from "react";
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
import { IUser } from "./models/IUser";

const App: FC = () => {
    const { connect, disconnect } = useWebsocket();
    const { isConnected, user, isAuth } = useAppSelector((state) => state.authReducer);
    const { setUser } = authSlice.actions;
    const dispatch = useDispatch();

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            let decodedToken: IUser = jwtDecode(token);
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
        return <Authorization />;
    }

    return (
        <React.Fragment>
            <BrowserRouter>
                <AppLayout>
                    {isConnected ? (
                        <React.Fragment>
                            <Routes>
                                {ROUTES_COMPONENTS.map((route) => (
                                    <Route
                                        key={route.id}
                                        path={route.path}
                                        element={route.component}
                                    />
                                ))}
                            </Routes>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <h2>Подключение...</h2>
                        </React.Fragment>
                    )}
                </AppLayout>
            </BrowserRouter>

            <ToastContainer />
        </React.Fragment>
    );
};

export default App;
