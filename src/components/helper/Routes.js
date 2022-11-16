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
	const [lastEntries, setLastEntries] = React.useState([]);

	useEffect( async () => {
		try {
			const rawData = await serverFetchWithFiltering(iotFilter, setIotFilter);
			
			const entries = [];
			for (let index = rawData.length - 1; index >= rawData.length - 18; index--) {
				entries.push(rawData[index]);
			}
			setLastEntries(entries);

			setData(rawData);
		}
		catch (error) {
			console.error(error);
		}
	}, [iotFilter]);

	return (
		<Switch>
			<Route path="/heatmap">
				<Heatmap data={lastEntries}/>
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
