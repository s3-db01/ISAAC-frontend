/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import GaugeChart from 'react-gauge-chart';
import Paper from '@mui/material/Paper';

// eslint-disable-next-line react/prop-types
const Gauge = ({name, data}) => {
	const [value, setValue] = useState(null);

	const chartStyle = {
		height: 400,
		width: 500,
		fontFamily: 'Open Sans',
	};

	useEffect(async () => {
		if (name === 'Temperature') {
			data = data.map((obj) =>
				obj.temp,
			);
			const average = await data.reduce((total, next) => total +
      next, 0) / data.length;
			setValue((average - 15) * 6.67 / 100);
		} else {
			data = data.map((obj) =>
				obj.humidity,
			);

			const average = await data.reduce((total, next) => total +
    next, 0) / data.length;
			setValue(average /100);
		}
	}, []);

	const getFormatText = (val) => {
		if (name === 'Temperature') {
			return Math.round((val/6.67+14))+'°C';
		}
		return Math.round(val)+'%';
	};

	const getFormatArcLength = () => {
		if (name === 'Temperature') {
			return [0.375, 0.375, 0.25];
		}
		return [0.4, 0.2, 0.4];
	};

	if (!value) {
		return (
			<div>Loading...</div>
		);
	}

	const paperStyle = {
		height: 200,
		width: 'auto',
		textAlign: 'center',
		paddingBottom: '250px',
		margin: 'auto',
	};

	return (
		<Paper
			sx={paperStyle}
		>
			<Typography variant="h4" noWrap component="div"
				sx={{fontFamily: 'Open Sans'}}>
				{name}
			</Typography>
			<GaugeChart
				style={chartStyle}
				id="gauge-chart"
				colors={['#009DDC', '#57C61A', '#c12d3f']}
				arcWidth={0.2}
				textColor="#black"
				needleColor="#464A4F"
				needleBaseColor="#464A4F"
				percent={value}
				arcsLength={getFormatArcLength()}
				arcPadding={0.01}
				formatTextValue={(val) => getFormatText(val)}
			/>

		</Paper>
	);
};

export default Gauge;
