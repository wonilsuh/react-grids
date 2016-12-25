"use strict";

import React from 'react';
import ReactGrids from '../../../dist/js/index.js'

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
	var output = (<div>{
			Object.keys(samples).map( (base, baseCount) => samples[base].map( (columns, columnsCount) => (
				<div className="base-wrap" key={`columns-${baseCount}-${columnsCount}`}>
					<ReactGrids.Wrap cutoff={640} max-width={900}>
						<ReactGrids.Column span={base} base={base} className="heading">
							Columns: {`${columns.reduce( (prev, column) => `${prev} - ${column}`, '')} / ${base}`.substring(2)}
						</ReactGrids.Column>
					</ReactGrids.Wrap>
					<ReactGrids.Wrap cutoff={640} max-width={900}>{
						columns.map( (span, spanCount) => (
							<ReactGrids.Column base={base} span={span} key={`span-${baseCount}-${columnsCount}-${spanCount}`}>
								<div className="cell">{span}</div>
							</ReactGrids.Column>
						))
					}</ReactGrids.Wrap>
				</div>
			)))
		}</div>)
	return output;
}

export default MainView;