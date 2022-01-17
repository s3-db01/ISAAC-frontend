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

import dashboardGraphStyle from './styles/dashboardGraphStyle';

const DashboardGraphs = ({data}) => {
	const [measurement, setMeasurement] = useState(Measurement.TEMPERATURE);

	const graphChildRef = useRef(null);


	let graphData = null;
	setGraphData();
	function setGraphData() {
		const thisWeekMeasurements = getMeasurementArray(new Date(), data, measurement);

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

	return (
		<div>
			<Paper sx={dashboardGraphStyle.paperStyle}>
				<Button
					variant="contained"
					color='primary'
					onClick={() => updateDatasets()}
					style={dashboardGraphStyle.btnStyle}>Switch
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
