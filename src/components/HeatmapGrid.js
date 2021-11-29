import React, {useState, useEffect} from 'react';
import iotCrop from '../images/iot-crop1.png';
import iotSvg from '../images/derde-verdieping.svg';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {createTheme} from '@material-ui/core/styles';
import h337 from 'heatmap.js';

const rows = 14;
const cols = 32;
const mapTemperature = new Map();

const drawerWidth = 240;

const heatmapStyle = {
	width: `calc(100% - ${drawerWidth}px)`,
	height: 100,
};

const heatMapColorforValue = (value) => {
	var h = (1.0 - value) * 240;
	return 'hsl(' + h + ', 100%, 50%)';
};

const fontTheme = createTheme({
	typography: {
		fontFamily: 'Rockwell',
	},
});

const generateGrid = async (row, col, data) => {
	const grid = [];
	for (let i = 0; i < row; i++) {
		grid.push([]);
		for (let j = 0; j < col; j++) {
			grid[i].push(0);
		}
	}

	for (let  i = 0; i < data.length; i++) {
		const obj = data[i];
		// normal array starts at 0,0
		// this guy starts at 1,1

		const x = obj.x - 1;
		const y = obj.y - 1;

		//point
		grid[y][x] = 1;
		await mapTemperature.set(`${x}-${y}`, obj.temp);

		//down
		if (y > 0) {
			grid[y - 1][x] = 1;
			await mapTemperature.set(`${x}-${y - 1}`, obj.temp);
		}

		//up
		if (y < 14) {
			grid[y + 1][x] = 1;
			await mapTemperature.set(`${x}-${y + 1}`, obj.temp);
		}

		//left
		if (x > 0) {
			grid[y][x - 1] = 1;
			await mapTemperature.set(`${x - 1 }-${y}`, obj.temp);
		}

		//right
		if (x < 32) {
			grid[y][x + 1] = 1;
			await mapTemperature.set(`${x + 1 }-${y}`, obj.temp);
		}

		// top left corner
		if (x > 0 && y > 0) {
			grid[y - 1][x - 1] = 1;
			await mapTemperature.set(`${x - 1 }-${y - 1}`, obj.temp);
		}

		// top right corner
		if (x < 32 && y > 0) {
			grid[y - 1][x + 1] = 1;
			await mapTemperature.set(`${x + 1 }-${y - 1}`, obj.temp);
		}

		// bottom left corner
		if (x > 0 && y < 32) {
			grid[y + 1][x - 1] = 1;
			await mapTemperature.set(`${x - 1 }-${y + 1}`, obj.temp);
		}

		// bottom right corner
		if (x < 32 && y < 32) {
			grid[y + 1][x + 1] = 1;
			await mapTemperature.set(`${x + 1 }-${y + 1}`, obj.temp);
		}
	}
	return grid;
};

const HeatmapGrid = ({data}) => {
	const [grid, setGrid] = useState(null);

	if (!data) return <div>Loading...</div>;

	useEffect(async () => {
		const grid = await generateGrid(rows, cols, data);

		setGrid(grid);

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

			// const leftPoint = {
			// 	x: (element.x - 0.3) * 40 - 20,
			// 	y: element.y * 40 - 20,
			// 	value: element.temp,
			// };

			// const rightPoint = {
			// 	x: (element.x + 0.3) * 40 - 20,
			// 	y: element.y * 40 - 20,
			// 	value: element.temp,
			// };

			// const upPoint = {
			// 	x: element.x * 40 - 20,
			// 	y: (element.y + 0.3) * 40 - 20,
			// 	value: element.temp,
			// };

			// const downPoint = {
			// 	x: element.x * 40 - 20,
			// 	y: (element.y - 0.3) * 40 - 20,
			// 	value: element.temp,
			// };

			points.push(point);
			// points.push(leftPoint);
			// // points.push(rightPoint);
			// // points.push(upPoint);
			// points.push(downPoint);

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

	const getStyle = (value, x , y) => {
		x--;
		y--;
		if (value == 1) {
			//heatMapColorforValue(mapTemperature.get(`${Math.round(x + 1)}-${Math.round(y + 1)}`))
			return  {
				background: heatMapColorforValue(mapTemperature.get(`${x + 1}-${y + 1}`)),
				/* border: solid 2px purple; */
				width: '40px',
				height: '40px',
				borderRadius: '0%',
			};
		}

		return {
			backgroundColor: undefined,
			/* border: solid 2px purple; */
			width: '40px',
			height: '40px',
		};
	};

	if (!grid) return <div>Loading...</div>;
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
			<div className='gridContainer'>
				<div className='.heatmap-container'>
					<div
						className='gridboardGrid'
						style={{
							display: 'grid',
							gridTemplateColumns: `repeat(${cols}, 40px`,
							margin: '0vh',
						}}>
						{grid.map((rows, y) => rows.map((col, x) => <div
							key={`${y}-${x}`}
							style={getStyle(grid[y][x], x, y)}
							// style={getColor(grid[y][x])}
						></div>))}
					</div>
					<img src={iotSvg} className="floor3Grid"/>
				</div>
			</div>
		</div>
	);
};
export default HeatmapGrid;
