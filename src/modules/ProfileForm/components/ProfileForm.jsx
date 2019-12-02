import React from "react";
import { Form, DatePicker, Icon, Input, Row, Col, Checkbox, Tooltip, Select } from "antd";
import { openNotification } from 'utils/helpers';
import { Link } from "react-router-dom";

import { Button, Block } from "components";
import { userActions } from "redux/actions";

const { Option } = Select;
const { MonthPicker } = DatePicker;

const success = false;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class ProfileForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { 
      confirm: false,        
      formdata:{
            _id:'',
            name:'',
            author:''
        } };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

    // handleInput = (event,name) => {
    //     const newFormdata = {
    //         ...this.state.formdata
    //     }
    //     newFormdata[name] = event.target.value

    //     this.setState({
    //         formdata:newFormdata
    //     })
    // }

  handleClick(e) {
    //this.setState({confirm: e.target.checked})
    localStorage.removeItem("token")
  }

  handleChange(e) {
    this.setState({confirm: e.target.checked})
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        openNotification({
          title: 'Ошибка',
          text: 'Данные введены не верно',
          type: 'error'
        })
        return;
      } 

      // Should format date value before submit.
      // Get prefix and another data.
      const values = {
        ...fieldsValue,
        'monthPicker': fieldsValue['monthPicker'].format('YYYY-mm')
      };

      console.log('Received values of form: ', values);

      //this.props.dispatch(updateUser(this.state.formdata))
      this.props.dispatch(userActions.updateUserData(values));

        openNotification({
          title: 'Успех',
          text: 'Данные сохранены',
          type: 'success'
        })
    });
  };

    redirectUser = () => {
        setTimeout(()=>{
            //this.props.history.push('/user/user-reviews')
        },1000)
    }

  componentDidMount() {
    // console.log('test')
    // console.log(this.props)

    this.props.form.setFieldsValue({
      name: this.props.user.data.name,
      еmail: this.props.user.data.email,
      phone: this.props.user.data.phone,
      city: this.props.user.data.city,
      //monthPicker: this.props.user.data.birthday,
      type: this.props.user.data.type === 'front' ? 'front' : 'backend',
      github: this.props.user.data.github,
      telegram: this.props.user.data.telegram,
      about: this.props.user.data.about,
      //is_finished: this.props.user.data.is_finished
      is_finished: this.props.user.data.is_finished === 0 ? false : true
    });
  }

    componentWillReceiveProps(nextProps){
        //let book = nextProps.books.book;
        // this.setState({
        //     formdata:{
        //         _id:book._id,
        //         name:book.name,
        //         author:book.author
        //     }
        // })
    }

  render() {
    // console.log('this.props');
    // console.log(this.props);
    // console.log(this.state);

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
    const prefixSelectorGithub = getFieldDecorator('prefix', {
    })(
      <div style={{ width: 42 }}>
        https://
      </div>,
    );
    const prefixSelectorTelegram = getFieldDecorator('prefix', {
    })(
      <div style={{ width: 42 }}>
        @
      </div>,
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
          <h2>Профиль</h2>
          <p>Настроить страницу профиля</p>
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
                      //value={this.state.formdata.name}
                      //setFieldsValue={this.state.formdata.name}
                      //onChange={(event)=>this.handleInput(event,'name')}
                    />,
                     )}
                  </Form.Item>
                </Col>

                <Col span={11}>
                  <Form.Item 
                    label="Еmail"
                    //hasFeedback
                  >
                    {getFieldDecorator('еmail', {
                      rules: [
                        {
                          type: 'email',
                          message: 'The input is not valid E-mail!',
                        },
                        {
                          required: false,
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
                      disabled
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
                    {getFieldDecorator('monthPicker', config)(
                    <MonthPicker 
                      id="monthPicker"
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
                    {getFieldDecorator('type', {
                      rules: [{ required: false, message: 'Обязательное поле' }],
                    })(
                      <Select
                        placeholder="Выберите"
                        onChange={this.handleSelectChange}
                        disabled
                      >
                        <Option value="front">Frontend</Option>
                        <Option value="backend">Backend</Option>
                      </Select>,
                    )}
                  </Form.Item>
                </Col>

                <Col span={11}>
                  <Form.Item 
                    label="Ссылка на проект"
                    hasFeedback
                  >
                    {getFieldDecorator('github', {
                      rules: [
                        {
                          type: 'email',
                          message: 'The input is not valid E-mail!',
                        },
                        {
                          required: false,
                          message: 'Обязательное поле',
                        },
                      ],
                    })(
                    <Input
                      id="github"
                      size="large"
                      placeholder="Ссылка на Github"
                      addonBefore={prefixSelectorGithub}
                    />)}
                  </Form.Item>
                </Col>
                <Col span={11} offset={2}>
                  <Form.Item 
                    label="Telegram"
                    hasFeedback
                  >
                    {getFieldDecorator('telegram', {
                      rules: [
                        {
                          required: false,
                          message: 'Обязательное поле',
                        },
                      ],
                    })(
                    <Input
                      id="telegram"
                      size="large"
                      placeholder="Telegram"
                      addonBefore={prefixSelectorTelegram}
                      style={{ width: '100%' }}
                    />)}
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item
                    hasFeedback
                    label="Дополнительно"
                  >
                  {getFieldDecorator('about', {
                      rules: [
                        {
                          required: false,
                          message: 'Обязательное поле',
                        },
                      ],
                  })(
                    <Input
                      id="about"
                      size="large"
                      placeholder="Расскажите о себе"
                    />,
                     )}
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item>
                {getFieldDecorator('is_finished', {
                  valuePropName: 'checked',
                  initialValue: false,
                    rules: [
                      {
                        type: 'boolean',
                      },
                    ],
                })(<Checkbox
                    id="is_finished"
                    value={this.state.confirm}
                    onChange={this.handleChange}>
                      Уведомить о выполнении (нельзя отменить)
                    </Checkbox>)}
              </Form.Item>
              <Form.Item>
                {isSubmitting && !isValid && <span>Ошибка!</span>}
                <Button 
                  type="primary" 
                  size="default"
                  htmlType="submit"
                  disabled={hasErrors(getFieldsError())}>
                    Сохранить
                </Button>
                <Button 
                  type="link"
                  onClick={this.handleClick}
                >
                  <Link className="auth__register-link" to="/login">
                    Выйти
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

const WrappedProfileForm = Form.create({ name: 'horizontal_login' })(ProfileForm);

export default WrappedProfileForm;

