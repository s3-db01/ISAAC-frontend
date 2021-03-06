import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Gauge from '../components/Gauge';
import Grid from '@mui/material/Grid';
import DashboardGraphs from '../components/DashboardGraphs';
import Box from '@material-ui/core/Box';
import {createTheme} from '@material-ui/core/styles';
import Loading from './Loading';

import dashboardStyle from './styles/dashboardStyle';

const drawerWidth = 240;

const Dashboard = ({data}) => {

	if (data.length === 0) {
		return (
			<Loading/>
		);
	}

	return (
		<div style={dashboardStyle.generalStyle}>
			<AppBar
				position="fixed"
				color='primary'
				style={dashboardStyle.dashBoardStyle}
			>
				<Toolbar sx={{paddingTop: '2%'}}>
					<Typography variant="h4" noWrap component="div" theme={dashboardStyle.fontTheme}>
            Dashboard
					</Typography>
				</Toolbar>
			</AppBar>
			<Box style={dashboardStyle.content}>
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
