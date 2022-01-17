import React, { Component } from 'react';
import Keycloak from 'keycloak-js';
import UserInfo from './UserInfo';
import Logout from './Logout';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {createTheme} from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const generalStyle = {
	marginLeft: `${drawerWidth}px`,
	marginRight: 'auto',
};
const bodyStyle = {
	marginLeft: '260px',
	marginRight: 'auto',
};
const notificationStyle = {
	width: `calc(100% - ${drawerWidth}px)`,
	height: 100,
};

const fontTheme = createTheme({
	typography: {
		fontFamily: 'Rockwell',
	},
});
class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = { keycloak: null, authenticated: false };

	}

	componentDidMount() {
		const keycloak = Keycloak('/keycloak.json');
		keycloak.init({onLoad: 'login-required'}).then(authenticated => {
			this.setState({ keycloak: keycloak, authenticated: authenticated });
		});
	}

	render() {

		if(this.state.keycloak) {
			if(this.state.authenticated) return [
				<div style={generalStyle} key='header'>
					<AppBar
						position='fixed'
						sx={{width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`}}
						color="primary"
						style={notificationStyle}
					>
						<Toolbar sx={{paddingTop: '2%'}}>
							<Typography variant='h4' noWrap component='div' theme={fontTheme}>
								Settings
							</Typography>
						</Toolbar>
					</AppBar>
				</div>,
				<div style={bodyStyle} key='footer'>
					<Logout keycloak={this.state.keycloak} />
				</div>,
				<div style={bodyStyle} key='body'>
					<UserInfo keycloak={this.state.keycloak} />
				</div>
			];
			else return (<div>Unable to authenticate!</div>);
		}
		return (
			<div>Initializing Keycloak...</div>
		);
	}
}
export default Profile;