/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  Icon,
  Divider,
  Typography,
} from '@mui/material';
import serverImg from './server.png'

interface ProjectItemProps {
  image: string;
}

const ProjectItem = ({ image }: ProjectItemProps) => {
  return (
    <div>
      <img src={image} /> 
    </div>
  );
}

export const Server = () => (
  <div> 
    <div css={{ marginBottom: '8px' }}>
      <Typography variant="h4">
        My Server
      </Typography>
      <Divider orientation="horizontal" />
      <Typography variant="body1">
        A server hosted by me and contain a changing set of services. Over the course of time the server have hosted Jenkins, TeamSpeak and various games such as Terraria, Minecraft, Starbound and Rust etc.
      </Typography>
    </div>
    <ProjectItem image={serverImg}/>
  </div>
);
