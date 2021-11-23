import React from 'react';
import Gauge from '../components/Gauge';
import { shallow, render, mount, configure } from 'enzyme';
import toJSON from 'enzyme-to-json';
import {act} from 'react-dom/test-utils';
const data = [
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
];

test('adds state to the component', () => {
	let myComponent;
	let instance;
	act(() => {
		myComponent = mount(<Gauge name='Temperature' data={data} />);
		myComponent.setState({...data});
		instance = myComponent.instance();
	});
	expect(instance.state).toEqual(data);
});

// test('should render Gauge correctly', () => {
// 	const realUseState = React.useState;

// 	const stubInitialState = data;
// 	jest
// 		.spyOn(React, 'useState')
// 		.mockImplementationOnce(() => realUseState(stubInitialState));
// 	const tree = mount(<Gauge name='Temperature' data={data}/>);
// 	expect(toJSON(tree)).toMatchSnapshot();
// });
