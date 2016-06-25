'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _actions = require('../actions');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LOGIN_URL = 'login';
var SIGNUP_URL = 'signup';

var AuthService = function () {
	function AuthService() {
		_classCallCheck(this, AuthService);
	}

	_createClass(AuthService, null, [{
		key: 'attemptLogin',
		value: function attemptLogin(values, dispatch) {
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
		}
	}, {
		key: 'attemptSignup',
		value: function attemptSignup(values, dispatch) {
			console.log(values);
			return new Promise(function (resolve, reject) {
				_jquery2.default.ajax({
					type: 'POST',
					url: SIGNUP_URL,
					data: values,
					dataType: 'json',
					success: function success(data) {
						console.log(data);
						if (data.user) {
							dispatch({
								type: _actions.LOGIN_SUCCESS,
								user: data.user,
								lastActiveTime: Date.now()
							});
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
		}
	}]);

	return AuthService;
}();

exports.default = AuthService;