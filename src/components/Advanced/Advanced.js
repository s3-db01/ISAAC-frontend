import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {createTheme} from '@material-ui/core/styles';
import IndividualModule from './IndividualModule';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@mui/material';
import FloorSelector from './FloorSelector';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			height: 300
		}
	},
}));

const latestReadingIotModules = [
	{
		x: 4,
		y: 3,
		temperature: 24.5,
		humidity: 31.5,
		date: '12/20/2021',
	},
	{
		x: 12,
		y: 20,
		temperature: 21,
		humidity: 40,
		date: '11/19/2021',
	},
	{
		x: 15,
		y: 12,
		temperature: 25,
		humidity: 33,
		date: '11/19/2021',
	},
	{
		x: 15,
		y: 12,
		temperature: 25,
		humidity: 33,
		date: '11/19/2021',
	},
	{
		x: 15,
		y: 12,
		temperature: 25,
		humidity: 33,
		date: '11/19/2021',
	},
	{
		x: 11,
		y: 4,
		temperature: 25,
		humidity: 33,
		date: '11/19/2021',
	}
];

const Advanced = ({data, iotFilterHandler}) => {
	const advancedStyle = {
		width: `calc(100% - ${drawerWidth}px)`,
		height: 100,
	};
	const fontTheme = createTheme({
		typography: {
			fontFamily: 'Rockwell',
		},
	});
	const classes = useStyles();
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
				{latestReadingIotModules.map((iotModule, i) => {
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
