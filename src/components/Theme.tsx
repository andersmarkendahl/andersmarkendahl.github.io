import { ThemeOptions } from '@mui/material'

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#ece5d3',
    },
    secondary: {
      main: '#b9b09f',
    },
    background: {
      default: '#030300',
      paper: '#56564c',
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
  typography: {
    body1: {
      fontSize: '1.5rem',
      '@media (max-width:600px)': {
        fontSize: '1.0rem', // Font size for screens <= 600px width
      },
    },
    h1: {
      fontSize: '3rem',
      '@media (max-width:600px)': {
        fontSize: '1.5em', // Font size for screens <= 600px width
      },
    },
    h2: {
      fontSize: '2.2rem',
      '@media (max-width:600px)': {
        fontSize: '1.5rem', // Font size for screens <= 600px width
      },
    },
    h3: {
      fontSize: '1.7rem',
      '@media (max-width:600px)': {
        fontSize: '1.5rem', // Font size for screens <= 600px width
      },
    },
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: '#ece5d3',
          fontSize: '1.5rem',
        },
      },
    },
    MuiImageListItemBar: {
      styleOverrides: {
        title: {
          fontSize: '1.3em',
          lineHeight: '1.3',
        },
        subtitle: {
          fontSize: '1.1em',
          lineHeight: '1.1',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        text: {
          fontSize: '1.3rem',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        standardWarning: {
          fontSize: '1.3rem',
        },
      },
    },
  },
}
