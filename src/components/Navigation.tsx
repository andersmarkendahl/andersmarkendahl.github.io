/** @jsx jsx */
import { useRef, useState } from 'react';
import { jsx } from '@emotion/react';
import {
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import {
  Home as HomeIcon,
  Person as AboutIcon,
  FolderCopy as ProjectIcon,
  Storage as ServerIcon,
  Mail as ContactIcon,
} from '@mui/icons-material';

export const Navigation = () => {
  const [value, setValue] = useState(0);

  return (
    <div css={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="About" icon={<AboutIcon />} />
        <BottomNavigationAction label="Project" icon={<ProjectIcon />} />
        <BottomNavigationAction label="Server" icon={<ServerIcon />} />
        <BottomNavigationAction label="Contact" icon={<ContactIcon />} />
      </BottomNavigation>
    </div>
  )
};
