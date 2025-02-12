/** @jsx jsx */
import { jsx } from '@emotion/react'
import { CssBaseline, Stack, ThemeProvider } from '@mui/material'
import './global.css';
import { theme } from './components/Theme'
import { Navigation } from './components/Navigation'
import { Contact } from './sections/Contact'
import { Server } from './sections/Server'
import { Github } from './sections/Github'
import { Skills } from './sections/Skills'
import { Myself } from './sections/Myself'
import { Profile } from './sections/Profile'

export const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '32px auto 160px auto',
        padding: '0 5%',
        width: '100%',
        maxWidth: 'clamp(300px, 90vw, 1200px)',
      }}
    >
      <Stack spacing={12}>
        <Profile id='home' />
        <Myself id='about' />
        <Skills id='skills' />
        <Github id='projects' />
        <Server id='server' />
        <Contact id='contact' />
      </Stack>
    </div>
    <Navigation />
  </ThemeProvider>
)
