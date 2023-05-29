/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  Button,
} from '@mui/material';
import {
  Home as HomeIcon,
  Person as AboutIcon,
  FolderCopy as ProjectIcon,
  Storage as ServerIcon,
  Mail as ContactIcon,
} from '@mui/icons-material';

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
    <Button size="large" href="#home"><HomeIcon sx={{ fontSize: 36 }} /></Button>
    <Button size="large" href="#about"><AboutIcon sx={{ fontSize: 36 }} /></Button>
    <Button size="large" href="#projects"><ProjectIcon sx={{ fontSize: 36 }} /></Button>
    <Button size="large" href="#server"><ServerIcon sx={{ fontSize: 36 }} /></Button>
    <Button size="large" href="#contact"><ContactIcon sx={{ fontSize: 36 }} /></Button>
  </div>
);
