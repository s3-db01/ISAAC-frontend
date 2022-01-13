import React, { Component } from 'react';
import FormControl from '@mui/material/FormControl';
import {Input} from '@mui/material';
import {InputLabel} from '@material-ui/core';
import Button from '@mui/material/Button';

const btnStyle = {
	fontFamily: 'Open Sans',
	textTransform: 'none',
	fontWeight: 'bold',
	marginTop: 10,
	radius: 0.1,
	borderRadius: 10
};
class UserInfo extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			id: '',
			preftemp: ''
		};
		this.getUserPrefTemp();
		this.props.keycloak.loadUserInfo().then(userInfo => {
			this.setState({name: userInfo.name, email: userInfo.email, id: userInfo.sub, preftemp: localStorage.getItem('preftemp')});
			localStorage.setItem('userId', userInfo.sub);
		});
		console.log(localStorage.getItem('preftemp'), 'constructor' );

	}

	handleSubmit() {
		fetch('http://localhost:3001/api/' + localStorage.getItem('userId') + '/favorites/temp/' + this.state.preftemp, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(response => {
			if (response.status >= 200 && response.status < 300) {
				localStorage.setItem('preftemp', response.data.preftemp);
				console.log(localStorage.getItem('preftemp'), 'handelsubmit' );
			} else {
				console.log('Somthing happened wrong');
			}
		}).catch(err => err);

		this.getUserPrefTemp();
	}


	getUserPrefTemp(){
		fetch('http://localhost:3001/api/'+localStorage.getItem('userId') +'/favorites/temp', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(response => {
			if (response.status >= 200 && response.status < 300) {
				response.json().then(
					data =>
						localStorage.setItem('preftemp', data.preftemp )
				);
				console.log(localStorage.getItem('preftemp'), 'getTemp' );
			} else {
				console.log('Somthing happened wrong');
			}
		}).catch(err => err);
	}

	handleInputChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	render() {
		const onSubmit = (e) => {
			e.preventDefault();
			console.log('refresh prevented');
		};

		return (
			<div className="UserInfo">
				<form onSubmit={this.handleSubmit.bind(this)}>
					<FormControl>
						<InputLabel htmlFor="email">Email</InputLabel><br/>
						<Input type="text" id="email" name="email" value={this.state.email}/><br/>
						<InputLabel htmlFor="preftemp">Preferd Temperature</InputLabel><br/>
						<Input type="text" id="preftemp" name="preftemp" value={this.state.preftemp} onChange={this.handleInputChange.bind(this)}/><br/>
						<Button
							variant="contained"
							color='primary'
							type='submit'
							value='submit'
							style={btnStyle}>Switch
						</Button>
					</FormControl>

				</form>
			</div>
			

		);
	}
}
export default UserInfo;