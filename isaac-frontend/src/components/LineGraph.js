import React, {useRef, forwardRef, useImperativeHandle} from 'react';
import PropTypes from 'prop-types';
import {Line} from 'react-chartjs-2';

const Graph = forwardRef((props, ref) => {
	const graphRef = useRef(null);
	useImperativeHandle(ref, () => ({
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

Graph.propTypes = {
	data: PropTypes.object.isRequired,
};
Graph.propTypes = {
	height: PropTypes.number.isRequired,
};
Graph.propTypes = {
	title: PropTypes.string.isRequired,
};
Graph.displayName = 'Graph';
export default Graph;

