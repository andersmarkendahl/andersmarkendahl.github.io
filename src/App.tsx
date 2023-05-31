/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useState } from 'react'
import { CssBaseline, Stack, Switch, Typography, ThemeProvider } from '@mui/material'
import profileImg from './sections/images/profile.png'
import { primaryTheme, secondaryTheme } from './components/Theme'
import { Navigation } from './components/Navigation'
import { Contact } from './sections/Contact'
import { Server } from './sections/Server'
import { Github } from './sections/Github'
import { Skills } from './sections/Skills'
import { Myself } from './sections/Myself'

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState(primaryTheme)

  const toggleTheme = () => {
    const newTheme = currentTheme === primaryTheme ? secondaryTheme : primaryTheme
    setCurrentTheme(newTheme)
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          margin: '32px auto 160px auto',
          // Simple responsiveness
          '@media (min-width: 600px)': {
            maxWidth: '600px',
          },
          '@media (min-width: 900px)': {
            maxWidth: '900px',
          },
          '@media (min-width: 1200px)': {
            maxWidth: '1200px',
          },
        }}
      >
        <Stack spacing={12}>
          <div>
            <div id='home'>
              <Typography variant='h1' align='center'>
                Anders Markendahl
              </Typography>
            </div>
            <div css={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={profileImg} alt='Anders profile' width={400} />
            </div>
          </div>
          <Myself id='about' />
          <Skills id='skills' />
          <Github id='projects' />
          <Server id='server' />
          <Contact id='contact' />
        </Stack>
      </div>
      <Navigation>
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography>Primary Theme</Typography>
          <Switch checked={currentTheme === secondaryTheme} onChange={toggleTheme} />
          <Typography>Secondary Theme</Typography>
        </div>
      </Navigation>
    </ThemeProvider>
  )
}
