export const serverFetch = async () => {
	const res = await fetch('http://localhost:3002/api/sensorlogs/');
	return await res.json();
};
