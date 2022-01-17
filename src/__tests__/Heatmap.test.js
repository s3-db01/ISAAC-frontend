import axios from 'axios';
import Heatmap from '../components/Heatmap';
import React from 'react';
import { shallow, render, mount, configure } from 'enzyme';
import '../index.css';

jest.mock('axios');

// mock axios.get data
const data = [
	{
		'id': 1,
		'x': 4,
		'y': 3,
		'temperature': 23.6,
		'humidity': 45,
		'dateTime' : 'January 11, 2022 08:00:00'
	}
];


describe('integration tests for heatmap', () => {
	// after each test is run you clear modules and mocks
	afterEach(() => {
		jest.resetModules();
		jest.clearAllMocks();
	});

	it.skip('render without crash', async () => {
		// rendering the Heatmap
		// render(<Heatmap data={data}/>);
		const wrapper = mount(<Heatmap data={data}/>);
        
	});
});