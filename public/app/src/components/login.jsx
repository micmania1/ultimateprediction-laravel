import React from 'react';
import LoginForm from './loginform';
import { Link } from 'react-router';

export default class Login extends React.Component {

	render() {
		return (
			<div className="app-container full-page">
				<LoginForm />
				<div className="form-links">
					<Link to="/signup">Signup</Link>
				</div>
			</div>
		)
	}

}
