import { Button } from "antd";
import React from "react";
import { IGround } from "../../models/IGround";
import styles from "./styles.module.sass";
import { useAppSelector } from "../../hooks/redux";

interface IProps {
    ground: IGround;
}

const GroundItem = ({ ground }: IProps) => {
    const { websocket } = useAppSelector((state) => state.authReducer);
    const { user } = useAppSelector((state) => state.authReducer);

    const handleBuyGround = () => {
        websocket.emit("grounds:buy", ground._id);
    };

    return (
        <div className={styles.groundItem}>
            <p>Название: {ground.name}</p>
            <p>Добыча: {ground.incomePerTick} ед. в 1 минуту</p>
            <p>Цена: {ground.price}</p>

            <p>
                {ground.ownerId ? (
                    `Владелец: ${ground.ownerId}`
                ) : (
                    <Button
                        type="primary"
                        onClick={() => handleBuyGround()}
                        disabled={user.money < ground.price}
                    >
                        Купить
                    </Button>
                )}
            </p>
        </div>
    );
};

export default GroundItem;
