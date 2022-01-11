import axios from 'axios';

export const serverFetch = async () => {
	const res = await axios.get('http://localhost:3002/api/sensorlogs/');
	console.log(res.data);
	return await res.data;
};
