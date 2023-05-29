import {
  createTheme,
  ThemeOptions,
} from '@mui/material';

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#ece5d3',
    },
    secondary: {
      main: '#b9b09f',
    },
    background: {
      default: '#030300',
    },
    text: {
      primary: '#ece5d3',
    },
    divider: '#56564c',
    action: {
      hover: '#b9b09f',
      hoverOpacity: 0.3,
      disabled: '#56564c',
    },
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: '#ece5d3',
          fontSize: '1em',
        },
      },
    },
  },
};

export const Theme = createTheme(themeOptions);
