import React from 'react';
import './grids.scss';

/*-----------------------------------------------------
 *	columns
 *	@props = {
		base:int, // supports 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 column grids
		span:int
	}
 */
const Column = (props) => {

	var 
		base = parseInt(props.base),
		span = parseInt(props.span)
	;

	switch(parseInt(base)){
		case 5:{
			base = 10;
			span = 10 / parseInt(props.base) * parseInt(props.span);
			break;
		}
		case 1:
		case 2:
		case 3:
		case 4:
		case 6:{
			base = 12;
			span = 12 / parseInt(props.base) * parseInt(props.span);
			break;
		}
	}

	return (
		<div 
			className={
				`react-grids-col-${base || '12'}-${span || '6'}${props.reverseGrid ? '-reverse-grid' : ''}
				${props.className ? props.className : ''}`
			} 
			style={props.style}
		>{props.children}</div>
	);
};

export default Column;