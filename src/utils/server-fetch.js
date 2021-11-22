import axios from 'axios';

export const serverFetch = async () => {
	try {
		const response = await axios.get('http://localhost:5000/entries');

		console.log(response.data);
		return  response.data;
	}
	catch(error) {
		console.log(error);
	}
};
