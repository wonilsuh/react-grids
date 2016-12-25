"use strict";

import React from 'react';
import './grids.scss';

/*-----------------------------------------------------
 *	wrapper for columns
 */
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

/*-----------------------------------------------------
 *	columns
 *	@props = {
		base:int, // supports 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 column grids
		span:int
	}
 */
const Column = (props) => {

	var 
		base = props.base,
		span = props.span
	;

	switch(parseInt(base)){
		case 5:{
			base = 10;
			span = 10 / props.base * props.span;
			break;
		}
		case 1:
		case 2:
		case 3:
		case 4:
		case 6:{
			base = 12;
			span = 12 / props.base * props.span;
			break;
		}
	}
	
	return (
		<div 
			className={
				`grids-col-${base || '12'}-${span || '6'}${props.reverseGrid ? '-reverse-grid' : ''}
				${props.className ? props.className : ''}`
			} 
			style={props.style}
		>{props.children}</div>
	)

}

const Grids = {
	Wrap,
	Column
}

export default Grids;