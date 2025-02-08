/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useState } from 'react'
import {
  CssBaseline,
  Stack,
  Typography,
  ThemeProvider,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material'
import { profileImg } from './sections/images'
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
          margin: '32px auto 160px auto',
          // Simple responsiveness
          '@media (min-width: 300px)': {
            maxWidth: '300px',
          },
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
              <img src={profileImg} alt='Anders profile' width='400px' />
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
          <ToggleButtonGroup
            color='secondary'
            size='small'
            value={currentTheme}
            onChange={toggleTheme}
            exclusive
            aria-label='Small sizes'
          >
            <ToggleButton size='large' value='primaryTheme'>
              Theme1
            </ToggleButton>
            <ToggleButton size='large' value='secondaryTheme'>
              Theme2
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </Navigation>
    </ThemeProvider>
  )
}
