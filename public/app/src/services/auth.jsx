import { LOGIN_SUCCESS, LOGIN_FAILED } from '../actions';
import { browserHistory } from 'react-router';
import $ from 'jquery';

const LOGIN_URL = 'login'
const SIGNUP_URL = 'signup';
const AUTHENTICATED_URL = 'predictions';
const SESSION_TIMEOUT = 0; // No session timeout

export const attemptLogin = (values, dispatch) => {
	return new Promise((resolve, reject) => {
		$.ajax({
			type: 'POST',
			url: LOGIN_URL,
			data: values,
			dataType: 'json',
			success: (data) => {
				if(data.user) {
					dispatch({
						type: LOGIN_SUCCESS,
						user: data.user,
						lastActiveTime: Date.now()
					});
					browserHistory.push(AUTHENTICATED_URL);
					resolve();
				} else {
					let error = 'Check that you entered your details correclty.';
					if(data.error) {
						error = data.error;
					}
					reject({_error: error});
				}
			},
			error: (data) => {
				let error = 'An error occurred. Please try again soon.';
				if(data.error) {
					error = data.error;
				}
				reject({_error: error});
			}
		});
	})
}

export const attemptSignup = (values, dispatch) => {
	return new Promise((resolve, reject) => {
		$.ajax({
			type: 'POST',
			url: SIGNUP_URL,
			data: values,
			dataType: 'json',
			success: (data) => {
				if(data.user) {
					dispatch({
						type: LOGIN_SUCCESS,
						user: data.user,
						lastActiveTime: Date.now()
					});
					browserHistory.push(AUTHENTICATED_URL);
					resolve();
				} else {
					let error = 'There was an error submitting the form.';
					if(data.error) {
						error = data.error;
					}
					reject({_error: error});
				}
			},
			error: (data) => {
				let error = 'An error occurred. Please try again soon.';
				if(data.error) {
					error = data.error;
				}
				reject({_error: error});
			}
		});
	});
}

export const guard = () => {
	return (dispatch, getState) => {
		return dispatch({type: 'TEST'});
	}
}

export const redirectIfLoggedIn = () => {
	console.log('checking if user is logged in');
	return (dispatch, getState) => {
		if(isLoggedIn(getState().auth.user)) {
			console.log('redirect');
			browserHistory.push(AUTHENTICATED_URL);
		}
	}
}

const isLoggedIn = (user) => {
	if(!user.id || !user.name) {
		console.log('first..', user, user.id, user.name);
		return false;
	}

	if(SESSION_TIMEOUT < 1) {
		return true;
	}

	// @todo implement session timeout
	return false;
}
