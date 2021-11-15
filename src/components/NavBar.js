import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import SpeedIcon from '@mui/icons-material/Speed';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsInputCompositeIcon from'@mui/icons-material/SettingsInputComposite';
import SettingsIcon from '@mui/icons-material/Settings';

import {Tab, Tabs} from '@material-ui/core/';
import {
	Route,
	Link,
} from 'react-router-dom';

import logo from '../images/isaac-primary-logo-rgb-500px.png';

const drawerWidth = 240;


// app bar
export default function PermanentDrawerLeft() {
	const styles = {
		toolbarContainer: {
			backgroundImage: `url(${logo})`,
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center center',
			height: 100,
		},
	};

	return (
		<Box sx={{display: 'flex'}}>
			<CssBaseline />
			<Drawer
				sx={{
					'width': drawerWidth,
					'flexShrink': 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
					},
				}}
				variant="permanent"
				anchor="left"
			>
				<Toolbar style={styles.toolbarContainer}/>
				<Divider />
				<Route
					path='/'
					render={(history) => (
						<Tabs
							orientation="vertical"
							value={history.location.pathname}
							textColor="secondary"
							indicatorColor="secondary"
						>
							<Tab
								label={<div style={{fontFamily: 'Open Sans'}}>Dashboard</div>}
								value="/"
								component={Link}
								to="/"
								icon={<SpeedIcon/>}
							/>
							<Tab
								label={<div style={{fontFamily: 'Open Sans'}}>Heatmap</div>}
								value="/heatmap"
								component={Link}
								to="/heatmap"
								icon={<ThermostatIcon/>}
							/>
							<Tab
								label={<div style={{fontFamily: 'Open Sans'}}>Notifications</div>}
								value="/notifications"
								component={Link}
								to="/notifications"
								icon={<NotificationsIcon/>}
							/>
							<Tab
								label={<div style={{fontFamily: 'Open Sans'}}>Advanced</div>}
								value="/advanced"
								component={Link}
								to="/advanced"
								icon={<SettingsInputCompositeIcon />}
							/>
							<Tab
								label={<div style={{fontFamily: 'Open Sans'}}>Settings</div>}
								value="/settings"
								component={Link}
								to="/settings"
								icon={<SettingsIcon/>}
							/>
						</Tabs>
					)}>
				</Route>
				<Divider />
			</Drawer>
			<Box
				component="main"
				sx={{flexGrow: 1, bgcolor: 'background.default', p: 3}}
			>
				<Toolbar />
			</Box>
		</Box>
	);
}
