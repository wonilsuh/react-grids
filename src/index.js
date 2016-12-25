"use strict";

import React from 'react';
import './grids.scss';

const DEFAULT_CUTOFF = 699;

/*-----------------------------------------------------
 *	wrapper for columns
 */
class Wrap extends React.Component{

	constructor(){
		super();

		this.windowResizeTimeoutId;

		this.state = {
			shouldCutoff:false,
			cutoff:DEFAULT_CUTOFF
		}
	}

	componentWillMount(){
		this.setState({
			cutoff:parseInt(this.props.cutoff) || DEFAULT_CUTOFF
		});
		this.respondToWindowResize();
	}

	render(){
		return (
			<div 
				className={`
					grids-wrap ${this.props.className ? this.props.className : ''}
					${this.props.layoutFlip === true ? ' layout-flip' : ''} 
					align-${` ${this.props.align}` || ' center'}
					${this.state.shouldCutoff === true ? ' cutoff' : ''}
				`}
				style={this.props.style}
			>{this.props.children}</div>
		)
	}

	componentDidMount(){
		this.respondToWindowResize();
		window.addEventListener("resize", this.onWindowResize.bind(this));
	}

	onWindowResize(evt){
		clearTimeout(this.windowResizeTimeoutId);
		this.windowResizeTimeoutId = setTimeout(() => {
			this.respondToWindowResize();
		}, 50);
	}

	respondToWindowResize(){
		
		clearTimeout(this.windowResizeTimeoutId);

		if(window.innerWidth <= this.state.cutoff && this.state.shouldCutoff == false){
			this.setState({
				shouldCutoff:true
			});
		}

		if(window.innerWidth > this.state.cutoff && this.state.shouldCutoff == true){
			this.setState({
				shouldCutoff:false
			});
		}
	}

	componentWillUnmount(){
		clearTimeout(this.windowResizeTimeoutId);
	}
}

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
				`grids-col-${base || '12'}-${span || '6'}${props.reverseGrid ? '-reverse-grid' : ''}
				${props.className ? props.className : ''}`
			} 
			style={props.style}
		>{props.children}</div>
	);
};

const Grids = {
	Wrap,
	Column
}

export default Grids;