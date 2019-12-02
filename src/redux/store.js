import { createStore, applyMiddleware, compose } from 'redux';
// сп0рный имп0рд
import promiseMiddleware from 'redux-promise';	
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// TEST
//const composeEnhancers = compose;

const middleware = [thunk];

const store = createStore(
	rootReducer,
 	composeEnhancers(applyMiddleware(...middleware, promiseMiddleware))
);

export default store;