/** @jsx jsx */
import { ReactNode } from 'react'
import { jsx } from '@emotion/react'
import { Button, Tooltip, Zoom, useTheme } from '@mui/material'
import {
  Home as HomeIcon,
  Lightbulb as SkillsIcon,
  FolderCopy as ProjectIcon,
  Storage as ServerIcon,
  Mail as ContactIcon,
} from '@mui/icons-material'

interface Props {
  section: string
  description: string
  icon: ReactNode
}

const NavItem = ({ section, description, icon }: Props) => {
  const href = `#${section}`
  return (
    <Tooltip title={description} TransitionComponent={Zoom} arrow>
      <Button href={href}>{icon}</Button>
    </Tooltip>
  )
}

export const Navigation = ({ children }: { children: ReactNode }) => {
  const { palette } = useTheme()
  const navBarColor = palette.background.navbar
  const iconStyle = {
    padding: '4px',
    fontSize: '5rem',
  }

  const navigationData: Props[] = [
    { section: 'home', description: 'About Me', icon: <HomeIcon sx={iconStyle} /> },
    { section: 'skills', description: 'My Skills', icon: <SkillsIcon sx={iconStyle} /> },
    { section: 'projects', description: 'My Github', icon: <ProjectIcon sx={iconStyle} /> },
    { section: 'server', description: 'My Server', icon: <ServerIcon sx={iconStyle} /> },
    { section: 'contact', description: 'Contact Me', icon: <ContactIcon sx={iconStyle} /> },
  ]

  return (
    <div
      css={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: navBarColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {navigationData.map((data) => (
        <div key={data.section}>
          <NavItem section={data.section} description={data.description} icon={data.icon} />
        </div>
      ))}
      <div
        css={{
          position: 'absolute',
          right: 0,
          marginRight: '16px',
        }}
      >
        {children}
      </div>
    </div>
  )
}
