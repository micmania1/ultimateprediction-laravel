import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'; 
import appState from './reducers/appState';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { App, APP_ROUTES } from './app';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
import Predictions from './components/predictions';
import { guard, redirectIfLoggedIn } from './services/auth';

let store = createStore(appState, applyMiddleware(ReduxThunk));

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={Login} onEnter={() => store.dispatch(redirectIfLoggedIn())} />
				<Route path="/signup" component={Signup} onEnter={() => store.dispatch(redirectIfLoggedIn())} />
				<Route path="/predictions" component={Predictions} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);
