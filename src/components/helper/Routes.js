import React, {
//	useState,
	useEffect} from 'react';


import Dashboard from '../Dashboard';
import HeatmapGrid from '../HeatmapGrid';
import Heatmap from '../Heatmap';
import Notifications from '../Notifications';
import Advanced from '../Advanced/Advanced';
import Settings from '../Settings';
import {serverFetch} from '../../utils/server-fetch';

import {
	Switch,
	Route,
} from 'react-router-dom';

const Routes = () => {
	const [data, setData] = React.useState(null);
	const [iotFilter, setIotFilter] = React.useState(new Set());

	useEffect( async () => {
		try {
			const rawData = await serverFetch(iotFilter, setIotFilter);
			setData(
				rawData.map((obj) => {
					obj.dateTime = new Date(obj.dateTime);
					return obj;
					
				}));
		}
		catch (error) {
			console.error(error);
		}
	}, [iotFilter]);

	const iotFilterHandler = (iot) => {
		let valueKey = `${iot.x}-${iot.y}`;
		const newIotFilter = new Set(iotFilter);
		if (iotFilter.has(valueKey) || localStorage.getItem(`${iot.x}-${iot.y}`)) {
			newIotFilter.delete(valueKey);
			localStorage.removeItem(`${iot.x}-${iot.y}`);
		} else {
			newIotFilter.add(`${iot.x}-${iot.y}`);
			localStorage.setItem(`${iot.x}-${iot.y}`, true);
		}
		setIotFilter(newIotFilter);
	};

	return (
		<Switch>
			<Route path="/heatmap">
				<Heatmap data={data}/>
			</Route>
			<Route path='/notifications'>
				<Notifications />
			</Route>
			<Route path='/advanced'>
				<Advanced data={data} iotFilterHandler={(iot) => iotFilterHandler(iot)}/>
			</Route>
			<Route path='/settings'>
				<Settings />
			</Route>
			<Route path='/'>
				<Dashboard data={data}/>
			</Route>
		</Switch>
	);
};

export default Routes;
