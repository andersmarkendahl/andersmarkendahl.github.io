/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  Typography,
} from '@mui/material';
import { SectionHeader } from '../components/SectionHeader';
import profileImg from './images/profile.png';

export const Myself = () => (
  <div>
    <SectionHeader title="About Me" />
    <div css={{ display: 'flex' }}>
      <div>
        <Typography sx={{ marginBottom: '8px' }} variant="body1">
          My name is Anders Markendahl and I live in Uppsala, Sweden, with my wife and three kids.
          Uppsala is a small and vibrant city 50km north of Stockholm.
        </Typography>
        <Typography variant="body1">
          Professionally I am a software developer and technical product manager with +10
          years of experience. My technical expertise revolves around end to end delivery
          of software products.
        </Typography>
        <Typography sx={{ marginBottom: '8px' }} variant="body1">
          With a history as developer within networks, loadbalancing and routing, I am also
          experienced in leading a team of developers and working according to Agile workflows.
        </Typography>
        <Typography sx={{ marginBottom: '8px' }} variant="body1">
          In my spare time I usually play around with some coding projects, some of them you can
          find referenced in this homepage.
        </Typography>
      </div>
      <div>
        <img src={profileImg} alt="Anders profile" width={300} />
      </div>
    </div>
  </div>
);
