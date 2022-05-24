import React from "react";
import { Form, Button, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

import "./login.scss";

export const Login = () => {
  return (
    <Form className="login-form">
      <Form.Item>
        <Input
          prefix={<UserOutlined />}
          type="email"
          name="email"
          placeholder="Correo Electronico"
          className="login-form__input"
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<UserOutlined />}
          type="password"
          name="password"
          placeholder="Contraseña"
          className="login-form__input"
        />
      </Form.Item>
    </Form>
  );
};
