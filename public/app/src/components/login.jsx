import React from 'react';
import LoginForm from './loginform';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const LoginComponent = (user) => (
	<div className="app-container full-page">
		<LoginForm />
		<div className="form-links">
			<Link to="/signup">Signup</Link>
		</div>
	</div>
);

const mapStateToProps = (state) => {
	return {
		user: state.auth.user
	}
}

const Login = connect()(LoginComponent);
export default Login;
