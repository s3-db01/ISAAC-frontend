import {createTheme} from '@material-ui/core/styles';
const drawerWidth = 240;

const generalStyle = {
	marginLeft: `${drawerWidth}px`,
	marginRight: 'auto',
};

const dashBoardStyle = {
	width: `calc(100% - ${drawerWidth}px)`,
	height: 100,
};

const content = {
	marginLeft: '10%',
	marginRight: '10%',
};
const fontTheme = createTheme({
	typography: {
		fontFamily: 'Rockwell',
	},
});

export default {
	generalStyle,
	dashBoardStyle,
	content,
	fontTheme
};