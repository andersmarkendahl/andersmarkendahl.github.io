import { createTheme, ThemeOptions } from '@mui/material'

declare module '@mui/material/styles' {
  interface TypeBackground {
    navbar: string // Add custom navbar background color
  }
}

const primaryThemeOptions: ThemeOptions = {
  palette: {
    primary: { main: '#85586F' },
    secondary: { main: '#D8B4A0' },
    background: {
      default: '#CDB6A8',
      paper: '#CDB6A8',
      navbar: '#5E3A4A',
    },
    text: { primary: '#3E3232', secondary: '#5A4E4E' },
    divider: '#B89B9B',
    action: {
      hover: '#A3788D',
      hoverOpacity: 0.3,
      disabled: '#A38C87',
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
          backgroundColor: '#B89B9B', // Same as divider, soft neutral
          color: '#3E3232', // Same as text.primary
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
