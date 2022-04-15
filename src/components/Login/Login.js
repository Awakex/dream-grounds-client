import React from "react";
import { Button, Form, Input } from "antd";
import { useAppSelector } from "../../hooks/redux";
import { useDispatch } from "react-redux";
import { signInUser } from "../../store/auth/actionCreators";
const Login = () => {
    const { isUserLoading } = useAppSelector((state) => state.authReducer);
    const dispatch = useDispatch();
    const onFinish = (values) => {
        dispatch(signInUser(Object.assign({}, values)));
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Form, { name: "basic", labelCol: { span: 8 }, wrapperCol: { span: 16 }, initialValues: { remember: true }, onFinish: onFinish, onFinishFailed: onFinishFailed, autoComplete: "off" },
            React.createElement(Form.Item, { label: "Email", name: "email", rules: [{ required: true, message: "Заполните поле Email" }] },
                React.createElement(Input, null)),
            React.createElement(Form.Item, { label: "\u041F\u0430\u0440\u043E\u043B\u044C", name: "password", rules: [{ required: true, message: "Заполните поле пароль" }] },
                React.createElement(Input.Password, null)),
            React.createElement(Form.Item, { wrapperCol: { offset: 8, span: 16 } },
                React.createElement(Button, { type: "primary", htmlType: "submit" }, "\u0412\u0445\u043E\u0434 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443")))));
};
export default Login;
