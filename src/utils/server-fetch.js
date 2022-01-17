import axios from 'axios';
import { loadIotLocalFilters, getAllAvailableIot } from '../services/serverFetchHelper';
import { handleData } from '../services/serverFetchHelper';
const baseUrl = 'http://localhost:3002';
export const serverFetch = async () => {
	const res = await axios.get('http://localhost:3002/api/sensorlogs/complete');
	// const res = await axios.get('http://localhost:5000/entries');
	return await res.data;
/* eslint-disable no-mixed-spaces-and-tabs */
// import axios from 'axios';
};


export const serverFetchWithFiltering = async (iotFilter, setIotFilter) => {
	// const res = await axios.get('http://localhost:5001/entries');
	const res = await axios.get(baseUrl + '/api/sensorlogs/complete');
	const data = res.data;
	if (!data) return [];
	loadIotLocalFilters(data, iotFilter, setIotFilter);
	const availableData = getAllAvailableIot(data, iotFilter);
	return handleData(availableData);
};

export const getLatestReadings = async () => {
	const res = await axios.get(baseUrl + '/api/sensorlogs/complete');
	return handleData(res.data);
};