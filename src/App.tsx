/** @jsx jsx */
import { jsx } from '@emotion/react'
import { CssBaseline, Stack, Typography, ThemeProvider } from '@mui/material'
import { profileImg } from './sections/images'
import { theme } from './components/Theme'
import { Navigation } from './components/Navigation'
import { Contact } from './sections/Contact'
import { Server } from './sections/Server'
import { Github } from './sections/Github'
import { Skills } from './sections/Skills'
import { Myself } from './sections/Myself'

export const App = () => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '32px auto 160px auto',
          padding: '0 16px',
          minWidth: '320px',
          maxWidth: '1200px',
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
              <Typography variant='h2' align='center'>
                Anders Markendahl
              </Typography>
            </div>
            <div css={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src={profileImg}
              alt='Anders profile'
              css={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
              }}
            />
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
        />
      </Navigation>
    </ThemeProvider>
  )
