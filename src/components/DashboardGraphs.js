import LineGraph from './LineGraph';
import PropTypes from 'prop-types';
import React, {useState, useRef} from 'react';
import {startOfWeek, endOfWeek} from 'date-fns';
import {
	Measurement, nextMeasurement,
} from '../components/helper/MeasurementEnum';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { getMeasurementArray } from '../services/dashboardGrapService';

// const ref = useRef();
const DashboardGraphs = ({data}) => {
	const [measurement, setMeasurement] = useState(Measurement.TEMPERATURE);

	const graphChildRef = useRef(null);

	const paperStyle = {
		height: 340,
		width: 'auto',
		textAlign: 'center',
		paddingBottom: '250px',
		margin: 'auto',
	};


	let graphData = null;
	setGraphData();
	function setGraphData() {
		// const lastWeekMeasurements = getMeasurementArray(getLastWeekDate());
		const thisWeekMeasurements = getMeasurementArray(new Date(), data, measurement);
		console.log(thisWeekMeasurements, data);
		graphData = {
			labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday',
				'Friday', 'Saturday', 'Sunday'],
			datasets: [
				{
					fill: false,
					label: 'This week',
					data: thisWeekMeasurements.map((obj) => obj.average),
					backgroundColor: [
						'rgba(13, 99, 132, 0.3)',
					],
					borderColor: [
						'rgba(13, 99, 132, 1)',
					],
					borderWidth: 2,
				},
				{
					label: 'Maximum',
					type: 'line',
					backgroundColor: 'rgba(13, 99, 132, 0.3)',
					borderColor: 'transparent',
					pointRadius: 3,
					fill: 0,
					tension: 0,
					data: thisWeekMeasurements.map((obj) => obj.maximum),
					yAxisID: 'y',
					xAxisID: 'x',
				},
				{
					label: 'Minimum',
					type: 'line',
					backgroundColor: 'rgba(13, 99, 132, 0.3)',
					borderColor: 'transparent',
					pointRadius: 3,
					fill: 0,
					tension: 0,
					data: thisWeekMeasurements.map((obj) => obj.minimum),
					yAxisID: 'y',
					xAxisID: 'x',
				},
			],
		};
	}

	function updateDatasets() {
		setMeasurement(nextMeasurement(measurement));
		graphChildRef.current.updateGraph();
	}
	const btnStyle = {
		fontFamily: 'Open Sans',
		textTransform: 'none',
		fontWeight: 'bold',
		marginTop: 10,
		radius: 0.1,
		borderRadius: 10
	};

	return (
		<div>
			<Paper sx={paperStyle}>
				<Button
					variant="contained"
					color='primary'
					onClick={() => updateDatasets()}
					style={btnStyle}>Switch
				</Button>
				<LineGraph
					data={graphData}
					height={300}
					title={measurement}
					ref={graphChildRef}
				/>
			</Paper>
		</div>
	);
};

DashboardGraphs.propTypes = {
	data: PropTypes.array.isRequired,
};

export default DashboardGraphs;
