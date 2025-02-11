/** @jsx jsx */
import { jsx } from '@emotion/react'
import { CssBaseline, Grid, Stack, Typography, ThemeProvider } from '@mui/material'
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
          padding: '0 5%',
          width: '100%',
          maxWidth: 'clamp(300px, 90vw, 1200px)',
        }}
      >
        <Stack spacing={12}>
          <Grid
            container
            rowSpacing={4}
            columnSpacing={0}
            alignItems="center"
            justifyContent="flex-start"
            sx={{
              flexDirection: { xs: 'column', sm: 'row' }, // Stacked on xs, side-by-side on sm+
            }}
          >
            <Grid item xs={12} sm={6}>
              <Typography variant="h2" align="left">
                Anders Markendahl
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
              <div
                css={{
                  borderRadius: '50%',
                  overflow: 'hidden',
                  width: '300px',
                  height: '300px',
                  border: `4px solid ${theme.palette.secondary.light}`,
                  boxShadow: `0px 4px 6px ${theme.palette.action.disabled}`,
                }}
              >
                <img
                  src={profileImg}
                  alt="Anders profile"
                  css={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </div>
            </Grid>
          </Grid>
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
