import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {createTheme} from '@material-ui/core/styles';
import IndividualModule from './IndividualModule';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@mui/material';
import FloorSelector from './FloorSelector';
import { getLatestReadings } from '../../utils/server-fetch';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			height: 300
		}
	},
}));

const Advanced = ({data, iotFilterHandler}) => {
	const [latestReadings, setLatestReadings] = useState(null);
	const classes = useStyles();

	useEffect(async () => {
		const readings = await getLatestReadings();
		setLatestReadings(readings);
	}, []);

	if (!latestReadings) {
		return <div>Loading../</div>;
	}

	const advancedStyle = {
		width: `calc(100% - ${drawerWidth}px)`,
		height: 100,
	};
	const fontTheme = createTheme({
		typography: {
			fontFamily: 'Rockwell',
		},
	});
	
	return (
		<div style={{marginLeft: `${drawerWidth}px`}}>
			<AppBar
				position="fixed"
				sx={{width: `calc(100% - ${drawerWidth}px)`}}
				color="primary"
				style={advancedStyle}
			>
				<Toolbar sx={{paddingTop: '2%'}}>
					<Typography variant="h4" noWrap component="div" theme={fontTheme}>
            Advanced
					</Typography>
				</Toolbar>
			</AppBar>
			<FloorSelector />
			<Grid container spacing={0.2} className={classes.root}>
				{latestReadings.map((iotModule, i) => {
					return (
						<Grid item xs={4} key={i}>
							<IndividualModule 
								iotModule={iotModule} iotFilterHandler={(iot) => iotFilterHandler(iot)}
								currentState={!localStorage.getItem(`${iotModule.x}-${iotModule.y}`)}
							/>
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
};

export default Advanced;
