import React, {useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {createTheme} from '@material-ui/core/styles';
import HeatmapGrid from './HeatmapGrid';
import h337 from 'heatmap.js';

import '../index.css';


const drawerWidth = 240;

const Heatmap = ({data}) => {
	if (!data) {
		return (
			<div>Loading...</div>
		);
	}
	
	// this method gets the last entries with the same dateTime
	function getLastEntriesArray(data) {
		let lastIndex = data.length - 1;
		let lastDateTime = data[lastIndex].dateTime;
		let currentDateTime = data[lastIndex].dateTime; 
		const entries = [];
	
		// the loop runs in reversed order while the currentDateTime value does not change
		while(lastDateTime.getTime() == currentDateTime.getTime() && lastIndex > 0)
		{	
			entries.push(data[lastIndex]);
			lastDateTime = currentDateTime;
			lastIndex--;
			currentDateTime = data[lastIndex].dateTime;
		}
		return entries;
	}

	function makeRows(rows, cols) {
		const container = document.getElementsByClassName('grid-container')[0];

		container.style.setProperty('--grid-rows', rows);
		container.style.setProperty('--grid-cols', cols);

		for (let rowIndex = 1; rowIndex <= rows; rowIndex++) {
			for(let columnIndex = 1; columnIndex <= cols; columnIndex++) {
				let cell = document.createElement('div');
				cell.id = `row-${rowIndex} col-${columnIndex}`;
				container.appendChild(cell).className = 'grid-item';
			}
		}
	}

	useEffect( () => {
		makeRows(14, 32);	// create grid for placing points of the heatmap
		const lastEntries = getLastEntriesArray(data);
		const heatmapInstance = h337.create({
			// only container is required, the rest will be defaults
			container: document.querySelector('.heatmap-container'),
			radius: 20,
			maxOpacity: 5,
			minOpacity: 4,
			blur: .7,
			useLocalExtrema: false
		});

		const points = [];	// empty array for heatmap points
		// could be changed, represents the length of square grid item
		const gridItemLength = 20;	
		
		for (let i = 0; i < lastEntries.length; i++) {
			// represents the reading from a sensor
			const entry = lastEntries[i];
			try {
				// represents the div used for getting the position of the point
				let cell = document.getElementById(`row-${entry.y} col-${entry.x}`);
				console.log(cell);
				const point = {
					x:  cell.offsetLeft + gridItemLength,
					y: cell.offsetTop + gridItemLength,
					value: entry.temp,
					radius:40
				};

				points.push(point);
			} catch (err) {
				console.log(err);
			}
		}
		console.log(lastEntries);
		// heatmap data format
		const dataHeatmap = {
			min: 20,
			max: 26, // to change
			data: points,
		};

		// if you have a set of datapoints always use setData instead of addData
		// for data initialization
		heatmapInstance.setData(dataHeatmap);
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
				<div className='grid-container'></div>
			</div>
		</div>
	);
};

export default Heatmap;
