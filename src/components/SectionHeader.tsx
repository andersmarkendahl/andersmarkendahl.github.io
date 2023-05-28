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
  <div css={{ marginBottom: '8px', maxWidth: '200px' }}>
    <Typography variant="h4">
      {title}
    </Typography>
    <Divider sx={{ width: '100%', borderBottomWidth: 4 }} orientation="horizontal" />
  </div>
);
