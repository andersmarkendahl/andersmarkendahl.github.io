/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useState } from 'react'
import { Modal, Fade, Grid, Card, CardContent, Typography, useTheme } from '@mui/material'
import { SvgIconComponent } from '@mui/icons-material'
import CloudSyncIcon from '@mui/icons-material/CloudSync'
import CodeIcon from '@mui/icons-material/Code'
import LanIcon from '@mui/icons-material/Lan'
import HubIcon from '@mui/icons-material/Hub'
import DashboardIcon from '@mui/icons-material/Dashboard'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import { Section } from '../components/Section'

interface SkillItem {
  title: string
  icon: SvgIconComponent // Enforces a valid Material-UI icon
  description: string
}

const skillsData: SkillItem[] = [
  {
    icon: HubIcon, // Represents product development & technical execution
    title: 'Technical Product Manager',
    description:
      'I have +6 years of experience as a Technical Product Manager, specializing in defining and delivering software products in complex technical domains. My expertise lies in bridging the gap between engineering and business, translating technical challenges into actionable strategies. I work closely with developers, UX designers, and stakeholders to shape roadmaps, prioritize features, and drive execution. My background as a Scrum Master and Agile Coach has given me a strong foundation in facilitating teams, improving workflows, and fostering collaboration.',
  },
  {
    icon: DashboardIcon,
    title: 'Project & Tooling',
    description:
      'I have extensive experience administering the Atlassian product suite, including JIRA and Confluence, as well as using Notion for documentation and knowledge sharing. I frequently work with tools like Miro and Microsoft Whiteboard to facilitate brainstorming, planning, and collaboration across cross-functional teams.',
  },
  {
    icon: CloudSyncIcon,
    title: 'Software Build & Deployment',
    description:
      'I have extensive experience in setting up and managing build and deployment pipelines across various platforms. My strongest expertise lies in Jenkins, where I have designed and maintained complex CI/CD workflows. I am also proficient with GitHub Actions and Helmchart integrations for Kubernetes deployments. Additionally, I have worked with AWS CodePipeline, Azure DevOps, and CircleCI, giving me a broad perspective on different automation tools and best practices.',
  },
  {
    icon: DesignServicesIcon,
    title: 'User Experience & Product Design',
    description:
      'I have worked closely with UX designers, art directors, and frontend engineers to create visually appealing and user-friendly experiences. While I am not a designer, I enjoy contributing to user flows and UI structures, and I find it fun to experiment with layouts and interactions. I also have basic experience working in Figma to create prototypes and refine design concepts.',
  },
  {
    icon: LanIcon,
    title: 'Networking & Infrastructure',
    description:
      'I have experience developing software load balancers for network traffic at OSI Layers 3, 4, and 7. My work includes integrating external connectivity with routers and data center gateways using protocols such as BGP, OSPF, and BFD. Additionally, I have worked with routing software suites like Quagga/Zebra and BIRD.',
  },
  {
    icon: CodeIcon,
    title: 'Technical Expertise & Development',
    description:
      'While I no longer work as a full-time developer, I have a strong technical background that enables me to be hands-on as a Technical Product Manager. I have experience coding in C, Golang, and React with TypeScript, as well as writing shell scripts for build automation. I stay engaged with modern development practices and continue exploring technologies in my free time, such as Unity game engine and C# scripting.',
  },
]

interface SkillModalProps {
  selectedSkill: SkillItem | null
  onClose: () => void
}

const SkillModal = ({ selectedSkill, onClose }: SkillModalProps) => {
  const { palette } = useTheme()

  if (!selectedSkill) return null

  return (
    <Modal
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: `${palette.background.default}80`,
      }}
      open
      onClose={onClose}
      disableAutoFocus
    >
      <Fade in timeout={1000}>
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            width: '600px',
            backgroundColor: `${palette.background.paper}`,
            borderRadius: '8px',
            padding: '32px',
          }}
        >
          <div
            css={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px',
            }}
          >
            <selectedSkill.icon sx={{ fontSize: '3rem', color: 'primary.main' }} />
            <Typography variant='h5'>{selectedSkill.title}</Typography>
          </div>
          <Typography>{selectedSkill.description}</Typography>
        </div>
      </Fade>
    </Modal>
  )
}

const SkillList = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null)

  return (
    <Grid container spacing={3}>
      {skillsData.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.title}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              padding: 4,
              textAlign: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 6,
              },
            }}
            onClick={() => setSelectedSkill(item)}
          >
            <item.icon sx={{ fontSize: '6rem', color: 'primary.main' }} />
            <CardContent>
              <Typography variant='h6'>{item.title}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
      <SkillModal selectedSkill={selectedSkill} onClose={() => setSelectedSkill(null)} />
    </Grid>
  )
}

export const Content = () => (
  <div>
    <Typography variant='body1' sx={{ marginBottom: '16px' }}>
      Click a card to learn more about my experience in that area.
    </Typography>
    <SkillList />
  </div>
)

export const Skills = ({ id }: { id: string }) => (
  <Section id={id} title='My Skills'>
    <Content />
  </Section>
)
