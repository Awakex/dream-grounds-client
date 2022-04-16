import { Button } from "antd";
import React, { useEffect } from "react";
import { IGround } from "../../models/IGround";
import styles from "./styles.module.sass";
import { useAppSelector } from "../../hooks/redux";
import { getImageByGroundType } from "../../app/utils/grounds";

interface IProps {
    ground: IGround;
}

const GroundItem = ({ ground }: IProps) => {
    const { websocket } = useAppSelector((state) => state.authReducer);
    const { user } = useAppSelector((state) => state.authReducer);

    const handleBuyGround = () => {
        websocket.emit("grounds:buy", ground._id);
    };

    useEffect(() => {}, []);

    return (
        <div className={styles.groundItem}>
            <img
                className={styles.groundImage}
                src={getImageByGroundType(ground.type)}
                alt="ground"
            />

            <div className={styles.groundInfo}>
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
        </div>
    );
};

export default GroundItem;
