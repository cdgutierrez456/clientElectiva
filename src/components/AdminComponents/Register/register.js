import React, { useState } from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { signUpApi } from "../../../api/user";
import {
  emailValidation,
  minLengthValidation,
} from "../../../validations/FormValidations";

import "./register.scss";

export const RegisterForm = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    privacyPolicy: false,
  });
  const [formValid, setFormValid] = useState({
    email: false,
    password: false,
    repeatPassword: false,
    privacyPolicy: false,
  });

  const changeForm = (e) => {
    if (e.target.name === "privacyPolicy") {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.checked,
      });
    } else {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value,
      });
    }
  };

  const inputValidation = (e) => {
    const { type, name } = e.target;
    if (type === "email") {
      setFormValid({ ...formValid, [name]: emailValidation(e.target) });
    }
    if (type === "password") {
      setFormValid({ ...formValid, [name]: emailValidation(e.target, 6) });
    }
    if (type === "checkbox") {
      setFormValid({ ...formValid, [name]: e.target.checked });
    }
  };

  const register = async (e) => {
    e.preventDefault();
    const emailVal = inputs.email;
    const passwordVal = inputs.password;
    const repeatPasswordVal = inputs.repeatPassword;
    const privacyPolicyVal = inputs.privacyPolicy;

    if (!emailVal || !passwordVal || !repeatPasswordVal || !privacyPolicyVal) {
      notification["error"]({
        message: "Todos los campos son obigatorios",
      });
    } else {
      if (passwordVal !== repeatPasswordVal) {
        notification["error"]({
          message: "Las contraseñas tienen que ser iguales",
        });
      } else {
        const result = await signUpApi(inputs);
        if (!result.user) {
          notification["error"]({
            message: result.message,
          });
        } else {
          notification["success"]({
            message: result.message,
          });
          resendForm();
        }
      }
    }
  };
};

export const Register = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    privacyPolicy: false,
  });

  const changeForm = (e) => {
    if (e.target.name === "privacyPolicy") {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.checked,
      });
    } else {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value,
      });
    }
  };
  return (
    <Form className="register-form" onChange={changeForm}>
      <Form.Item>
        <Input
          prefix={<UserOutlined />}
          type="email"
          name="email"
          placeholder="Correo electronico"
          className="register-form__input"
          value={inputs.email}
        />
        <Input
          prefix={<UserOutlined />}
          type="password"
          name="repeatPassword"
          placeholder="Repetir contraseña"
          className="register-form__input"
          value={inputs.repeatPassword}
        />
      </Form.Item>
      <Form.Item>
        <Checkbox name="privacyPolicy" checked={inputs.privacyPolicy}>
          He leido y acepto la politica de privacidad
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" className="register-form__button">
          Crear cuenta
        </Button>
      </Form.Item>
    </Form>
  );
};
