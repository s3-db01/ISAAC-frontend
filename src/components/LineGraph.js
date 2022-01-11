import React, {useRef, forwardRef, useImperativeHandle} from 'react';
import PropTypes from 'prop-types';
import {Line} from 'react-chartjs-2';

const LineGraph = React.forwardRef((props, ref) => {
	const graphRef = React.useRef(null);
	React.useImperativeHandle(ref, () => ({
		updateGraph() {
			graphRef.current.update();
		},
	}));
	return (
		<div>
			<Line
				height={props.height}
				data={props.data}
				ref={graphRef}
				options= {{
					maintainAspectRatio: false,
					plugins: {
						title: {
							display: true,
							text: props.title,
							font: {
								family: 'Open Sans',
								size: 18,
							},
						},
						legend: {
							labels: {
								font: {
									family: 'Open Sans',
									size: 14,
								},
							},
						},
					},
					elements: {
						line: {
							tension: 0.4, // may cause bizzare curves
						},
					},
				}}
			/>
		</div>

	);
});

LineGraph.propTypes = {
	data: PropTypes.object.isRequired,
};
LineGraph.propTypes = {
	height: PropTypes.number.isRequired,
};
LineGraph.propTypes = {
	title: PropTypes.string.isRequired,
};
LineGraph.displayName = 'LineGraph';
export default LineGraph;

