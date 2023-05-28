/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  Stack,
  Typography,
} from '@mui/material';
import { Footer } from './sections/Footer';
import { Contact } from './sections/Contact';
import { Server } from './sections/Server';
import { Github } from './sections/Github';
import { Skills } from './sections/Skills';
import { Myself } from './sections/Myself';

export const App = () => (
  <div css={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    color: 'white',
  }}
  >
    <Stack spacing={8}>
      <div css={{ margin: '16px' }}>
        <Typography variant='h2' align='center'>I'm Anders Markendahl</Typography>
      </div>
      <Myself />
      <Skills />
      <Github />
      <Server />
      <Contact />
      <Footer />
    </Stack>
  </div>
);
