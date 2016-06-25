import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import AuthService from '../services/auth';

const submit = (values, dispatch) => {
	return AuthService.attemptLogin(values, dispatch);
}

class LoginForm extends React.Component {

	render() {
		const {
			fields: { email, password, _token },
			handleSubmit,
			submitting,
			error
		} = this.props;

		return (
			<form onSubmit={handleSubmit(submit)} className="login-form">
				{error && <div className="alert alert-danger">{error}</div>}
				<fieldset className="field-group">
					<label forHtml="email" className="sr-only">Username</label>
					<input type="text" placeholder="Username or email" className="form-control" {...email} />
					{email.touched && email.error && <div className="alert alert-danger">{email.error}</div>}

					<label forHtml="password" className="sr-only">Password</label>
					<input type="password" placeholder="Password" className="form-control" {...password} />
					{password.touched && password.error && <div className="alert alert-danger">{password.error}</div>}

					<input type="hidden" {..._token} />
				</fieldset>

				<button type="submit" className="btn btn-primary btn-lg btn-block" disabled={submitting}>Login</button>
			</form>
		)
	}
}

LoginForm.PropTypes = {
	fields: PropTypes.object.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	submitting: PropTypes.bool.isRequired,
	error: PropTypes.string
}

const mapStateToProps = (state) => {
	return {
		initialValues: {
			_token: state.global.csrfToken 
		}
	}
}

export default LoginForm = reduxForm({
	form: 'login',
	fields: ['email', 'password', '_token']
}, mapStateToProps)(LoginForm);
