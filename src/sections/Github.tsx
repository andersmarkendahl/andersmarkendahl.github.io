/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  Divider,
  Link,
  Typography,
} from '@mui/material';
import { ProjectItem, ProjectItemProps } from '../components/ProjectItem';
import satellitImg from './satellit.png';
import goStarSimImg from './gostarsim.png';
import goBallSimImg from './goballsim.png';

const GithubList = () => {
  const githubData: ProjectItemProps[] = [
    {
      image: satellitImg, title: 'Satellit', description: 'Space arcade game for Linux. C, SDL2.0, CUnit, DoxyGen', link: 'https://github.com/andersmarkendahl/satellit', alt: 'Satellit',
    },
    {
      image: goStarSimImg, title: 'Go-Star-Sim', description: 'Starsystem simulation. Golang, N-body problem, go-routines, CircleCI', link: 'https://github.com/andersmarkendahl/go-star-sim ', alt: 'Starsystem simulation',
    },
    {
      image: goBallSimImg, title: 'Go-Ball-Sim', description: 'Ball simulation. Golang, Golang test package, Jenkins', link: 'https://github.com/andersmarkendahl/go-ball-sim', alt: 'Ball',
    },
  ];
  return (
    <div>
      {githubData.map((data) => (
        <div>
          <ProjectItem
            image={data.image}
            title={data.title}
            description={data.description}
            link={data.link}
            alt={data.alt}
          />
        </div>
      ))}
    </div>
  );
};
export const Github = () => (
  <div>
    <div css={{ marginBottom: '8px' }}>
      <Typography variant="h4">
        My Github
      </Typography>
      <Divider orientation="horizontal" />
    </div>
    <Typography variant="body1">
      A list of personal software projects, also linked on my
      <Link variant="inherit" underline="hover" href="https://github.com/andersmarkendahl/"> Github Profile</Link>
      .
      These projects are mainly for educational purposes in a wide range of topics.
    </Typography>
    <GithubList />
  </div>
);
