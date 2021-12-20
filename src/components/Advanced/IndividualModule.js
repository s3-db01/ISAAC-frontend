import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Switch} from '@material-ui/core';
const label = { inputProps: { 'aria-label': 'Switch demo' } };


const IndividualModule = ({drawerWidth, iotModule}) => {
	return (
		<div>
			<Card raised={true}>
				<CardContent>
					<Typography variant="h4">
          IOT module {`${iotModule.x}-${iotModule.y}`}
					</Typography>
					<Typography sx={{ fontSize: 20 }} variant="h3" component="div" color="text.secondary" gutterBottom>
       Temperature: {iotModule.temperature} °C
					</Typography>
					<Typography sx={{ fontSize: 20 }} variant="h3" color="text.secondary" component="div" gutterBottom>
       Humidty: {iotModule.humidity} %
					</Typography>
					<Typography sx={{ fontSize: 20 }} variant="h4" color="text.secondary" component="div" gutterBottom>
       Last reading: {iotModule.date}
					</Typography>
					<Switch {...label} defaultChecked />
				</CardContent>
			</Card>
		</div>
	);
};

export default IndividualModule;