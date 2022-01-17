import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/system';


const drawerWidth = 240;
const style = {
	position: 'absolute',
	left: '50%',
	top: '50%',
	transform: 'translate(-50%, -50%)'
};

export default function Loading() {
	return (
		<Box sx={{ display: 'flex' }}>
			<CircularProgress style={style}/>
		</Box>
	);
}
