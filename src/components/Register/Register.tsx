import React from "react";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/auth/actionCreators";
import { useAppSelector } from "../../hooks/redux";

const Register = () => {
    const { isUserLoading } = useAppSelector((state) => state.authReducer);
    const dispatch = useDispatch();

    const onFinish = (values: any) => {
        dispatch(registerUser({ ...values }));
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <React.Fragment>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Никнейм"
                    name="name"
                    rules={[{ required: true, message: "Заполните поле никнейма" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: "Заполните поле Email" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[{ required: true, message: "Заполните поле пароля" }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" loading={isUserLoading}>
                        Зарегистрироваться
                    </Button>
                </Form.Item>
            </Form>
        </React.Fragment>
    );
};

export default Register;
