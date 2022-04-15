import React from "react";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/auth/actionCreators";
import { useAppSelector } from "../../hooks/redux";
const Register = () => {
    const { isUserLoading } = useAppSelector((state) => state.authReducer);
    const dispatch = useDispatch();
    const onFinish = (values) => {
        dispatch(registerUser(Object.assign({}, values)));
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Form, { name: "basic", labelCol: { span: 8 }, wrapperCol: { span: 16 }, initialValues: { remember: true }, onFinish: onFinish, onFinishFailed: onFinishFailed, autoComplete: "off" },
            React.createElement(Form.Item, { label: "\u041D\u0438\u043A\u043D\u0435\u0439\u043C", name: "name", rules: [{ required: true, message: "Заполните поле никнейма" }] },
                React.createElement(Input, null)),
            React.createElement(Form.Item, { label: "Email", name: "email", rules: [{ required: true, message: "Заполните поле Email" }] },
                React.createElement(Input, null)),
            React.createElement(Form.Item, { label: "\u041F\u0430\u0440\u043E\u043B\u044C", name: "password", rules: [{ required: true, message: "Заполните поле пароля" }] },
                React.createElement(Input.Password, null)),
            React.createElement(Form.Item, { wrapperCol: { offset: 8, span: 16 } },
                React.createElement(Button, { type: "primary", htmlType: "submit", loading: isUserLoading }, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F")))));
};
export default Register;
