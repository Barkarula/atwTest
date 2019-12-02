import { userApi } from 'utils/api';
import { openNotification } from 'utils/helpers';

const Actions = {
	setUserData: data => ({
    type: 'USER:SET_DATA',
    payload: data
	}),
	failedAuth: data => ({
    type: 'USER:SET_FAILEDAUTH',
    payload: data
	}),
	fetchUserAuthSucess: () => dispatch => {
		openNotification({
					title: 'Успех',
					text: 'Вы авторизованы',
					type: 'success'
				})
	},
	fetchUserAuthFailed: () => dispatch => {
		openNotification({
					title: 'Ошибка доступа',
					text: 'Необходимо авторизоваться',
					type: 'error'
				})
	},
	fetchUserData: () => dispatch => {
		userApi.getMe().then(({ data }) => {
			dispatch(Actions.setUserData(data));
		},
			(error) => { console.log(error); dispatch(Actions.failedAuth(false)); }
		);
	},
	fetchUserLogin: postData => dispatch => {
		return userApi.login(postData).then(({ data }) => {
			const { status, token } = data;

			if (status === 'error') {
				openNotification({
					title: 'test',
					text: 'testtext',
					type: 'error'
				})
			} else {
				openNotification({
					title: 'Успех',
					text: 'Вы авторизованы',
					type: 'success'
				});
				window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

				//window.localeStorage['token'] = token;
				localStorage.setItem('token', 'Bearer ' + token);
				//setTimeout(dispatch(Actions.fetchUserData()), 8000);
				dispatch(Actions.setUserData(data));

				window.location.href='/home';
			}
		},
		error => openNotification({
					title: 'Ошибка',
					text: 'Ошибка в заполнении данных',
					type: 'error'
				}) // "Rejected: " + error console.log(error)
		).catch(error => {
    alert(error); // Error: Not Found
  	});
	},
	updateUserData: postData => dispatch => {
		userApi.updateUser(postData).then(({ data }) => {
			dispatch(Actions.setUserData(data));
		},
			(error) => { console.log(error) }
		);
	},
	// fetchDialogs: () => dispatch => {
	// 	dialogsApi.getAll().then(({ data }) => {
 //      dispatch(actions.setDialogs(data));
	// 	});
	// }
}

export default Actions; 