import { shallow, render, mount, configure } from 'enzyme';
import React from  'react';
import App from '../App';

test('should render App without crashing', () => {
	shallow(<App />);
});