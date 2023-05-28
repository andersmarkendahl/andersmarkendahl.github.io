/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  Link,
  Typography,
} from '@mui/material';
import { ProjectItem, Props as ProjectItemProps } from '../components/ProjectItem';
import { SectionHeader } from '../components/SectionHeader';

const GithubList = () => {
  const githubData: ProjectItemProps[] = [
    {
      icon: 'rocket_launch', title: 'Satellit', description: 'Space arcade game for Linux. C, SDL2.0, CUnit, DoxyGen', link: 'https://github.com/andersmarkendahl/satellit',
    },
    {
      icon: 'auto_awesome', title: 'Go-Star-Sim', description: 'Starsystem simulation. Golang, N-body problem, go-routines, CircleCI', link: 'https://github.com/andersmarkendahl/go-star-sim ',
    },
    {
      icon: 'sports_basketball', title: 'Go-Ball-Sim', description: 'Ball simulation. Golang, Golang test package, Jenkins', link: 'https://github.com/andersmarkendahl/go-ball-sim',
    },
  ];
  return (
    <div>
      {githubData.map((data) => (
        <div key={data.title}>
          <ProjectItem
            icon={data.icon}
            title={data.title}
            description={data.description}
            link={data.link}
          />
        </div>
      ))}
    </div>
  );
};
export const Github = () => (
  <div>
    <SectionHeader title="My Github" />
    <Typography variant="body1">
      A list of personal software projects, also linked on my
      <Link variant="inherit" underline="hover" href="https://github.com/andersmarkendahl/"> Github Profile</Link>
      .
      These projects are mainly for educational purposes in a wide range of topics.
    </Typography>
    <GithubList />
  </div>
);
