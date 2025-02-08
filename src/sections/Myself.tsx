/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Typography } from '@mui/material'
import { Section } from '../components/Section'

const Content = () => (
  <div>
    <div>
      <Typography sx={{ marginBottom: '16px' }} variant='body1'>
        Hi! I am Anders Markendahl, and I live in Uppsala, Sweden, with my wife and our three kids.
      </Typography>
      <Typography sx={{ marginBottom: '16px' }} variant='body1'>
        I’m a technical product owner with a strong foundation in software development. With over a
        decade of experience, I have led teams in delivering complex software products, ranging from
        networking and routing components with microservices in Kubernetes to large-scale user
        platforms for clinical personnel, B2B CMS systems, and mobile payment solutions. My
        background as a developer gives me a deep technical understanding, which helps me coach
        teams, bridge communication between stakeholders, and ensure we build scalable, high-value
        solutions.{' '}
      </Typography>
      <Typography sx={{ marginBottom: '16px' }} variant='body1'>
        As a product manager, team lead, and agile coach, I thrive at the intersection of
        technology, business, and user needs — always staying close to the technical aspects of the
        products and services my teams deliver.
      </Typography>
      <Typography sx={{ marginBottom: '16px' }} variant='body1'>
        In my spare time, I enjoy exploring new technologies and working on personal coding
        projects—some of which you can find referenced on this webpage.{' '}
      </Typography>
    </div>
  </div>
)

export const Myself = ({ id }: { id: string }) => (
  <Section id={id} title='About Me'>
    <Content />
  </Section>
)
