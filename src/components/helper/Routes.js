import React, {
//	useState,
	useEffect} from 'react';


import Dashboard from '../Dashboard';
import HeatmapGrid from '../HeatmapGrid';
import Heatmap from '../Heatmap';
import Notifications from '../Notifications';
import Advanced from '../Advanced';
import Settings from '../Settings';
import {serverFetch} from '../../utils/server-fetch';
import Loading from '../Loading';

import {
	Switch,
	Route,
} from 'react-router-dom';

const Routes = () => {
	const [data, setData] = React.useState([]);
	useEffect( async () => {
		try {
			const rawData = await serverFetch();

			setData(
				rawData.map((obj) => {
					obj.dateTime = new Date(obj.dateTime);
					return obj;
				}));
		}
		catch (error) {
			console.log(error);
		}
	}, []);


	return (
		<Switch>
			<Route path="/heatmap">
				<Heatmap data={data}/>
			</Route>
			<Route path='/notifications'>
				<Notifications />
			</Route>
			<Route path='/advanced'>
				<Advanced />
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
