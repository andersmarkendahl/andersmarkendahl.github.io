/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  Alert,
  Typography,
} from '@mui/material';
import { ProjectItem } from '../components/ProjectItem';
import { SectionHeader } from '../components/SectionHeader';
import { SectionProps } from '../components/SectionProps';

export const Server = ({ id }: SectionProps) => (
  <div id={id}>
    <div css={{ marginBottom: '8px' }}>
      <SectionHeader title="My Server" />
      <div css={{ margin: '12px 0', maxWidth: '50%' }}>
        <Alert severity="warning">Currently offline to save cost (and the environment)</Alert>
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
