import axios from 'axios';

export const serverFetch = async () => {
	// const res = await axios.get('http://localhost:3002/api/sensorlogs/');
	const res = await axios.get('http://localhost:5000/entries');
	// console.log(res.data);
	return await res.data;
};
