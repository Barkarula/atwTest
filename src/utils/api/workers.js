import { axios } from 'core';

export default {
	//getWorkers: () => axios.get('http://test.atwinta.ru/api/v1/workers'),
	//getWorkersId: id => axios.get('http://test.atwinta.ru/api/v1/workers?per_page=12&position=6&department=2&page=' + id)
	//getWorkersId: id => axios.get('http://test.atwinta.ru/api/v1/workers/query=Лев Сергеевич Дьячков')
	//getWorkersId: id => axios.get('http://test.atwinta.ru/api/v1/departments')
	//getWorkersId: id => axios.get('http://test.atwinta.ru/api/v1/workers?per_page=12&page=' + id)
	getWorkersId: id => axios.get('http://test.atwinta.ru/api/v1/workers?&page=' + id),
	getSingleWorkerId: id => axios.get('http://test.atwinta.ru/api/v1/workers/' + id)
};