import React, { useEffect } from "react";
import useWebsocket from "../../hooks/useWebsocket";
import { useAppSelector } from "../../hooks/redux";
import GroundItem from "../GroundItem/GroundItem";
import styles from "./styles.module.sass";
const Grounds = () => {
    const { getGrounds } = useWebsocket();
    const { grounds } = useAppSelector((state) => state.groundsReducer);
    useEffect(() => {
        getGrounds();
    }, []);
    return (React.createElement("div", { className: styles.grounds }, grounds.map((ground) => (React.createElement(GroundItem, { ground: ground, key: ground._id })))));
};
export default Grounds;
