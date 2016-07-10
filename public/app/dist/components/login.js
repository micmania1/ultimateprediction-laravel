'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _loginform = require('./loginform');

var _loginform2 = _interopRequireDefault(_loginform);

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginComponent = function LoginComponent(user) {
	return _react2.default.createElement(
		'div',
		{ className: 'app-container full-page' },
		_react2.default.createElement(_loginform2.default, null),
		_react2.default.createElement(
			'div',
			{ className: 'form-links' },
			_react2.default.createElement(
				_reactRouter.Link,
				{ to: '/signup' },
				'Signup'
			)
		)
	);
};

var mapStateToProps = function mapStateToProps(state) {
	return {
		user: state.auth.user
	};
};

var Login = (0, _reactRedux.connect)()(LoginComponent);
exports.default = Login;