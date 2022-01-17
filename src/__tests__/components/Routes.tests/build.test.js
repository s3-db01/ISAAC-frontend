/**
 * @jest-environment jsdom
 */
//the command above sets the virtual test environment as jsdom
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import Routes from '../../../components/helper/Routes';

test('rendering the routes', () => {
	const wrapper = mount(
		<MemoryRouter initialEntries={[ '/' ]}>
			<Routes/>
		</MemoryRouter>
	);
	expect(wrapper).not.toBeNull();
});