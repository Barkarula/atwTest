import React from "react";
import { Form, DatePicker, Icon, Input, Row, Col, Checkbox, Tooltip, Select } from "antd";
import { Link } from "react-router-dom";
import { Button, Block } from "components";

const { Option } = Select;
const { MonthPicker } = DatePicker;

const success = false;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { confirm: false };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // To disabled submit button at the beginning.
    // this.props.form.validateFields();
    // console.log('!');
    // console.log(this.state);
  }

  handleChange(e) {
    this.setState({confirm: e.target.checked})
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      } 

      // Should format date value before submit.
      const values = {
        ...fieldsValue,
        'month-picker': fieldsValue['month-picker'].format('YYYY-MM')
      };

      console.log('Received values of form: ', values);
    });
  };

  render() {
    const {
      isValid,
      isSubmitting,
    } = this.props;
    const { getFieldDecorator, getFieldsError } = this.props.form;

    const config = {
      rules: [{ type: 'object', required: true, message: 'Обязательное поле' }],
    };

    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '+7',
    })(
      <Select style={{ width: 76 }}>
        <Option value="+7">+7</Option>
        <Option value="+42">+42</Option>
        <Option value="+350">+350</Option>
      </Select>,
    );

    // {...formItemLayout} в Form
    // const formItemLayout = {
    //   labelCol: {
    //     xs: { span: 24 },
    //     sm: { span: 5 },
    //   },
    //   wrapperCol: {
    //     xs: { span: 24 },
    //     sm: { span: 12 },
    //   },
    // };

    return (
      <div>
        <div className="auth__top">
          <h2>Регистрация</h2>
          <p>Для входа в приложение, вам нужно зарегистрироваться</p>
        </div>
        <Block>
          {!success ? (
            <Form layout="vertical" onSubmit={this.handleSubmit} className="login-form">
              <Row>
                <Col span={24}>
                  <Form.Item
                    label={
                      <span>
                        Имя&nbsp;
                        <Tooltip title="What do you want others to call you?">
                          <Icon type="question-circle-o" />
                        </Tooltip>
                      </span>
                    }
                    hasFeedback
                  >
                  {getFieldDecorator('name', {
                      rules: [
                        {
                          pattern: /^[a-zA-Zа-яА-Я ]+$/ui,
                          message: 'Числа и символы не допустимы',
                        },
                        {
                          required: true,
                          message: 'Обязательное поле',
                        },
                      ],
                  })(
                    <Input
                      prefix={
                        <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                      }
                      id="name"
                      size="large"
                      placeholder="Ваше имя"
                    />,
                     )}
                  </Form.Item>
                </Col>
                <Col span={11}>
                  <Form.Item 
                    label="Еmail"
                    hasFeedback
                  >
                    {getFieldDecorator('еmail', {
                      rules: [
                        {
                          type: 'email',
                          message: 'The input is not valid E-mail!',
                        },
                        {
                          required: true,
                          message: 'Обязательное поле',
                        },
                        {
                          whitespace: true,
                          message: 'Whitespace!'
                        },
                        {
                          max: 40,
                        }
                      ],
                    })(
                    <Input
                      id="email"
                      prefix={
                        <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                      }
                      size="large"
                      placeholder="Ваш еmail"
                    />)}
                  </Form.Item>
                </Col>
                <Col span={11} offset={2}>
                  <Form.Item 
                    label="Телефон"
                    hasFeedback
                  >
                    {getFieldDecorator('phone', {
                      rules: [
                        {
                          type: 'string',
                          message: 'числа',
                        },
                        {
                          len: 10,
                          message: 'Несоответствующий формат',
                        },
                        {
                          required: true,
                          message: 'Обязательное поле',
                        },
                      ],
                    })(
                    <Input
                      id="phone"
                      size="large"
                      placeholder="Ваш телефон"
                      addonBefore={prefixSelector} 
                      style={{ width: '100%' }}
                    />)}
                  </Form.Item>
                </Col>
                <Col span={11}>
                  <Form.Item 
                    label="Город"
                    hasFeedback
                  >
                    {getFieldDecorator('city', {
                      rules: [{ required: true, message: 'Обязательное поле'}],
                    })(
                    <Input
                      id="city"
                      size="large"
                      placeholder="Ваш город"
                    />)}
                  </Form.Item>
                </Col>
                <Col span={11} offset={2}>
                  <Form.Item 
                    label="Год рождения"
                    hasFeedback
                  >
                    {getFieldDecorator('month-picker', config)(
                    <MonthPicker 
                      id="birthday"
                      size="large"
                      placeholder="Ваш год рождения"
                      style={{ width: '100%' }}
                    />)}
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label="Тип задания"
                  >
                    {getFieldDecorator('fb-end', {
                      rules: [{ required: true, message: 'Обязательное поле' }],
                    })(
                      <Select
                        placeholder="Выберите"
                        onChange={this.handleSelectChange}
                      >
                        <Option value="male">Frontend</Option>
                        <Option value="female">Backed</Option>
                      </Select>,
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: false,
                    rules: [
                      {
                        type: 'boolean',
                      },
                    ],
                })(<Checkbox 
                    value={this.state.confirm}
                    onChange={this.handleChange}>
                      Я <a href="http://test.atwinta.ru/#/login">соглашаюсь</a> с <a href="http://test.atwinta.ru/#/login">политикой</a> обработки и использования персональных данных
                    </Checkbox>)}
              </Form.Item>
              <Form.Item>
                {isSubmitting && !isValid && <span>Ошибка!</span>}
                <Button 
                  type="primary" 
                  size="default"
                  htmlType="submit"
                  disabled={!this.state.confirm || hasErrors(getFieldsError())}>
                    Зарегистрироваться
                </Button>
                <Button type="link">
                  <Link className="auth__register-link" to="/login">
                    Войти в аккаунт
                  </Link>
                </Button>
              </Form.Item>
            </Form>
          ) : (
            <div className="auth__success-block">
              <div>
                <Icon type="info-circle" theme="twoTone" />
              </div>
              <h2>Подтвердите свой аккаунт</h2>
              <p>
                На Вашу почту отправлено письмо с ссылкой на подтверждение
                аккаунта.
              </p>
            </div>
          )}
        </Block>
      </div>
    );
  };
}

const WrappedRegisterForm = Form.create({ name: 'horizontal_login' })(RegisterForm);

export default WrappedRegisterForm;
