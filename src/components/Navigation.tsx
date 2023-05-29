/** @jsx jsx */
import { ReactNode } from 'react';
import { jsx } from '@emotion/react';
import {
  Button,
  Tooltip,
  Zoom,
} from '@mui/material';
import {
  Home as HomeIcon,
  Lightbulb as SkillsIcon,
  FolderCopy as ProjectIcon,
  Storage as ServerIcon,
  Mail as ContactIcon,
} from '@mui/icons-material';

interface Props {
  section: string,
  description: string,
  icon: ReactNode,
}

const NavItem = ({ section, description, icon }: Props) => {
  const href = `#${section}`;
  return (
    <Tooltip sx={{ fontSize: '48px' }} title={description} TransitionComponent={Zoom} arrow>
      <Button href={href}>
        {icon}
      </Button>
    </Tooltip>
  );
};

export const Navigation = () => {
  const navStyle = { padding: '4px', fontSize: '48px' };
  const navigationData: Props[] = [
    { section: 'home', description: 'About Me', icon: <HomeIcon sx={navStyle} /> },
    { section: 'skills', description: 'My Skills', icon: <SkillsIcon sx={navStyle} /> },
    { section: 'projects', description: 'My Github', icon: <ProjectIcon sx={navStyle} /> },
    { section: 'server', description: 'My Server', icon: <ServerIcon sx={navStyle} /> },
    { section: 'contact', description: 'Contact Me', icon: <ContactIcon sx={navStyle} /> },
  ];

  return (
    <div css={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'ActiveBorder',
      display: 'flex',
      justifyContent: 'center',
    }}
    >
      {navigationData.map((data) => (
        <div key={data.section}>
          <NavItem section={data.section} description={data.description} icon={data.icon} />
        </div>
      ))}
    </div>
  );
};
