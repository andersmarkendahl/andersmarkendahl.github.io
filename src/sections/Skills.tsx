/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { SectionHeader } from '../components/SectionHeader';
import cicdImg from './images/cicd.png';
import programImg from './images/programming.png';
import linuxImg from './images/linux.png';
import iplbImg from './images/iplb.png';
import agileImg from './images/agile.png';

const skillsData = [
  {
    img: cicdImg,
    title: 'CICD',
    subtitle: 'Continous Integration and Continous Deployment',
  },
  {
    img: programImg,
    title: 'Coding',
    subtitle: 'Programming languages',
  },
  {
    img: linuxImg,
    title: 'Linux',
    subtitle: 'Linux and Linux distributions',
  },
  {
    img: iplbImg,
    title: 'Networks',
    subtitle: 'IP Networking, Connectivity and Loadbalancing',
  },
  {
    img: agileImg,
    title: 'Agile',
    subtitle: 'Agile methodologies and roles',
  },
];

const SkillList = () => (
  <ImageList sx={{ width: 800, height: 600 }} cols={3} gap={32}>
    {skillsData.map((item) => (
      <ImageListItem sx={{ opacity: 0.5 }}key={item.title}>
        <img
          src={item.img}
          alt={item.title}
          loading="lazy"
        />
        <ImageListItemBar
          title={item.title}
          subtitle={item.subtitle}
          actionIcon={(
            <IconButton color='primary'>
              <InfoIcon fontSize='large' />
            </IconButton>
          )}
        />
      </ImageListItem>
    ))}
  </ImageList>
);

export const Skills = () => (
  <div>
    <SectionHeader title="My Skills" />
    <Typography variant="body1">
      A list of skills and topics that I have learned during my time in software development
    </Typography>
    <SkillList />
  </div>
);
