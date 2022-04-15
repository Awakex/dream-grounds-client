import React from "react";

interface IProps {
    incomePerSec: number;
}

const Dashboard = ({ incomePerSec }: IProps) => {
    return (
        <div>
            <h3>Доход в секунду: {incomePerSec}</h3>
        </div>
    );
};

export default Dashboard;
