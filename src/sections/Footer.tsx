/** @jsx jsx */
import { jsx } from '@emotion/react';
import Typography from '@mui/material/Typography';

export const Footer = () => {
  const description = 'Built with React 18 on typescript, Material UI and powered by Gatsby';
  return (
    <Typography align="center" variant="body1">
      {description}
    </Typography>
  );
};
