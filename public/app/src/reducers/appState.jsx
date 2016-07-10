import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { LOGIN_SUCCESS, LOGIN_FAILED, UPDATE_CSRF_TOKEN } from '../actions';

function authReducer(state = window.app.auth, action) {
	switch(action.type) {
		case LOGIN_SUCCESS:
			return Object.assign({}, state, {
				user: action.user,
				lastActiveTime: action.lastActiveTime,
				error: null
			});
		case LOGIN_FAILED:
			return Object.assign({}, state, {
				user: null,
				lastActiveTime: null,
				error: action.error
			});
		default:
			return state;
	}
}

function globalReducer(state = window.app, action) {
	switch(action.type) {
		case UPDATE_CSRF_TOKEN:
			return Object.assign({}, state, {
				csrfToken: action.token
			});
		default:
			return state;
	}
}

export default combineReducers({
	global: globalReducer,
	auth: authReducer,
	form: formReducer
});
