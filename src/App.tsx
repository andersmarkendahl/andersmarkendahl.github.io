/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Footer } from './sections/Footer';
import { Contact } from './sections/Contact';

export const App = () => (
  <div css={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  }}
  >
    <div>
      <Contact />
    </div>
    <div css={{
      position: 'absolute',
      bottom: 0,
      width: '100%',
      marginBottom: '16px',
    }}
    >
      <Footer />
    </div>
  </div>
);
