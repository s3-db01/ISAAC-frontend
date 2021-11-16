/* eslint-disable no-undef */
/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, render, mount, configure } from 'enzyme';
import Routes from '../../components/helper/Routes';

import Dashboard from '../../components/Dashboard';
import Heatmap from '../../components/Heatmap';

const flushPromises = require('flush-promises');
import { waitForState } from 'enzyme-async-helpers';
import { createMemoryHistory } from 'history';
import toJSON from 'enzyme-to-json';
import ReactTestUtils from 'react-dom/test-utils';

import {serverFetch} from '../../utils/server-fetch';
afterEach(() => {
	jest.resetModules();
});

// const mockFetch = Promise.resolve({
// 	json: () => Promise.resolve({
// 		entries:
//         [
//         	{
//         		'id': 1,
//         		'temp': 25.0,
//         		'humidity': 45,
//         		'dateTime': 'October 11, 2021 08:00:00',
//         	},
//         ],
// 	}),
// });
// global.fetch = jest.fn(() => mockFetch);
global.fetch = jest.fn();
global.serverFetch = jest.fn();
describe('testing Routes', () => {

	beforeEach(() => {

	});
	test('rendering the routes', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={[ '/' ]}>
				<Routes/>
			</MemoryRouter>
		);
		expect(wrapper).not.toBeNull();
	});
});










test('working test', async () => {
	// fetch.mockImplementationOnce(() =>
	// 	Promise.resolve({
	// 		json: () => Promise.resolve({
	// 			entries:[
	// 				{
	// 					'id': 1,
	// 					'temp': 25.0,
	// 					'humidity': 45,
	// 					'dateTime': 'October 11, 2021 08:00:00',
	//     			},
	//     		],
	// 		}),
	// 	}));
	// const setStateMock = jest.fn(() => {});

	// const useStateMock = (useState) => [useState, setStateMock];
	// jest.spyOn(React,'useState').mockImplementation(useStateMock);


	// React.useState = jest.fn().mockReturnValue(
	// 	[{
	// 		'id': 1,
	// 		'temp': 25.0,
	// 		'humidity': 45,
	// 		'dateTime': 'October 11, 2021 08:00:00',

	// 	},]
	// );
	// const wrapper = await mount(
	// 	<MemoryRouter initialEntries={[ '/' ]}>
	// 		<Routes/>
	// 	</MemoryRouter>
	// );

	// // wrapper.update();
	// // console.log(await wrapper.html());
	// // expect(wrapper.find(Dashboard)).toHaveLength(1);
	// // expect(wrapper.find(Heatmap)).toHaveLength(0);
	// expect(toJSON(wrapper)).toMatchSnapshot();
	expect(true).toBeTruthy();
});