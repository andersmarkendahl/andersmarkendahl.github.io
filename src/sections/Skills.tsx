/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useState } from 'react'
import { Modal, Fade, Grid, Card, CardContent, Typography, useTheme } from '@mui/material'
import { Section } from '../components/Section'
import { SvgIconComponent } from '@mui/icons-material'
import BuildIcon from '@mui/icons-material/Build'
import CodeIcon from '@mui/icons-material/Code'
import CloudIcon from '@mui/icons-material/Cloud'
import GroupIcon from '@mui/icons-material/Group'
import DashboardIcon from '@mui/icons-material/Dashboard'


interface SkillItem {
  title: string
  icon: SvgIconComponent // Enforces a valid Material-UI icon
  description: string
}

const skillsData: SkillItem[] = [
  {
    icon: GroupIcon,
    title: 'Agile Leadership',
    description:
      'With over 10 years in Agile environments, I have +4 years of experience as a Scrum Master and +6 years as a Product Manager. My work has involved coaching teams, facilitating Agile ceremonies, and working closely with internal and external stakeholders to align product strategy with business needs.',
  },
  {
    icon: DashboardIcon,
    title: 'Project & Tooling',
    description:
      'I have extensive experience administering the Atlassian product suite, including JIRA and Confluence, as well as using Notion for documentation and knowledge sharing. Additionally, I see great value in visual collaboration and frequently work with tools like Miro and Microsoft Whiteboard.',
  },
  {
    icon: BuildIcon,
    title: 'Software Build & Deployment',
    description:
      'I have extensive experience in setting up and managing build and deployment pipelines across various platforms. My strongest expertise lies in Jenkins, where I have designed and maintained complex CI/CD workflows. I am also proficient with GitHub Actions and Helmchart integrations for Kubernetes deployments. Additionally, I have worked with AWS CodePipeline, Azure DevOps, and CircleCI, giving me a broad perspective on different automation tools and best practices.',
  },
  {
    icon: CloudIcon,
    title: 'Networking and Infrastructure',
    description:
      'I have experience developing software load balancers for network traffic at OSI Layers 3, 4, and 7. My work includes integrating external connectivity with routers and data center gateways using protocols such as BGP, OSPF, and BFD. Additionally, I have worked with routing software suites like Quagga/Zebra and BIRD.',
  },
  {
    icon: CodeIcon,
    title: 'Programming languages',
    description:
      'While I no longer work as a developer, I have a broad background in programming and continue to expand my knowledge as a technical product manager.  During my time as a developer, I primarily worked with C, Golang, and React with TypeScript. I also have extensive experience writing shell scripts (Bash, sh, zsh) for build automation and utilities. In my spare time, I have explored the Unity game engine and C# scripting, as well as basic SQL.',
  },
]

const SkillList = () => {
  const { palette } = useTheme()
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
            <item.icon sx={{ fontSize: '6rem' }} />
            <CardContent>
              <Typography variant='h6'>{item.title}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
      {selectedSkill && (
        <Modal
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: `${palette.background.default}80`,
          }}
          open
          onClose={() => setSelectedSkill(null)}
          disableAutoFocus
        >
          <Fade in={Boolean(selectedSkill)} timeout={1000}>
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
                  gap: '12px', // Adds spacing between icon and text
                  marginBottom: '16px',
                }}
              >
                <selectedSkill.icon sx={{ fontSize: '2.5rem' }} />
                <Typography variant="h2">{selectedSkill.title}</Typography>
              </div>
              <Typography>{selectedSkill.description}</Typography>
            </div>
          </Fade>
        </Modal>

      )}
    </Grid>
  )
}

export const Content = () => (
  <div>
    <Typography variant='body1'>
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
