import React from 'react';
import { connect } from 'react-redux';

const PredictionsComponent = () => (
	<div className="app-container full-page">
		<h1>Predictions</h1>
		<a href="/logout">Logout</a>
	</div>
);

const Predictions = connect()(PredictionsComponent);
export default Predictions;
