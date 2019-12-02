import { workersApi } from 'utils/api';

const Actions = {
	// getWorkersId: items => ({
 //    type: "WОRKERS:GET_ITEMS",
 //    payload: items
	// }),
	// fetchWorkers: () => dispatch => {
	// 	workersApi.getAll().then(({ data }) => {
 //      dispatch(Actions.setWorkers(data));
	// 	});
	// },

	setWorkersData: dataList => ({
    type: 'WОRKERS:SET_DATA',
    payload: dataList
	}),
	setSingleWorkerData: dataList => ({
    type: 'WОRKER:SET_DATA',
    payload: dataList
	}),
	fetchWorkersData: id => dispatch => {

		var tokenLs = localStorage.getItem('token');
		window.axios.defaults.headers.common['Authorization'] = tokenLs;

		return workersApi.getWorkersId(id).then(({ data }) => {

			const dataList = data;
			dispatch(Actions.setWorkersData(dataList.data));
		});
		// setTimeout(workersApi.getWorkersId(3).then(({ dataList }) => {
		// 	dispatch(Actions.setWorkersData(dataList));
		// }), 8000);
	},
	fetchSingleWorkerData: id => dispatch => {

		var tokenLs = localStorage.getItem('token');
		window.axios.defaults.headers.common['Authorization'] = tokenLs;

		return workersApi.getSingleWorkerId(id).then(({ data }) => {
			const dataList = data;
			dispatch(Actions.setSingleWorkerData(dataList));
		});
	},
}

export default Actions;