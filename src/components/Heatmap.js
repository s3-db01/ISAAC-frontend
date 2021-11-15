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
		const heatmapInstance = h337.create({
			// only container is required, the rest will be defaults
			container: document.querySelector('.heatmap-container'),
		});
		const points = [];
		for (let i = 0; i < data.length; i++) {
			const element = data[i];
			const point = {
				x: element.x * 40 - 20,
				y: element.y * 40 - 20,
				value: element.temp,
			};

			const leftPoint = {
				x: (element.x - 0.3) * 40 - 20,
				y: element.y * 40 - 20,
				value: element.temp,
			};

			const rightPoint = {
				x: (element.x + 0.3) * 40 - 20,
				y: element.y * 40 - 20,
				value: element.temp,
			};

			const upPoint = {
				x: element.x * 40 - 20,
				y: (element.y + 0.3) * 40 - 20,
				value: element.temp,
			};

			const downPoint = {
				x: element.x * 40 - 20,
				y: (element.y - 0.3) * 40 - 20,
				value: element.temp,
			};

			points.push(point);
			points.push(leftPoint);
			// points.push(rightPoint);
			// points.push(upPoint);
			points.push(downPoint);

		}
		var nuConfig = {
			radius: 10,
			maxOpacity: 1,
			minOpacity: 0.5,
			blur: .9,
		};
		heatmapInstance.configure(nuConfig);
		console.log(points);

		// heatmap data format
		const dataHeatmap = {
			max: 27, // to change
			data: points,
		};

		// if you have a set of datapoints always use setData instead of addData
		// for data initialization
		// console.log(dataHeatmap);
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
				<div style={mainContentStyle}>
					<img src={iotCrop} className="image"/>
				</div>
			</div>
			{/* <HeatmapGrid/> */}
			

		</div>
	);
};

export default Heatmap;
