export const serverFetch = async () => {
	try {
		const res = await fetch('http://localhost:5000/entries')
			.then(res => res.json())
			.then(data => {
				return data;
			});
	} catch (error) {
		return error;
	}
};
