/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  CssBaseline,
  Stack,
  Typography,
  ThemeProvider,
} from '@mui/material';

import { Theme } from './components/Theme';
import { Navigation } from './components/Navigation';
import { Footer } from './sections/Footer';
import { Contact } from './sections/Contact';
import { Server } from './sections/Server';
import { Github } from './sections/Github';
import { Skills } from './sections/Skills';
import { Myself } from './sections/Myself';

export const App = () => (
  <ThemeProvider theme={Theme}>
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
