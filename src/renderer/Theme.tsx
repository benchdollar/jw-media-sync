import { createTheme } from '@mui/material/styles';
import teal from '@mui/material/colors/teal';

export default createTheme({
  palette: {
    // type: 'light',
    primary: {
      main: teal[500],
    },
    secondary: {
      main: '#b0bec5',
    },
    mode: 'dark',
    background: {
      default: '#303030',
      paper: '#424242',
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        // disableRipple: true,
        //
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            backgroundColor: '#777777',
          },
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        enableColorOnDark: true,
        position: 'fixed',
      },
    },
  },
});
