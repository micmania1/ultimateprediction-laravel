import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appState from './reducers/appState';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { App, APP_ROUTES } from './app';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';

let store = createStore(appState);

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={Login} />
				<Route path="/signup" component={Signup} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);
