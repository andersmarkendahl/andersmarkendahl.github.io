/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <div
      css={{
        position: 'fixed',
      }}
    >
      <Footer />
    </div>
  );
}