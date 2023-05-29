/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useState } from 'react';
import {
  Modal,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import { Section } from '../components/Section';
import cicdImg from './images/cicd.png';
import programImg from './images/programming.png';
import linuxImg from './images/linux.png';
import iplbImg from './images/iplb.png';
import agileImg from './images/agile.png';

interface SkillItem {
  title: string;
  subtitle: string;
  img: string;
  description: string;
}
const skillsData: SkillItem[] = [
  {
    img: cicdImg,
    title: 'CICD',
    subtitle: 'Continous Integration and Continous Deployment',
    description: 'I have worked with large organizations migrating from a waterfall model to full CI/CD development pipeline including integration with customer. Full automation of: build, test (including test reports and specifications), and product documentation. I have many years experience developing using Jenkins, including hosting and managing my own Jenkins server. I also possess basic knowledge of CircleCI.',
  },
  {
    img: programImg,
    title: 'Coding',
    subtitle: 'Programming languages',
    description: 'During my career I have written most code in C and Golang. I have also extensive experience writing Linux shell scripts (Posix standard or Bash) for utility, builds and test. I have also worked as a software architect (+3 years) for products in the networking domain.',
  },
  {
    img: linuxImg,
    title: 'Linux',
    subtitle: 'Linux and Linux distributions',
    description: 'I have deployed production grade software on multiple Linux distributions including Ubuntu, SLES, Redhat and CentOS. I have directly been managing Ubuntu based servers for many years. I also possess knowledge about Linux file structure and basic knowledge of the Linux kernel. For development I use Ubuntu distribution on my local machine.',
  },
  {
    img: iplbImg,
    title: 'Networks',
    subtitle: 'IP Networking, Connectivity and Loadbalancing',
    description: 'I have worked with software loadbalancers for network traffic in OSI Layers 3/4/7. The software I have developed also includes external connectivity interacting with Routers and Data Center Gateways using protocols such as BGP, OSPF and BFD. Routing software suites I have integrated includes Quagga/Zebra and BIRD.',
  },
  {
    img: agileImg,
    title: 'Agile',
    subtitle: 'Agile methodologies and roles',
    description: 'I have been working with Agile software development using Kanban or Scrum for +10 years. In addition to working as a Software Developer in Agile teams, I have also worked as Scrum Master (+4 years) and Agile Product Owner and manager (+2 years).',
  },
];

interface ModalContentProps {
  img: string,
  title: string,
  description: string,
}

const ModalContent = ({ img, title, description }: ModalContentProps) => (
  <div css={{
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '600px',
    backgroundColor: '#1f1f1e',
    border: '2px solid #fff',
    borderColor: '#b9b09f',
    borderRadius: '16px',
    padding: '32px',
  }}
  >
    <div css={{ marginBottom: '32px' }}>
      <img src={img} alt={title} loading="lazy" />
    </div>
    <Typography variant="h5">
      {title}
    </Typography>
    <Typography>
      {description}
    </Typography>
  </div>
);

const SkillList = () => {
  const [selectedImage, setSelectedImage] = useState<SkillItem | null>(null);
  const handleOpen = (item : SkillItem) => {
    setSelectedImage(item);
  };
  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <ImageList sx={{ width: 800, height: 600 }} cols={3} gap={32}>
      {skillsData.map((item) => (
        <ImageListItem sx={{ opacity: 0.8 }} key={item.title}>
          <img src={item.img} alt={item.title} loading="lazy" />
          <ImageListItemBar
            title={item.title}
            subtitle={item.subtitle}
            actionIcon={(
              <IconButton onClick={() => handleOpen(item)} color="primary">
                <LaunchIcon fontSize="large" />
              </IconButton>
            )}
          />
          {selectedImage === item && (
            <Modal
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#03030080',
              }}
              open
              onClose={handleClose}
              slotProps={{
                backdrop: {
                  timeout: 500,
                },
              }}
            >
              <ModalContent img={item.img} title={item.subtitle} description={item.description} />
            </Modal>
          )}
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export const Content = () => (
  <div>
    <div css={{ marginBottom: '8px' }}>
      <Typography variant="body1">
        A list of skills and topics that I have learned during my time in software development
      </Typography>
    </div>
    <SkillList />
  </div>
);

export const Skills = ({ id }: { id: string }) => (
  <Section id={id} title="My Skills"><Content /></Section>
);
