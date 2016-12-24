"use strict";

import React from "react";
import ReactDOM from 'react-dom';
import MainApp from './views/MainApp';

window.mainApp = (function(app){

	app.init = function(targetEl){
		ReactDOM.render(
			MainApp,
			targetEl
		);
	}

	return app;
})(window.mainApp || {});
