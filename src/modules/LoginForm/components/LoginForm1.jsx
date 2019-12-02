import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Icon, Input } from "antd";
//import { openNotification } from 'utils/helpers';

import { Button, Block } from "components";

// // Убра?
import axios from "axios";
// import { userActions } from "redux/actions";
// //import { connect } from 'react-redux';
// //import { withFormik } from 'formik';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { handleHasSubmit: true };
  }

  componentWillMount(){
    // password: "Bs1FVZmUch"
    // token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU0NWY1MDNkODIyZmZlZWU3MDA3NDc2Y2IwZWI1ZTRlOWM1MzhkNDAyMGYzNzU3NDkwMDI4ZTg2OWYwN2MzNjEwMmEwMGQ5NDAxYWM3NjJlIn0.eyJhdWQiOiIzIiwianRpIjoiNTQ1ZjUwM2Q4MjJmZmVlZTcwMDc0NzZjYjBlYjVlNGU5YzUzOGQ0MDIwZjM3NTc0OTAwMjhlODY5ZjA3YzM2MTAyYTAwZDk0MDFhYzc2MmUiLCJpYXQiOjE1NjMzMTE4OTAsIm5iZiI6MTU2MzMxMTg5MCwiZXhwIjoxNTk0OTM0MjkwLCJzdWIiOiIyNjIiLCJzY29wZXMiOltdfQ.BkFnt-2yDGYi06y13mnrWaiqEZH4Xp9ayxpibJxstlCKKTWKsD5H0ky8mg6vN4bX1Akn4saiFkNL-I3G5v1xcarlIPxDj4f8RnfTayBwOF80YiHfRDhumkwpLDw2TOea1Kd7g4tlo48fQuFbzDF5mQJhFFsO0YYkkwah6NTGELclaCNGUw-HLAmWQBAjMje723fnjzyGl95Wyjn8pE6TkWoxJ61rf4VIfqkBW-MIGIEBoI0oeQnX4F-7-o_7Ev9uq0egT-VhkSMHOseqlvIf0yyMF2A2FdjrZ4MfHhOC1Lj2QUcIO1z18bhfGVBtlOdeJZAQD4zd7W_7UHWs66qrzk6u5-mNnPd_P_SpFmPzWeeXqtSPZDu4s5vMm2psxZbFlLC9Jo_bXv2KjCriaPV0ffkSjEyUBxqSa0vH9MSh_flKdXFcK5f7olC-HPTjoitHeYEIzyKoQzQBUH5JTllY_FhYXhZTnmYpAyau9u3XxBCcjrsVakfqeQLZSj9TU5OG8vvvbzusRgfw2VtDQAQ0prkuqkVUXXRbpK2zCBTABAUa2l-YAjZIuJ_1rY0fH14FjD7QtD6a5b1rnFsdH_eMZMycUHoKZulzg40iyDscCje-LGJSH8kPcwGvCkgo5trYVMtsBRKbiJ2hjGSMhvbwKe59_xC3mm-PQkd7HyHDKh8"


    var params =
    {
      "email": "klim.barkalov@mail.ru",
    }
    // {
    //   "name": "test42",
    //   "email": "kliment.barkalov@gmail.com",
    //   "type": "front",
    //   "github": "https://github.com/dzimon",
    //   "city": "test42",
    //   "phone": "84442224242",
    //   "birthday": "2011"
    // }

    // axios.post('http://test.atwinta.ru/api/v1/auth/register', params)
    //   .then(response => {
    //     console.log(response.data);
    //   })
    axios.post('http://test.atwinta.ru/api/v1/auth/restore', params)
      .then(response => {
        console.log(response.data);
      })
  }

  // handleSubmit = e => {
  //   e.preventDefault();
  //   //console.log(e, props);
  //   this.props.form.validateFieldsAndScroll((err, values) => {
  //     if (err) {
  //       return console.log('Received values of form: ', values, 'Err: ', err);
  //     } 
  //     axios.post('http://test.atwinta.ru/api/v1/auth/login', values)
  //       .then( response => {
  //         console.log('Returned response: ', response)
  //         console.log('Returned data: ', response.data)
  //         if ( response.status === 200) {
  //           this.setState({handleHasSubmit: false});    
  //           //localeStorage.token = data.token;
  //           //openNotification('description', 'success', 'Вы успешн');
  //         }
  //         // if ( response.status === 406) {
  //         //   openNotification('Ошибка', 'error', 'Вы не подтвердили почту');
  //         // }
  //         // if ( response.status === 408) {
  //         //   openNotification('Ошибка', 'error', 'Ошибка в заполнении данных');
  //         // }
  //         // if ( response.status === 500) {
  //         //   openNotification('Ошибка', 'error', 'Ошибка в заполнении данных');
  //         // }
  //         if ( response.status !== 200) {
  //           openNotification('Внимание', 'warning', 'Что-то пошло не так');
  //         }
  //       })
  //       .catch((err) => {
  //         openNotification('Ошибка в заполнении данных', 'error', 'Ошибка');
  //         console.log('Err: ', err)
  //       });
  //   });
  // };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { isSubmitting, handleSubmit, values, handleChange } = this.props;
    console.log('this.props');
    console.log(this.props);

    // this.handleSubmit -> handleSubmit
    return (
      <div>
        <div className="auth__top">
          <h2>Авторизация</h2>
          <p>Пожалуйста, войдите в свой аккаунт</p>
        </div>
        <Block>
          <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item label="Ваш email" hasFeedback>
              {getFieldDecorator('email', {
                rules: [
                  {
                    type: 'email',
                    message: 'Некорректная почта',
                  },
                  {
                    required: true,
                    message: 'Обязательное поле!',
                  },
                ],
              })(<Input 
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
                onChange={handleChange}
              />)}
            </Form.Item>
            <Form.Item label="Пароль" hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: 'Обязательное поле',
                  }
                ],
              })(<Input.Password 
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                } 
                placeholder="Password"
              />)}
            </Form.Item>
            <Form.Item>
              <Button 
                type="primary" 
                size="default" 
                htmlType="submit" 
                //disabled={!this.state.handleHasSubmit}
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
  }
}

const WrappedLoginForm = Form.create({ name: 'horizontal_login' })(LoginForm);

export default WrappedLoginForm;

