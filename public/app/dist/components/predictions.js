'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PredictionsComponent = function PredictionsComponent() {
	return _react2.default.createElement(
		'div',
		{ className: 'app-container full-page' },
		_react2.default.createElement(
			'h1',
			null,
			'Predictions'
		),
		_react2.default.createElement(
			'a',
			{ href: '/logout' },
			'Logout'
		)
	);
};

var Predictions = (0, _reactRedux.connect)()(PredictionsComponent);
exports.default = Predictions;