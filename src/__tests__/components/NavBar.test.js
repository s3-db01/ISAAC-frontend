import React from 'react';
import NavBar from '../../components/NavBar';
import { shallow, render, mount, configure } from 'enzyme';
import toJSON from 'enzyme-to-json';


describe('testing nav bar',() => {
	// after each test is run you clear modules and mocks
	afterEach(() => {
		jest.resetModules();
		jest.clearAllMocks();
	});

	it('should render NavBar without crashing', () => {
		shallow(<NavBar />);
	});
	
	it('should render NavBar correctly', () => {
		const tree = shallow(<NavBar />);
		expect(toJSON(tree)).toMatchSnapshot();
	});
});

