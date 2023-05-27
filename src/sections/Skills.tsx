/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  Typography,
} from '@mui/material';
import { SectionHeader } from '../components/SectionHeader';

export const Skills = () => (
  <div>
    <SectionHeader title="My Skills" />
    <Typography variant="body1">
      A list of skills and topics that I have learned during my time in software development
    </Typography>
  </div>
);
