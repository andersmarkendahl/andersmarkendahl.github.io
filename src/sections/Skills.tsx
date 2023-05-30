/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useState } from 'react'
import {
  Modal,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  useTheme,
} from '@mui/material'
import LaunchIcon from '@mui/icons-material/Launch'
import { Section } from '../components/Section'
import cicdImg from './images/cicd.png'
import programImg from './images/programming.png'
import linuxImg from './images/linux.png'
import iplbImg from './images/iplb.png'
import agileImg from './images/agile.png'

interface SkillItem {
  title: string
  subtitle: string
  img: string
  description: string
}
const skillsData: SkillItem[] = [
  {
    img: agileImg,
    title: 'Agile',
    subtitle: 'Agile methodologies, roles and tools',
    description:
      'I have been working with Agile software development using Kanban or Scrum for +10 years. For the last 5+ years my role have been Agile Product Owner and Product Manager and before that I worked as Scrum Master (+4 years). I have most experience in software such as JIRA, Miro',
  },
  {
    img: programImg,
    title: 'Coding',
    subtitle: 'Programming languages',
    description:
      'During my professional career I have delivered software in languages C, Golang and React on Typescript. I have also extensive experience writing scripts (Shell or Node.js) for utility, builds and test.',
  },
  {
    img: cicdImg,
    title: 'CICD',
    subtitle: 'Continous Integration and Deployment',
    description:
      'Historically I have worked with large organizations migrating from a waterfall model to full CI/CD development pipelines including integration with customer. In later years my experience includes improving performance and reducing cost of existing pipelines. Software I have worked with includes Jenkins, Github Actions, AWS CodePipeline and I also possess basic knowledge of CircleCI.',
  },
  {
    img: iplbImg,
    title: 'Network',
    subtitle: 'IP Networking, Connectivity and Loadbalancing',
    description:
      'I have worked with software loadbalancers for network traffic in OSI Layers 3/4/7. The software I have developed also includes external connectivity interacting with Routers and Data Center Gateways using protocols such as BGP, OSPF and BFD. Routing software suites I have integrated includes Quagga/Zebra and BIRD.',
  },
  {
    img: linuxImg,
    title: 'Linux',
    subtitle: 'Linux and Linux distributions',
    description:
      'I have deployed production grade software on multiple Linux distributions including Ubuntu, SLES, Redhat and CentOS. I have directly been managing Ubuntu based servers for many years. I also possess knowledge about Linux file structure and basic knowledge of the Linux kernel.',
  },
]

interface ModalContentProps {
  img: string
  title: string
  description: string
}

const ModalContent = ({ img, title, description }: ModalContentProps) => {
  const { palette } = useTheme()
  return (
    <div
      css={{
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '600px',
        backgroundColor: `${palette.background.paper}`,
        border: `4px solid ${palette.secondary.main}`,
        borderRadius: '8px',
        padding: '32px',
      }}
    >
      <img src={img} alt={title} loading='lazy' />
      <div css={{ marginTop: '8px', marginBottom: '16px' }}>
        <Typography variant='h3'>{title}</Typography>
      </div>
      <Typography>{description}</Typography>
    </div>
  )
}

const SkillList = () => {
  const { palette } = useTheme()
  const [selectedImage, setSelectedImage] = useState<SkillItem | null>(null)
  const handleOpen = (item: SkillItem) => {
    setSelectedImage(item)
  }
  const handleClose = () => {
    setSelectedImage(null)
  }

  return (
    <ImageList sx={{ width: 800, height: 600 }} cols={3} gap={32}>
      {skillsData.map((item) => (
        <ImageListItem sx={{ opacity: 0.8 }} key={item.title}>
          <img
            src={item.img}
            srcSet={`${item.img}?w=2x`}
            alt={item.title}
            loading='lazy'
            // Could not override this when using ImageList
            style={{ objectFit: 'contain' }}
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.subtitle}
            actionIcon={
              <IconButton onClick={() => handleOpen(item)} color='primary'>
                <LaunchIcon fontSize='large' />
              </IconButton>
            }
          />
          {selectedImage === item && (
            <Modal
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: `${palette.background.default}80`,
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
  )
}

export const Content = () => (
  <div>
    <div css={{ marginBottom: '8px' }}>
      <Typography variant='body1'>
        A list of skills and topics that I have learned during my time in software development
      </Typography>
    </div>
    <SkillList />
  </div>
)

export const Skills = ({ id }: { id: string }) => (
  <Section id={id} title='My Skills'>
    <Content />
  </Section>
)
