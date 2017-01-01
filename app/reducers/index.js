import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {routerReducer} from 'react-router-redux';

import {
	loginResult
} from './Auth';

import {
	floatingMessage
} from './LocalActions';

export default function configureStore(preloadedState) {
	return createStore(
		combineReducers({
			loginResult,
			floatingMessage,
			routing: routerReducer
		}),
		preloadedState,
		applyMiddleware(
			thunkMiddleware
		)
	);
}