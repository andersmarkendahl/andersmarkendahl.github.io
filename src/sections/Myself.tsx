/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Typography } from '@mui/material'
import { Section } from '../components/Section'

const Content = () => (
  <div>
    <div>
      <Typography sx={{ marginBottom: '16px' }} variant='body1'>
        My name is Anders Markendahl and I live in Uppsala, Sweden, with my wife and three kids.
        Uppsala is a small and vibrant city 50km north of Stockholm.
      </Typography>
      <Typography sx={{ marginBottom: '16px' }} variant='body1'>
        Professionally I am a software developer and technical product manager with +10 years of
        experience. My technical expertise revolves around end to end delivery of software products.
        With a history as developer within networks, loadbalancing and routing, I am also
        experienced in leading a team of developers and working according to Agile workflows.
      </Typography>
      <Typography variant='body1'>
        In my spare time I usually play around with some coding projects, some of them you can find
        referenced on this webpage.
      </Typography>
    </div>
  </div>
)

export const Myself = ({ id }: { id: string }) => (
  <Section id={id} title='About Me'>
    <Content />
  </Section>
)
