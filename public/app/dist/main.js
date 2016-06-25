'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _appState = require('./reducers/appState');

var _appState2 = _interopRequireDefault(_appState);

var _reactRouter = require('react-router');

var _app = require('./app');

var _home = require('./components/home');

var _home2 = _interopRequireDefault(_home);

var _login = require('./components/login');

var _login2 = _interopRequireDefault(_login);

var _signup = require('./components/signup');

var _signup2 = _interopRequireDefault(_signup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_appState2.default);

_reactDom2.default.render(_react2.default.createElement(
	_reactRedux.Provider,
	{ store: store },
	_react2.default.createElement(
		_reactRouter.Router,
		{ history: _reactRouter.browserHistory },
		_react2.default.createElement(
			_reactRouter.Route,
			{ path: '/', component: _app.App },
			_react2.default.createElement(_reactRouter.IndexRoute, { component: _login2.default }),
			_react2.default.createElement(_reactRouter.Route, { path: '/signup', component: _signup2.default })
		)
	)
), document.getElementById('app'));