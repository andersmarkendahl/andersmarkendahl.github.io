/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  Alert,
  Typography,
} from '@mui/material';
import { ProjectItem } from '../components/ProjectItem';
import { Section } from '../components/Section';

const Content = () => (
  <div>
    <div css={{ marginBottom: '8px' }}>
      <div css={{ margin: '12px 0', width: 'fit-content' }}>
        <Alert severity="warning">2023-02-16:   Currently offline to save cost (and the environment)</Alert>
      </div>
      <Typography variant="body1">
        A server hosted by me that contain a changing set of services.
        Over the course of time the server have hosted Jenkins, TeamSpeak and
        various games such as Terraria, Minecraft, Starbound and Half-Life
        1 and 2 etc.
      </Typography>
    </div>
    <ProjectItem icon="storage" title="Server" description="Hosted Ubuntu Server, Apache, MySQL" link="" />
  </div>
);

export const Server = ({ id }: { id: string }) => (
  <Section id={id} title="My Server"><Content /></Section>
);
