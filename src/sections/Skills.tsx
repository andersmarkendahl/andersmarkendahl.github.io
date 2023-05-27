/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  ImageList,
  ImageListItem,
  Typography,
} from '@mui/material';
import { SectionHeader } from '../components/SectionHeader';
import cicdImg from './cicd.png';
import programImg from './programming.png';
import linuxImg from './linux.png';
import iplbImg from './iplb.png';
import agileImg from './agile.png';

const skillsData = [
  {
    img: cicdImg,
    title: 'Continous Integration and Continous Deployment',
  },
  {
    img: programImg,
    title: 'Programming',
  },
  {
    img: linuxImg,
    title: 'Linux and Linux distributions',
  },
  {
    img: iplbImg,
    title: 'IP Networking, Connectivity and Loadbalancing',
  },
  {
    img: agileImg,
    title: 'Agile methodologies',
  },
];

const SkillList = () => (
  <ImageList variant="masonry" sx={{ width: 600, height: 500 }} cols={3} gap={32}>
    {skillsData.map((item) => (
      <ImageListItem key={item.title}>
        <img
          src={item.img}
          alt={item.title}
          loading="lazy"
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
