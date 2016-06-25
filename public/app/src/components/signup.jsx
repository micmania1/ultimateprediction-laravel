import React from 'react';
import SignupForm from './signupform';
import { Link } from 'react-router';

export default class Signup extends React.Component {

	render() {
		return (
			<div className="app-container full-page">
				<SignupForm />
				<div className="form-links">
					<Link to="/">Login</Link>
				</div>
			</div>
		)
	}

}

