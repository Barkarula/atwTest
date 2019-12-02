import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:9999';
// http://test.atwinta.ru/api/v1/
axios.defaults.headers.common['Authorization'] = window.token;//AUTH_TОKEN; Authorization -> token

// я д0бавил
//axios.defaults.headers.common['token'] = window.localeStorage['token'];

//?
window.axios = axios;

export default axios;