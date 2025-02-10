/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useState } from 'react'
import { Modal, Fade, Grid, Card, CardContent, Typography, useTheme } from '@mui/material'
import { SvgIconComponent } from '@mui/icons-material'
import BuildIcon from '@mui/icons-material/Build'
import CodeIcon from '@mui/icons-material/Code'
import CloudIcon from '@mui/icons-material/Cloud'
import { Section } from '../components/Section'

interface SkillItem {
  title: string
  icon: SvgIconComponent // Enforces a valid Material-UI icon
  description: string
}

const skillsData: SkillItem[] = [
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
      'I have worked with software loadbalancers for network traffic in OSI Layers 3/4/7. The software I have developed also includes external connectivity interacting with Routers and Data Center Gateways using protocols such as BGP, OSPF and BFD. Routing software suites I have integrated includes Quagga/Zebra and BIRD.',
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
              padding: 2,
              textAlign: 'center',
              cursor: 'pointer',
            }}
            onClick={() => setSelectedSkill(item)}
          >
            <item.icon fontSize='large' />
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
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                width: '600px',
                backgroundColor: `${palette.background.paper}`,
                borderRadius: '8px',
                padding: '32px',
              }}
            >
              <Typography variant='h3'>{selectedSkill.title}</Typography>
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
      A list of skills and topics that I have learned during my time in software development
    </Typography>
    <SkillList />
  </div>
)

export const Skills = ({ id }: { id: string }) => (
  <Section id={id} title='My Skills'>
    <Content />
  </Section>
)
