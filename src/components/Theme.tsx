import { createTheme, ThemeOptions, responsiveFontSizes } from '@mui/material'

declare module '@mui/material/styles' {
  interface TypeBackground {
    navbar: string // Add custom navbar background color
  }
}

const themeOptions: ThemeOptions = {
  typography: {
    fontSize: 16,
    h1: {
      fontSize: '3rem',
      '@media (max-width:600px)': { fontSize: '2.5rem' },
    },
    h2: {
      fontSize: '2.5rem',
      '@media (max-width:600px)': { fontSize: '2rem' },
    },
    h3: {
      fontSize: '2rem',
      '@media (max-width:600px)': { fontSize: '1.75rem' },
    },
    body1: {
      fontSize: '1.125rem', // Slightly larger body text
      '@media (max-width:600px)': { fontSize: '1rem' },
    },
    body2: {
      fontSize: '1rem',
      '@media (max-width:600px)': { fontSize: '0.9rem' },
    },
  },
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
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: '#ece5d3',
          fontSize: '1.5rem',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        standardWarning: {
          backgroundColor: '#B89B9B', // Same as divider, soft neutral
          color: '#3E3232', // Same as text.primary
        },
      },
    },
  },
}

export const theme = responsiveFontSizes(createTheme(themeOptions))
