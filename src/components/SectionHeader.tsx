/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  Divider,
  Typography,
} from '@mui/material';

interface Props {
  title: string;
}

export const SectionHeader = ({
  title,
}: Props) => (
  <div css={{ marginBottom: '8px' }}>
    <Typography variant="h4">
      {title}
    </Typography>
    <Divider orientation="horizontal" />
  </div>
);
