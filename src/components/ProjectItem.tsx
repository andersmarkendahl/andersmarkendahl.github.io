/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  Button,
  Icon,
  Typography,
} from '@mui/material';

export interface Props {
  icon: string;
  title: string;
  description: string;
  link: string;
}

export const ProjectItem = ({
  icon, title, description, link,
}: Props) => (
  <Button sx={{ textAlign: 'left', textTransform: 'none' }} href={link}>
    <div css={{
      padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'left',
    }}
    >
      <Icon sx={{ fontSize: 56 }}>{icon}</Icon>
      <div css={{ display: 'block', paddingLeft: '16px' }}>
        <Typography variant="h5">
          {title}
        </Typography>
        <Typography variant="body1">
          {description}
        </Typography>
      </div>
    </div>
  </Button>
);
