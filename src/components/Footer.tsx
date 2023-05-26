/** @jsx jsx */
import { jsx } from '@emotion/react';
import Typography from '@mui/material/Typography';

export const Footer = () => {
  const description = 'Credit where credit is due, powered by w3.css';
  return (
    <Typography align="center" variant="body1">
      {description}
    </Typography>
  );
};
