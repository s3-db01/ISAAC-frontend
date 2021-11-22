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
import Advanced from '../../../components/Advanced';
import Settings from '../../../components/Settings';

jest.mock('');

test('rendering the routes', () => {
	// mounting the component inside the wrapper
	// providing initial entry as '/asd' replicates the user accessing /asd route*
	const wrapper = mount(
		<MemoryRouter initialEntries={[ '/asd' ]}> 
			<Routes/>
		</MemoryRouter>
	);
	
	// exepct statements
	// this is the only component expected to be rendered, since asd is unknown
	// the user will be redirected to Dashboard
	expect(wrapper.find(Dashboard)).toHaveLength(1);
	expect(wrapper.find(Heatmap)).toHaveLength(0);
	expect(wrapper.find(Notifications)).toHaveLength(0);
	expect(wrapper.find(Advanced)).toHaveLength(0);
	expect(wrapper.find(Settings)).toHaveLength(0); 
	
});