/*eslint no-mixed-spaces-and-tabs: "error"*/

import {serverFetch} from '../utils/server-fetch';
import axios from 'axios';


jest.mock('axios');

// axios.get = jest.fn(() =>
// 	Promise.resolve({
// 		json: () => Promise.resolve({
// 			entries: [
// 				{
// 					'id': 1,
// 					'temp': 25.0,
// 					'humidity': 45,
// 					'dateTime': 'October 11, 2021 08:00:00',
// 				},
// 				{
// 					'id': 2,
// 					'temp': 26.1,
// 					'humidity': 45,
// 					'dateTime': 'October 11, 2021 08:10:00',
// 				},
// 				{
// 					'id': 3,
// 					'temp': 25.9,
// 					'humidity': 45,
// 					'dateTime': 'October 11, 2021 08:20:00',
// 				},
// 				{
// 					'id': 4,
// 					'temp': 26,
// 					'humidity': 48,
// 					'dateTime': 'October 11, 2021 08:30:00',
// 				},
// 			]}),
// 	}),
// );


// const entries = [	// mock return value
// 	{
// 		'id': 1,
// 		'temp': 25.0,
// 		'humidity': 45,
// 		'dateTime': 'October 11, 2021 08:00:00',
// 	},
// 	{
// 		'id': 2,
// 		'temp': 26.1,
// 		'humidity': 45,
// 		'dateTime': 'October 11, 2021 08:10:00',
// 	},
// 	{
// 		'id': 3,
// 		'temp': 25.9,
// 		'humidity': 45,
// 		'dateTime': 'October 11, 2021 08:20:00',
// 	},
// 	{
// 		'id': 4,
// 		'temp': 26,
// 		'humidity': 48,
// 		'dateTime': 'October 11, 2021 08:30:00',
// 	},
// ];


describe('server fetching tests', () => {
	afterEach(() => {
		jest.resetModules();
	});

	it('should return data', async () => {

		// mocking the function axios.get
		axios.get.mockImplementation(() =>
			Promise.resolve({
				entries:[	// mock return value
					{
						'id': 1,
						'temp': 25.0,
						'humidity': 45,
						'dateTime': 'October 11, 2021 08:00:00',
					},
					{
						'id': 2,
						'temp': 26.1,
						'humidity': 45,
						'dateTime': 'October 11, 2021 08:10:00',
					},
					{
						'id': 3,
						'temp': 25.9,
						'humidity': 45,
						'dateTime': 'October 11, 2021 08:20:00',
					},
					{
						'id': 4,
						'temp': 26,
						'humidity': 48,
						'dateTime': 'October 11, 2021 08:30:00',
					},
				]
			}),
		);



		// calling the function to be tested
		const rawData = await serverFetch();
		console.log(rawData);
		//expect statements
		// console.log(rawData);
		// expect(rawData).toEqual(entries);
		// expect(axios.get).toHaveBeenCalledTimes(1);
	});


// 	// it('exception handling', async () => {
// 	// 	axios.get.mockReturnValueOnce(() =>
// 	// 		Promise.reject(Error('Failed to fetch'))
// 	// 		// Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
// 	// 		// 	setTimeout(() => {
// 	// 		// 		reject('Failed to fetch');
// 	// 		// 	}, 10);
// 	// 		// })
// 	// 	);



// 	// 	const rawData = await serverFetch();
// 	// 	console.log(rawData.message);


// 	// 	// expect(rawData.message).toEqual('Failed to fetch');
// 	// 	// expect(fetch).toHaveBeenCalledTimes(1);
// 	// });
// });
