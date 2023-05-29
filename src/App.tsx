/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  CssBaseline,
  Stack,
  Typography,
  createTheme,
  ThemeProvider,
  ThemeOptions,
} from '@mui/material';

import { Navigation } from './components/Navigation';
import { Footer } from './sections/Footer';
import { Contact } from './sections/Contact';
import { Server } from './sections/Server';
import { Github } from './sections/Github';
import { Skills } from './sections/Skills';
import { Myself } from './sections/Myself';

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

const theme = createTheme(themeOptions);

export const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <div css={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      margin: '32px',
    }}
    >
      <Stack spacing={8}>
        <div id="home" css={{ margin: '16px' }}>
          <Typography variant="h2" align="center">Anders Markendahl</Typography>
        </div>
        <Myself id="about" />
        <Skills id="skills" />
        <Github id="projects" />
        <Server id="server" />
        <Contact id="contact" />
        <div css={{ paddingBottom: '32px' }}>
          <Footer />
        </div>
      </Stack>
    </div>
    <Navigation />

  </ThemeProvider>
);
