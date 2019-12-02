import { axios } from 'core';

export default {
	//login: postData => axios.get('/user/login', postData)
	//axios.post('http://test.atwinta.ru/api/v1/auth/login', values)
	login: postData => axios.post('http://test.atwinta.ru/api/v1/auth/login', postData),
	//getMe: () => axios.get('/user/me')
	//getMe: () => axios.get('http://test.atwinta.ru/api/v1/departments',window.localStorage.token)
	getMe: () => axios.get('http://test.atwinta.ru/api/v1/user'),
	//getMe: () => axios.get('http://test.atwinta.ru/api/v1/departments')
	updateUser: postData => axios.post('http://test.atwinta.ru/api/v1/user', postData)
};