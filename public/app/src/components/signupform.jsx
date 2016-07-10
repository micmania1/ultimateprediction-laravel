import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { attemptSignup } from '../services/auth';

const submit = (values, dispatch) => {
	return attemptSignup(values, dispatch);
}

class SignupForm extends React.Component {

	render() {
		const {
			fields: { name, email, password, password_confirmation, _token },
			handleSubmit,
			submitting,
			error
		} = this.props;

		return (
			<form onSubmit={handleSubmit(submit)} className="login-form">
				{error && <div className="alert alert-danger">{error}</div>}
				<fieldset className="field-group">
					<label forHtml="name" className="sr-only">Username</label>
					<input type="text" placeholder="Username" className="form-control" {...name} />
					{name.touched && name.error && <div className="alert alert-danger">{name.error}</div>}

					<label forHtml="email" className="sr-only">Email</label>
					<input type="email" placeholder="Email" className="form-control" {...email} />
					{email.touched && email.error && <div className="alert alert-danger">{email.error}</div>}


					<label forHtml="password" className="sr-only">Password</label>
					<input type="password" placeholder="Password" className="form-control" {...password} />
					{password.touched && password.error && <div className="alert alert-danger">{password.error}</div>}

					<label forHtml="password_confirmation" className="sr-only">Confirm Password</label>
					<input type="password" placeholder="Confirm Password" className="form-control" {...password_confirmation} />
					{password_confirmation.touched && password_confirmation.error && <div className="alert alert-danger">{password_confirmation.error}</div>}

					<input type="hidden" {..._token} />
				</fieldset>

				<button type="submit" className="btn btn-primary btn-lg btn-block" disabled={submitting}>Signup</button>
			</form>
		)
	}

}

SignupForm.PropTypes = {
	fields: PropTypes.object.isRequred,
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

export default SignupForm = reduxForm({
	form: 'signup',
	fields: ['name', 'email', 'password', 'password_confirmation', '_token']
}, mapStateToProps)(SignupForm);
