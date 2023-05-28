/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  Button,
  Typography,
} from '@mui/material';

export interface Props {
  image: string;
  title: string;
  description: string;
  link: string;
  alt: string;
}

export const ProjectItem = ({
  image, title, description, link, alt,
}: Props) => (
  <Button sx={{ textAlign: 'left' }} href={link}>
    <div css={{
      padding: '4px', display: 'flex', alignItems: 'top', justifyContent: 'left',
    }}
    >
      <img alt={alt} src={image} width="80px" />
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
