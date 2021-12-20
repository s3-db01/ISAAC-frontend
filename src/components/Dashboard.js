import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Gauge from '../components/Gauge';
import Grid from '@mui/material/Grid';
import DashboardGraphs from '../components/DashboardGraphs';
import Box from '@material-ui/core/Box';
import {createTheme} from '@material-ui/core/styles';

const drawerWidth = 240;

const Dashboard = ({data}) => {
	if (!data) {
		return (
			<div>...Loading</div>
		);
	}

	const generalStyle = {
		marginLeft: `${drawerWidth}px`,
		marginRight: 'auto',
	};

	const dashBoardStyle = {
		width: `calc(100% - ${drawerWidth}px)`,
		height: 100,
	};

	const content = {
		marginLeft: '10%',
		marginRight: '10%',
	};
	const fontTheme = createTheme({
		typography: {
			fontFamily: 'Rockwell',
		},
	});

	return (
		<div style={generalStyle}>
			<AppBar
				position="fixed"
				color='primary'
				style={dashBoardStyle}
			>
				<Toolbar sx={{paddingTop: '2%'}}>
					<Typography variant="h4" noWrap component="div" theme={fontTheme}>
            Dashboard
					</Typography>
				</Toolbar>
			</AppBar>
			<Box style={content}>
				<Grid container
					spacing={2}
				>
					<Grid item xs={12} lg={6}>
						<Gauge id="graph-chart-temperature" name="Temperature" data={data}/>
					</Grid>
					<Grid item xs={12} lg={6}>
						<Gauge id="graph-chart-humidity" name="Humidity" data={data}/>
					</Grid>
					<Grid item xs={12}>
						<DashboardGraphs data={data}/>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
};

export default Dashboard;
