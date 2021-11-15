import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {createTheme} from '@material-ui/core/styles';
const drawerWidth = 240;

const Advanced = () => {
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
		<div>
			<AppBar
				position="fixed"
				sx={{width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`}}
				color="primary"
				style={advancedStyle}
			>
				<Toolbar sx={{paddingTop: '2%'}}>
					<Typography variant="h4" noWrap component="div" theme={fontTheme}>
            Advanced
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Advanced;
