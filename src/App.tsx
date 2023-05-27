/** @jsx jsx */
import { jsx } from '@emotion/react';
import Stack from '@mui/material/Stack';
import { Footer } from './sections/Footer';
import { Contact } from './sections/Contact';
import { Server } from './sections/Server';
import { Github } from './sections/Github';
import { Skills } from './sections/Skills';

export const App = () => (
  <div css={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  }}
  >
    <Stack spacing={8}>
      <Skills />
      <Github />
      <Server />
      <Contact />
      <Footer />
    </Stack>
  </div>
);
