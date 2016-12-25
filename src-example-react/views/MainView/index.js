"use strict";

import React from 'react';
import Grids from '../../../dist/js/react-grids-component.lib.js'

const samples = {
	12:[
		[12],
		[6,6],
		[4,8],
		[4,4,4],
		[3,3,3,3],
		[5,7]
	],
	11:[
		[4,7],
		[3,5,3],
		[2,3,4,2]
	],
	7:[
		[3,4],
		[1,2,4]
	],
	5:[
		[2,3],
		[1,1,3]
	]
}

const MainView = () => {
	var output = <div>{
		Object.keys(samples).map( (base, baseCount) => samples[base].map( (columns, columnsCount) => (
			<div className="base-wrap" key={`columns-${baseCount}-${columnsCount}`}>
				<Grids.Wrap>
					<Grids.Column span={base} base={base} className="heading">
						Columns: {`${columns.reduce( (prev, column) => `${prev} - ${column}`, '')} / ${base}`.substring(2)}
					</Grids.Column>
				</Grids.Wrap>
				<Grids.Wrap>{
					columns.map( (span, spanCount) => (
						<Grids.Column base={base} span={span} key={`span-${baseCount}-${columnsCount}-${spanCount}`}>
							<div className="cell">{span}</div>
						</Grids.Column>
					))
				}</Grids.Wrap>
			</div>
		)))
	}</div>;
	return output;
}

export default MainView;