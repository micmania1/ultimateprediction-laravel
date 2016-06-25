import { LOGIN_SUCCESS, LOGIN_FAILED } from '../actions';
import $ from 'jquery';

const LOGIN_URL = 'login'
const SIGNUP_URL = 'signup';

export default class AuthService {

	static attemptLogin(values, dispatch) {
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

	static attemptSignup(values, dispatch) {
		console.log(values);
		return new Promise((resolve, reject) => {
			$.ajax({
				type: 'POST',
				url: SIGNUP_URL,
				data: values,
				dataType: 'json',
				success: (data) => {
					console.log(data);
					if(data.user) {
						dispatch({
							type: LOGIN_SUCCESS,
							user: data.user,
							lastActiveTime: Date.now()
						});
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

}
