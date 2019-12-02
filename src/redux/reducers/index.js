import { combineReducers } from 'redux';

const reducers = ['dialogs', 'user', 'profiles', 'profile'];

export default combineReducers(
	reducers.reduce((initial, name) => {
		initial[name] = require(`./${name}`).default;
		return initial;
	}, {}),
);

// import dialogs from "./dialogs";
// import user from "./user";
// import profiles from "./profiles";
// //import workers from "./workers";

// export default combineReducers({
// 	dialogs, 
// 	user, 
//  profiles,
// });