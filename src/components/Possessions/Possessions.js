import React, { useEffect, useState } from "react";
import useWebsocket from "../../hooks/useWebsocket";
import { useAppSelector } from "../../hooks/redux";
import GroundItem from "../GroundItem/GroundItem";
import styles from "./styles.module.sass";
import Dashboard from "../Dashboard/Dashboard";
const Possessions = () => {
    const { grounds } = useAppSelector((state) => state.groundsReducer);
    const { user } = useAppSelector((state) => state.authReducer);
    const { getGrounds } = useWebsocket();
    const [filteredPossessions, setFilteredPossessions] = useState([]);
    const [incomePerSec, setIncomePerSec] = useState(0);
    useEffect(() => {
        getGrounds();
    }, []);
    useEffect(() => {
        handleFilterGroundsByOwner(user._id);
    }, [grounds]);
    const handleFilterGroundsByOwner = (ownerId) => {
        if (!grounds) {
            setFilteredPossessions([]);
        }
        else {
            let res = grounds.filter((ground) => {
                return ground.ownerId == ownerId;
            });
            if (res) {
                let income = 0;
                res.forEach((res) => (income += res.incomePerTick));
                setIncomePerSec(income);
            }
            setFilteredPossessions(res);
        }
    };
    return (React.createElement("div", null,
        React.createElement(Dashboard, { incomePerSec: incomePerSec }),
        filteredPossessions.length > 0 ? (React.createElement("div", { className: styles.possessions }, filteredPossessions.map((fp) => (React.createElement(GroundItem, { ground: fp, key: fp._id }))))) : (React.createElement(React.Fragment, null,
            React.createElement("h3", null, "\u0412\u043B\u0430\u0434\u0435\u043D\u0438\u0439 \u043D\u0435\u0442")))));
};
export default Possessions;
