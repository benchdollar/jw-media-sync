import { createTheme, ThemeOptions } from '@mui/system';

const themeOptions: ThemeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#00796b',
    },
    secondary: {
      main: '#b0bec5',
    },
  },
  //   props: {
  //     MuiButtonBase: {
  //       disableRipple: true,
  //     },
  //   },
};

export default createTheme(themeOptions);
