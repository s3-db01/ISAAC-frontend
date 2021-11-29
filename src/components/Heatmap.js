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

		makeRows(16, 16);
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
		console.log(container);
		container.style.setProperty('--grid-rows', rows);
		container.style.setProperty('--grid-cols', cols);
		for (let c = 0; c < (rows * cols); c++) {
			let cell = document.createElement('div');
			cell.innerText = (c);
			container.appendChild(cell).className = 'grid-item';
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
				{/* <div style={mainContentStyle}>
					<img src={iotCrop} className="image"/>
				</div> */}
				<div className='grid-container'>
					{/* https://stackoverflow.com/questions/62262742/make-div-as-high-as-background-image/62262990#62262990
					https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript */}
				</div>
			</div>
			{/* <HeatmapGrid/> */}
		</div>
	);
};

export default Heatmap;
