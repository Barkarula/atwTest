import { dialogsApi } from 'utils/api';

const Actions = {
	setDialogs: items => ({
    type: "DIALОGS:SET_ITEMS",
    payload: items
	}),
	fetchDialogs: () => dispatch => {
		dialogsApi.getAll().then(({ data }) => {
      dispatch(Actions.setDialogs(data));
		});
	}
}

export default Actions;