/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  Button,
  Divider,
  Typography,
} from '@mui/material';
import serverImg from './server.png';

interface ProjectItemProps {
  image: string;
  title: string;
  description: string;
  link: string;
  alt: string;
}

const ProjectItem = ({
  image, title, description, link, alt,
}: ProjectItemProps) => (
  <div css={{
    padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'left',
  }}
  >
    <Button sx={{ textTransform: 'none' }} href={link} color="inherit">
      <img alt={alt} src={image} width="80px" />
      <div css={{ display: 'block' }}>
        <Typography variant="h5">
          {title}
        </Typography>
        <Typography variant="body1">
          {description}
        </Typography>
      </div>
    </Button>
  </div>
);

export const Server = () => (
  <div>
    <div css={{ marginBottom: '8px' }}>
      <Typography variant="h4">
        My Server
      </Typography>
      <Divider orientation="horizontal" />
      <Typography variant="body1">
        A server hosted by me and contain a changing set of services.
        Over the course of time the server have hosted Jenkins, TeamSpeak and
        various games such as Terraria, Minecraft, Starbound and Half-Life
        1 and 2 etc.
      </Typography>
    </div>
    <ProjectItem image={serverImg} title="Server" description="Hosted Ubuntu Server, Apache, MySQL" link="" alt="" />
  </div>
);
