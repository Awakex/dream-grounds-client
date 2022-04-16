import { Button } from "antd";
import React, { useEffect } from "react";
import styles from "./styles.module.sass";
import { useAppSelector } from "../../hooks/redux";
import { getImageByGroundType } from "../../app/utils/grounds";
const GroundItem = ({ ground }) => {
    const { websocket } = useAppSelector((state) => state.authReducer);
    const { user } = useAppSelector((state) => state.authReducer);
    const handleBuyGround = () => {
        websocket.emit("grounds:buy", ground._id);
    };
    useEffect(() => { }, []);
    return (React.createElement("div", { className: styles.groundItem },
        React.createElement("img", { className: styles.groundImage, src: getImageByGroundType(ground.type), alt: "ground" }),
        React.createElement("div", { className: styles.groundInfo },
            React.createElement("p", null,
                "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435: ",
                ground.name),
            React.createElement("p", null,
                "\u0414\u043E\u0431\u044B\u0447\u0430: ",
                ground.incomePerTick,
                " \u0435\u0434. \u0432 1 \u043C\u0438\u043D\u0443\u0442\u0443"),
            React.createElement("p", null,
                "\u0426\u0435\u043D\u0430: ",
                ground.price),
            React.createElement("p", null, ground.ownerId ? (`Владелец: ${ground.ownerId}`) : (React.createElement(Button, { type: "primary", onClick: () => handleBuyGround(), disabled: user.money < ground.price }, "\u041A\u0443\u043F\u0438\u0442\u044C"))))));
};
export default GroundItem;
