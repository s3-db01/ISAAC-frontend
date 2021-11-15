/* eslint-disable no-undef */
/* eslint-disable no-mixed-spaces-and-tabs */
import {serverFetch} from '../utils/server-fetch';

afterEach(() => {
	jest.resetModules();
});

global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve({
			entries:
        [
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
        ],
		}),
	}),
);

describe('server fetching tests', () => {
	it('should return data', async () => {
		const rawData = await serverFetch();

		expect(rawData).toEqual({
			entries: [
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
			],
		});
		expect(fetch).toHaveBeenCalledTimes(1);
	});


	it('exception handling', async () => {
		fetch.mockImplementationOnce(() =>
			Promise.reject(new Error('Failed to fetch')),
		);
		const rawData = await serverFetch();

		expect(rawData.message).toEqual('Failed to fetch');
		expect(fetch).toHaveBeenCalledTimes(1);
	});
});
