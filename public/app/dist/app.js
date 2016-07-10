'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.APP_ROUTES = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actions = require('./actions');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Application = function Application(_ref) {
	var csrfToken = _ref.csrfToken;
	var updateCsrfToken = _ref.updateCsrfToken;
	var children = _ref.children;
	return _react2.default.createElement(
		'div',
		{ className: 'container' },
		children
	);
};

var APP_ROUTES = exports.APP_ROUTES = {
	login: '/',
	signup: '/signup',
	predictions: '/predictions',
	standings: '/standings'
};

var App = (0, _reactRedux.connect)()(Application);
exports.default = App;