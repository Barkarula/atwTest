import React from "react";
import { Form, Icon, Input } from "antd";
import { Link } from "react-router-dom";

import { Button, Block } from "components";
import { validateField } from "utils/helpers";

const LoginForm = props => {
  const { 
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting
  } = props;
  return (
      <div>
        <div className="auth__top">
          <h2>Авторизация</h2>
          <p>Пожалуйста, войдите в аккаунт</p>
        </div>
        <Block>
          <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item 
              validateStatus={validateField('email', touched, errors)}
              help={!touched.email ? '' : errors.email}
              label="Ваш email" 
              hasFeedback
            >
              <Input 
                id='email'
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item 
              validateStatus={validateField('password', touched, errors)}
              help={!touched.password ? '' : errors.password}
              label="Пароль" 
              hasFeedback
            >
              <Input
                id='password'
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                } 
                type='password'
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item>
              {isSubmitting && !isValid && <span>0шибка!</span>}
              <Button 
                type="primary" 
                size="default" 
                //htmlType="submit" 
                disabled={isSubmitting}
                onClick={handleSubmit}
              >
                Войти в аккаунт
              </Button>
                <Button type="link">
                  <Link className="auth__register-link" to="/register">
                    Зарегистрироваться
                  </Link>
                </Button>
            </Form.Item>
          </Form>
        </Block>
      </div>
    );
};

export default LoginForm;

