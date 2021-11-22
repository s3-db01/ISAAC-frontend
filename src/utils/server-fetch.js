import axios from 'axios';

export const serverFetch = async () => {
	try {
		const response = await axios.get('http://localhost:5000/entries');
		return  response.data;
	}
	catch(error) {
		return error.message;
	}
};
