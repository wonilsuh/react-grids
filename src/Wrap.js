import React from 'react';
import './grids.scss';
import PageWidthControl from './PageWidthControl';

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
			<PageWidthControl max-width={this.props['max-width']}>
				<div 
					className={`
						react-grids-wrap ${this.props.className ? this.props.className : ''}
						${this.props.layoutFlip === true ? ' layout-flip' : ''} 
						align-${` ${this.props.align}` || ' center'}
						${this.state.shouldCutoff === true ? ' cutoff' : ''}
					`}
					style={this.props.style}
				>{this.props.children}</div>
			</PageWidthControl>
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

export default Wrap;