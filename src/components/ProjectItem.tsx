/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  Button,
  Typography,
} from '@mui/material';

export interface ProjectItemProps {
  image: string;
  title: string;
  description: string;
  link: string;
  alt: string;
}

export const ProjectItem = ({
  image, title, description, link, alt,
}: ProjectItemProps) => (
  <Button sx={{ textAlign: 'left', textTransform: 'none' }} href={link} color="inherit">
    <div css={{
      padding: '4px', display: 'flex', alignItems: 'top', justifyContent: 'left',
    }}
    >
      <img alt={alt} src={image} width="80px" />
      <div css={{ display: 'block' }}>
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
