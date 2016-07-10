'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require('redux');

var _reduxForm = require('redux-form');

var _actions = require('../actions');

function authReducer() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? window.app.auth : arguments[0];
	var action = arguments[1];

	switch (action.type) {
		case _actions.LOGIN_SUCCESS:
			return Object.assign({}, state, {
				user: action.user,
				lastActiveTime: action.lastActiveTime,
				error: null
			});
		case _actions.LOGIN_FAILED:
			return Object.assign({}, state, {
				user: null,
				lastActiveTime: null,
				error: action.error
			});
		default:
			return state;
	}
}

function globalReducer() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? window.app : arguments[0];
	var action = arguments[1];

	switch (action.type) {
		case _actions.UPDATE_CSRF_TOKEN:
			return Object.assign({}, state, {
				csrfToken: action.token
			});
		default:
			return state;
	}
}

exports.default = (0, _redux.combineReducers)({
	global: globalReducer,
	auth: authReducer,
	form: _reduxForm.reducer
});