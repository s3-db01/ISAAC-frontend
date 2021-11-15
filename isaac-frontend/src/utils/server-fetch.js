export const serverFetch = async () => {
	try {
		const res = await fetch('http://localhost:5000/entries');
		return await res.json();
	} catch (error) {
		return error;
	}
};
