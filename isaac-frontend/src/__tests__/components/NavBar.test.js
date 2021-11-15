import React from 'react';
import NavBar from '../../components/NavBar';
import { shallow, render, mount, configure } from 'enzyme';
import toJSON from 'enzyme-to-json';

test('should render NavBar without crashing', () => {
	shallow(<NavBar />);
});

test('should render NavBar correctly', () => {
	const tree = shallow(<NavBar />);
	expect(toJSON(tree)).toMatchSnapshot();
});


