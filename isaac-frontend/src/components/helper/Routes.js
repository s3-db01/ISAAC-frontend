import React, {
//	useState,
	useEffect} from 'react';


import Dashboard from '../Dashboard';
import HeatmapGrid from '../HeatmapGrid';
import Notifications from '../Notifications';
import Advanced from '../Advanced';
import Settings from '../Settings';
import {serverFetch} from '../../utils/server-fetch';

import {
	Switch,
	Route,
} from 'react-router-dom';

const Routes = () => {
	const [data, setData] = React.useState(null);
	useEffect( async () => {
		try {
			const rawData = await serverFetch();
			setData(
				await rawData.map((obj) => {
					obj.dateTime = new Date(obj.dateTime);
					return obj;
				}));
		}
		catch (error) {
			console.log(error);
		}
	}, []);

	// if (!data) return <div>Loading...</div>;

	return (
		<Switch>
			<Route path="/heatmap">
				<HeatmapGrid data={data}/>
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
