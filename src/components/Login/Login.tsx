import React from "react";
import { Button, Form, Input } from "antd";
import { useAppSelector } from "../../hooks/redux";
import { useDispatch } from "react-redux";
import { signInUser } from "../../store/auth/actionCreators";

const Login = () => {
    const { isUserLoading } = useAppSelector((state) => state.authReducer);
    const dispatch = useDispatch();

    const onFinish = (values: any) => {
        dispatch(signInUser({ ...values }));
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
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: "Заполните поле Email" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[{ required: true, message: "Заполните поле пароль" }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Вход в систему
                    </Button>
                </Form.Item>
            </Form>
        </React.Fragment>
    );
};

export default Login;
