/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  CssBaseline,
  Stack,
  Typography,
  ThemeProvider,
  createTheme,
} from '@mui/material';

import profileImg from './sections/images/profile.png';
import { themeOptions } from './components/Theme';
import { Navigation } from './components/Navigation';
import { Footer } from './sections/Footer';
import { Contact } from './sections/Contact';
import { Server } from './sections/Server';
import { Github } from './sections/Github';
import { Skills } from './sections/Skills';
import { Myself } from './sections/Myself';

export const App = () => {
  const theme = createTheme(themeOptions);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        margin: '32px',
        marginLeft: 'auto',
        marginRight: 'auto',
        '@media (min-width: 600px)': {
          maxWidth: '600px',
        },
        '@media (min-width: 900px)': {
          maxWidth: '900px',
        },
        '@media (min-width: 1200px)': {
          maxWidth: '1200px',
        },
      }}
      >
        <Stack spacing={8}>
          <div id="home">
            <Typography variant="h1" align="center">Anders Markendahl</Typography>
          </div>
          <div css={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={profileImg} alt="Anders profile" width={300} />
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
};
