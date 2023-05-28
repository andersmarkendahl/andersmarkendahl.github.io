/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  Typography,
} from '@mui/material';
import { ProjectItem } from '../components/ProjectItem';
import { SectionHeader } from '../components/SectionHeader';

export const Server = () => (
  <div>
    <SectionHeader title="My Server" />
    <Typography variant="body1">
      A server hosted by me and contain a changing set of services.
      Over the course of time the server have hosted Jenkins, TeamSpeak and
      various games such as Terraria, Minecraft, Starbound and Half-Life
      1 and 2 etc.
    </Typography>
    <ProjectItem icon="storage" title="Server" description="Hosted Ubuntu Server, Apache, MySQL" link="" />
  </div>
);
