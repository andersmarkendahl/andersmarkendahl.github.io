/** @jsx jsx */
import { ReactNode } from 'react';
import { jsx } from '@emotion/react';
import {
  Button,
  Tooltip,
} from '@mui/material';
import {
  Home as HomeIcon,
  Person as AboutIcon,
  FolderCopy as ProjectIcon,
  Storage as ServerIcon,
  Mail as ContactIcon,
} from '@mui/icons-material';

interface Props {
  section: string,
  icon: ReactNode,
}

const NavItem = ({ section, icon }: Props) => {
  const href = `#${section}`;
  return (
    <Button sx={{ fontSize: 36 }} size="large" href={href}>{icon}</Button>
  );
};

export const Navigation = () => (
  <div css={{
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    backgroundColor: 'ActiveBorder',
    display: 'flex',
    justifyContent: 'center',
  }}
  >
    <NavItem section="home" icon={<HomeIcon />} />
    <NavItem section="about" icon={<AboutIcon />} />
    <NavItem section="projects" icon={<ProjectIcon />} />
    <NavItem section="server" icon={<ServerIcon />} />
    <NavItem section="contact" icon={<ContactIcon />} />
  </div>
);
