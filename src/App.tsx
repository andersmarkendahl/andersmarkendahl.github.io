/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Footer } from './components/Footer';

export const App = () => (
  <div>
    <div css={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        overflow: 'hidden',
        marginBottom: '16px'
      }}>
      <Footer />
    </div>
  </div>
);
