import React from 'react';
import { UPDATE_CSRF_TOKEN } from './actions';
import { connect } from 'react-redux';


const Application = ({csrfToken, updateCsrfToken, children}) => {
	<div className="container">
		<h1>Yup</h1>
		{children}
	</div>
}

export const APP_ROUTES = {
	login: '/',
	signup: '/signup',
	predictions: '/predictions',
	standings: '/standings'
}


const App = connect()(Application);
export default App;
