"use strict";

import React from 'react';
import './grids.scss';

const Wrap = (props) => (
	<div 
		className={
			`grids-wrap ${props.className ? props.className : ''}
			${props.cutoff ? ` cutoff-${props.cutoff}` : ''}
			${props.layoutFlip === true ? ' layout-flip' : ''} 
			align-${` ${props.align}` || ' center'}`} 
		style={props.style}
	>{props.children}</div>
)

const Column = (props) => (
	<div className={`grids-col-${props.base || '12'}-${props.span || '6'}${props.reverseGrid ? '-reverse-grid' : ''} ${props.className ? props.className : ''}`} style={props.style}>{props.children}</div>
)

const Grids = {
	Wrap,
	Column
}

export default Grids;