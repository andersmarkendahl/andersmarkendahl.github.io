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
    divider: '#b9b09f',
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
      margin: '0 32px',
    }}
    >
      <Stack spacing={8}>
        <div css={{ margin: '16px' }}>
          <Typography variant="h2" align="center">Anders Markendahl</Typography>
        </div>
        <Myself />
        <Skills />
        <Github />
        <Server />
        <Contact />
        <Footer />
      </Stack>
    </div>
  </ThemeProvider>
);
