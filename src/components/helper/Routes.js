import React, { useEffect } from 'react';


import Dashboard from '../Dashboard';
import Heatmap from '../Heatmap';
import Notifications from '../Notifications';
import Advanced from '../Advanced/Advanced';
import Settings from '../Settings';

import { serverFetchWithFiltering } from '../../utils/server-fetch';
import { iotFilterHandler } from '../../services/iotFilterService';

import {serverFetch} from '../../utils/server-fetch';
import Logout from '../Logout';
import Profile from '../Profile';
import {
	Switch,
	Route,
} from 'react-router-dom';


const Routes = () => {
	const [data, setData] = React.useState([]);
	const [iotFilter, setIotFilter] = React.useState(new Set());

	useEffect( async () => {
		try {
			const rawData = await serverFetchWithFiltering(iotFilter, setIotFilter);
			setData(rawData);
		}
		catch (error) {
			console.error(error);
		}
	}, [iotFilter]);

	return (
		<Switch>
			<Route path="/heatmap">
				<Heatmap data={data}/>
			</Route>
			<Route path='/notifications'>
				<Notifications />
			</Route>
			<Route path='/advanced'>
				<Advanced data={data} iotFilterHandler={(iot) => iotFilterHandler(iot, iotFilter, setIotFilter)}/>
			</Route>
			<Route path='/settings'>
				<Profile />
			</Route>
			<Route path='/'>
				<Dashboard data={data}/>
			</Route>
		</Switch>
	);
};

export default Routes;
