import { withFormik } from 'formik';
import LoginForm from "../components/LoginForm";
import validateForm from "utils/validate";
//import axios from "axios";

//export default LoginForm;
//import { connect } from 'react-redux';


// validateForm
//import { openNotification } from 'utils/helpers';
import { userActions } from "redux/actions";

import store from "redux/store";

// const LoginFormConnected = connect(
//   null, 
//   userActions
// )(LoginForm);

const LoginFormContainer = withFormik({
//const Auth = () => (
//const LoginFormContainer = ({
//const LoginFormContainer = () => (
	enableReinitilize: true,
	mapPropsToValues: () => ({
		email: '',
		password: ''
	}),
  validate: values => {
    let errors = {};

    validateForm({ isAuth: true, values, errors });

    return errors;
  },
	handleSubmit: (values, { setSubmitting, props }) => {
    //console.log(props);
      //console.log(store.dispatch(userActions.fetchUserLogin(values)));
    store.dispatch(userActions.fetchUserLogin(values)).then(() => {
    	setSubmitting(false);
    });
    //fetchUserLogin(values);
    // 1:23:50
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
  },
  displayName: 'LoginForm'
//})(LoginFormConnected);
})(LoginForm);

export default LoginFormContainer;