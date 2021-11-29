import React, {useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {createTheme} from '@material-ui/core/styles';
import HeatmapGrid from './HeatmapGrid';
import h337 from 'heatmap.js';
import iotCrop from '../images/iot-crop1.png';

import '../index.css';


const drawerWidth = 240;

const Heatmap = ({data}) => {
	if (!data) {
		return (
			<div>Loading...</div>
		);
	}
	useEffect( () => {
		// const heatmapInstance = h337.create({
		// 	// only container is required, the rest will be defaults
		// 	container: document.querySelector('.heatmap-container'),
		// 	radius: 20,
		// 	maxOpacity: 5,
		// 	minOpacity: 0.6,
		// 	blur: .7,
		// });
		const points = [];
		for (let i = 0; i < data.length; i++) {
			const element = data[i];
			const point = {
				x: element.x * 40 - 20,
				y: element.y * 40 - 20,
				value: element.temp,
				radius:123
			};

			points.push(point);
		}

		// heatmapInstance.configure(nuConfig);
		console.log(points);

		// heatmap data format
		const dataHeatmap = {
			max: 27, // to change
			data: points,
		};

		// if you have a set of datapoints always use setData instead of addData
		// for data initialization

		// heatmapInstance.setData(dataHeatmap);

		makeRows(14, 32);
	}, []);
	


	const heatmapStyle = {
		width: `calc(100% - ${drawerWidth}px)`,
		height: 100,
	};
	const mainContentStyle = {
		marginLeft: {drawerWidth},
	};
	const fontTheme = createTheme({
		typography: {
			fontFamily: 'Rockwell',
		},
	});
	

	function makeRows(rows, cols) {
		const container = document.getElementsByClassName('grid-container')[0];

		container.style.setProperty('--grid-rows', rows);
		container.style.setProperty('--grid-cols', cols);

		for (let rowIndex = 1; rowIndex <= rows; rowIndex++) {
			for(let columnIndex = 1; columnIndex <= cols; columnIndex++) {
				let cell = document.createElement('div');
				cell.id = `row-${rowIndex} cell-${columnIndex}`;
				container.appendChild(cell).className = 'grid-item';
			}
		}
	}
	
	return (
		<div>
			<AppBar
				position="fixed"
				sx={{width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`}}
				color='primary'
				style={heatmapStyle}
			>
				<Toolbar sx={{paddingTop: '2%'}}>
					<Typography variant="h4" noWrap component="div" theme={fontTheme}>
            Heatmap
					</Typography>
				</Toolbar>
			</AppBar>
			<div className='heatmap-container'>
				<div className='grid-container'>
				</div>
				
			</div>
		</div>
	);
};

export default Heatmap;
