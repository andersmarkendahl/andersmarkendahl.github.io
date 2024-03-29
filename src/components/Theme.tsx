import { createTheme, ThemeOptions } from '@mui/material'

const primaryThemeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#ece5d3',
    },
    secondary: {
      main: '#b9b09f',
    },
    background: {
      default: '#030300',
      paper: '#1f1f1e',
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
    },
    h1: {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '2.2rem',
    },
    h3: {
      fontSize: '1.7rem',
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

// Secondary theme inherits all settings and then overrides specifics
const secondaryThemeOptions: ThemeOptions = {
  ...primaryThemeOptions,

  palette: {
    ...primaryThemeOptions.palette,

    primary: {
      main: '#dbc8da',
    },
    secondary: {
      main: '#665866',
    },
    background: {
      default: '#000000',
      paper: '#1a0014',
    },
    text: {
      primary: '#dbc8da',
    },
    divider: '#443d45',
    action: {
      hover: '#665866',
      hoverOpacity: 0.3,
      disabled: '#443d45',
    },
  },
  typography: {
    ...primaryThemeOptions.typography,
    fontFamily: `"Baskerville", "Cambria", "Times New Roman", "Georgia"`,
    fontWeightRegular: 'bold',
  },
  components: {
    ...primaryThemeOptions.components,

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: '#dbc8da',
        },
      },
    },
  },
}

export const primaryTheme = createTheme(primaryThemeOptions)
export const secondaryTheme = createTheme(secondaryThemeOptions)
