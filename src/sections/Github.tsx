/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  Divider,
  Link,
  Typography,
} from '@mui/material';

const GithubList = () => (
  <div />
);

export const Github = () => (
  <div>
    <div css={{ marginBottom: '8px' }}>
      <Typography variant="h4">
        My Github
      </Typography>
      <Divider orientation="horizontal" />
      <Typography variant="body1">
        A list of personal software projects, also linked on my
        <Link variant="inherit" href="https://github.com/andersmarkendahl/">Github Profile</Link>
        .
        These projects are mainly for educational purposes in a wide range of topics.
      </Typography>
    </div>
    <GithubList />
  </div>
);
