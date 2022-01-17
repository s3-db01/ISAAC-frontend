/**
 * @jest-environment jsdom
 */
//the command above sets the virtual test environment as jsdom

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import Routes from '../../../components/helper/Routes';

import Dashboard from '../../../components/Dashboard';
import Heatmap from '../../../components/Heatmap';
import Notifications from '../../../components/Notifications';
import Advanced from '../../../components/Advanced/Advanced';
import Settings from '../../../components/Settings';

jest.mock('');

test.skip('rendering the routes', () => {
	// mounting the component inside the wrapper
	// providing initial entry as '/settings' replicates the user accessing /settings route*
	const wrapper = mount(
		<MemoryRouter initialEntries={[ '/notification' ]}> 
			<Routes/>
		</MemoryRouter>
	);
	
	// exepct statements
	expect(wrapper.find(Dashboard)).toHaveLength(0);
	expect(wrapper.find(Heatmap)).toHaveLength(0);
	expect(wrapper.find(Notifications)).toHaveLength(1);
	expect(wrapper.find(Advanced)).toHaveLength(0);
	// this is the only component expected to be rendered
	expect(wrapper.find(Settings)).toHaveLength(0); 
	
});