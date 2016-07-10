'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _auth = require('../services/auth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var submit = function submit(values, dispatch) {
	return (0, _auth.attemptSignup)(values, dispatch);
};

var SignupForm = function (_React$Component) {
	_inherits(SignupForm, _React$Component);

	function SignupForm() {
		_classCallCheck(this, SignupForm);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SignupForm).apply(this, arguments));
	}

	_createClass(SignupForm, [{
		key: 'render',
		value: function render() {
			var _props = this.props;
			var _props$fields = _props.fields;
			var name = _props$fields.name;
			var email = _props$fields.email;
			var password = _props$fields.password;
			var password_confirmation = _props$fields.password_confirmation;
			var _token = _props$fields._token;
			var handleSubmit = _props.handleSubmit;
			var submitting = _props.submitting;
			var error = _props.error;


			return _react2.default.createElement(
				'form',
				{ onSubmit: handleSubmit(submit), className: 'login-form' },
				error && _react2.default.createElement(
					'div',
					{ className: 'alert alert-danger' },
					error
				),
				_react2.default.createElement(
					'fieldset',
					{ className: 'field-group' },
					_react2.default.createElement(
						'label',
						{ forHtml: 'name', className: 'sr-only' },
						'Username'
					),
					_react2.default.createElement('input', _extends({ type: 'text', placeholder: 'Username', className: 'form-control' }, name)),
					name.touched && name.error && _react2.default.createElement(
						'div',
						{ className: 'alert alert-danger' },
						name.error
					),
					_react2.default.createElement(
						'label',
						{ forHtml: 'email', className: 'sr-only' },
						'Email'
					),
					_react2.default.createElement('input', _extends({ type: 'email', placeholder: 'Email', className: 'form-control' }, email)),
					email.touched && email.error && _react2.default.createElement(
						'div',
						{ className: 'alert alert-danger' },
						email.error
					),
					_react2.default.createElement(
						'label',
						{ forHtml: 'password', className: 'sr-only' },
						'Password'
					),
					_react2.default.createElement('input', _extends({ type: 'password', placeholder: 'Password', className: 'form-control' }, password)),
					password.touched && password.error && _react2.default.createElement(
						'div',
						{ className: 'alert alert-danger' },
						password.error
					),
					_react2.default.createElement(
						'label',
						{ forHtml: 'password_confirmation', className: 'sr-only' },
						'Confirm Password'
					),
					_react2.default.createElement('input', _extends({ type: 'password', placeholder: 'Confirm Password', className: 'form-control' }, password_confirmation)),
					password_confirmation.touched && password_confirmation.error && _react2.default.createElement(
						'div',
						{ className: 'alert alert-danger' },
						password_confirmation.error
					),
					_react2.default.createElement('input', _extends({ type: 'hidden' }, _token))
				),
				_react2.default.createElement(
					'button',
					{ type: 'submit', className: 'btn btn-primary btn-lg btn-block', disabled: submitting },
					'Signup'
				)
			);
		}
	}]);

	return SignupForm;
}(_react2.default.Component);

SignupForm.PropTypes = {
	fields: _react.PropTypes.object.isRequred,
	handleSubmit: _react.PropTypes.func.isRequired,
	submitting: _react.PropTypes.bool.isRequired,
	error: _react.PropTypes.string
};

var mapStateToProps = function mapStateToProps(state) {
	return {
		initialValues: {
			_token: state.global.csrfToken
		}
	};
};

exports.default = SignupForm = (0, _reduxForm.reduxForm)({
	form: 'signup',
	fields: ['name', 'email', 'password', 'password_confirmation', '_token']
}, mapStateToProps)(SignupForm);