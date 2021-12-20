import React, {useState} from 'react';
import {FormControl, InputLabel, Select, MenuItem} from '@mui/material';

const FloorSelector = () => {
	const [floor, setFloor] = useState(3);

	const handleChange = (event) => {
		setFloor(event.target.value);
	};

	return(
		<div> 
			<FormControl sx={{ m: 1, minWidth: 80}}>
				<InputLabel id="demo-simple-select-label">Floor</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={floor}
					label="Floor"
					onChange={handleChange}
				>
					<MenuItem value={3}>3</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
};

export default FloorSelector;