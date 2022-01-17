import {createTheme} from '@material-ui/core/styles';

export const drawerWidth = 240;

export const heatmapStyle = {
	width: `calc(100% - ${drawerWidth}px)`,
	height: 100,
};
export const mainContentStyle = {
	marginLeft: {drawerWidth},
};
export const fontTheme = createTheme({
	typography: {
		fontFamily: 'Rockwell',
	},
});

