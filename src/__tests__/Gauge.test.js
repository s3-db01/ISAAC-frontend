import React from 'react';
import Gauge from '../components/Gauge';
import { shallow, render, mount, configure } from 'enzyme';
import toJSON from 'enzyme-to-json';

const data = {

};

test('should render NavBar without crashing', () => {
	shallow(<Gauge />);
});

test('should render NavBar correctly', () => {
	const tree = shallow(<Gauge name='Temperature' data={data}/>);
	expect(toJSON(tree)).toMatchSnapshot();
});
