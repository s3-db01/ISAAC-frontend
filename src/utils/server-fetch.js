/* eslint-disable no-mixed-spaces-and-tabs */
// import axios from 'axios';

const loadIotLocalFilters = (data, iotFilter, setIotFilter) => {
	const newIotFilter = iotFilter;
	for (let i = 0; i < data.length; i++) {
		const currentValue = data[i];
		if (localStorage.getItem(`${currentValue.x}-${currentValue.y}`)) {
			newIotFilter.add(`${currentValue.x}-${currentValue.y}`);
		}
	}
	setIotFilter(iotFilter);
};

export const serverFetch = async (iotFilter, setIotFilter) => {
	console.log(iotFilter);
	const data = [
		{
		  'id': 1,
		  'x': 4,
		  'y': 3,
		  'temp': 23.6,
		  'humidity': 45,
		  'dateTime' : 'December 20, 2021 08:00:00'
		  
		},
		{
		  'id': 2,
		  'x': 3,
		  'y': 8,
		  'temp': 22,
		  'humidity': 47,
		  'dateTime' : 'December 20, 2021 08:00:00'
		},
		{
		  'id': 3,
		  'x': 3,
		  'y': 12,
		  'temp': 24,
		  'humidity': 50,
		  'dateTime' : 'December 20, 2021 08:00:00'
		},
		{
		  'id': 4,
		  'x': 11,
		  'y': 4,
		  'temp': 25,
		  'humidity': 40,
		  'dateTime' : 'December 21, 2021 08:00:00'
		},
		{
		  'id': 5,
		  'x': 11,
		  'y': 6,
		  'temp': 25.3,
		  'humidity': 45,
		  'dateTime' : 'December 21, 2021 08:00:00'
		},
		
	  
	  
		{
		  'id': 6,
		  'x': 4,
		  'y': 3,
		  'temp': 23.7,
		  'humidity': 43,
		  'dateTime' : 'December 21, 2021 08:05:00'
		  
		},
		{
		  'id': 7,
		  'x': 3,
		  'y': 8,
		  'temp': 22.5,
		  'humidity': 45,
		  'dateTime' : 'December 22, 2021 08:05:00'
		},
		{
		  'id': 8,
		  'x': 3,
		  'y': 12,
		  'temp': 24.4,
		  'humidity': 47,
		  'dateTime' : 'December 22, 2021 08:05:00'
		},
		{
		  'id': 9,
		  'x': 11,
		  'y': 4,
		  'temp': 27,
		  'humidity': 41,
		  'dateTime' : 'December 22, 2021 08:05:00'
		},
		{
		  'id': 10,
		  'x': 11,
		  'y': 6,
		  'temp': 25.3,
		  'humidity': 45,
		  'dateTime' : 'December 23, 2021 08:05:00'
		},
		{
		  'id': 10,
		  'x': 11,
		  'y': 12,
		  'temp': 25.3,
		  'humidity': 45,
		  'dateTime' : 'December 23, 2021 08:09:00'
		},
	  
	  
		{
		  'id': 11,
		  'x': 4,
		  'y': 3,
		  'temp': 23.4,
		  'humidity': 45,
		  'dateTime' : 'December 23, 2021 08:10:00'
		  
		},
		{
		  'id': 12,
		  'x': 3,
		  'y': 8,
		  'temp': 22.2,
		  'humidity': 47,
		  'dateTime' : 'December 24, 2021 08:10:00'
		},
		{
		  'id': 13,
		  'x': 3,
		  'y': 12,
		  'temp': 23,
		  'humidity': 50,
		  'dateTime' : 'December 24, 2021 08:10:00'
		},
		{
		  'id': 14,
		  'x': 11,
		  'y': 4,
		  'temp': 24.8,
		  'humidity': 42,
		  'dateTime' : 'December 24, 2021 08:10:00'
		},
		{
			'id': 14,
			'x': 11,
			'y': 4,
			'temp': 24.8,
			'humidity': 42,
			'dateTime' : 'November 30, 2021 08:10:00'
		  },
		  {
			'id': 14,
			'x': 11,
			'y': 4,
			'temp': 24.8,
			'humidity': 42,
			'dateTime' : 'November 30, 2021 08:10:00'
		  },
	];
	loadIotLocalFilters(data, iotFilter, setIotFilter);
	return data.filter((obj) => !iotFilter.has(`${obj.x}-${obj.y}`));
};
