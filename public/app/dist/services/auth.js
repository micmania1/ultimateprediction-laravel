'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.redirectIfLoggedIn = exports.guard = exports.attemptSignup = exports.attemptLogin = undefined;

var _actions = require('../actions');

var _reactRouter = require('react-router');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOGIN_URL = 'login';
var SIGNUP_URL = 'signup';
var AUTHENTICATED_URL = 'predictions';
var SESSION_TIMEOUT = 0; // No session timeout

var attemptLogin = exports.attemptLogin = function attemptLogin(values, dispatch) {
	return new Promise(function (resolve, reject) {
		_jquery2.default.ajax({
			type: 'POST',
			url: LOGIN_URL,
			data: values,
			dataType: 'json',
			success: function success(data) {
				if (data.user) {
					dispatch({
						type: _actions.LOGIN_SUCCESS,
						user: data.user,
						lastActiveTime: Date.now()
					});
					_reactRouter.browserHistory.push(AUTHENTICATED_URL);
					resolve();
				} else {
					var error = 'Check that you entered your details correclty.';
					if (data.error) {
						error = data.error;
					}
					reject({ _error: error });
				}
			},
			error: function error(data) {
				var error = 'An error occurred. Please try again soon.';
				if (data.error) {
					error = data.error;
				}
				reject({ _error: error });
			}
		});
	});
};

var attemptSignup = exports.attemptSignup = function attemptSignup(values, dispatch) {
	return new Promise(function (resolve, reject) {
		_jquery2.default.ajax({
			type: 'POST',
			url: SIGNUP_URL,
			data: values,
			dataType: 'json',
			success: function success(data) {
				if (data.user) {
					dispatch({
						type: _actions.LOGIN_SUCCESS,
						user: data.user,
						lastActiveTime: Date.now()
					});
					_reactRouter.browserHistory.push(AUTHENTICATED_URL);
					resolve();
				} else {
					var error = 'There was an error submitting the form.';
					if (data.error) {
						error = data.error;
					}
					reject({ _error: error });
				}
			},
			error: function error(data) {
				var error = 'An error occurred. Please try again soon.';
				if (data.error) {
					error = data.error;
				}
				reject({ _error: error });
			}
		});
	});
};

var guard = exports.guard = function guard() {
	return function (dispatch, getState) {
		return dispatch({ type: 'TEST' });
	};
};

var redirectIfLoggedIn = exports.redirectIfLoggedIn = function redirectIfLoggedIn() {
	console.log('checking if user is logged in');
	return function (dispatch, getState) {
		if (isLoggedIn(getState().auth.user)) {
			console.log('redirect');
			_reactRouter.browserHistory.push(AUTHENTICATED_URL);
		}
	};
};

var isLoggedIn = function isLoggedIn(user) {
	if (!user.id || !user.name) {
		console.log('first..', user, user.id, user.name);
		return false;
	}

	if (SESSION_TIMEOUT < 1) {
		return true;
	}

	// @todo implement session timeout
	return false;
};