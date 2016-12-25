"use strict";

import React from 'react';

import './PageWidthControl.scss';

const PageWidthControl = (props) => (
	<div 
		className={`react-grids-page-width-control ${props.className ? props.className : ''}`}
		style={{
			maxWidth:(props['max-width'] || 1440).toString().replace('px', '')+'px'
		}}
	>
		{props.children}
	</div>
);

export default PageWidthControl;