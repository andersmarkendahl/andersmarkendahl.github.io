/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useTheme, alpha } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { Section } from '../components/Section'
import { dolesImg } from './images'

const Content = () => {
  const theme = useTheme()
  const hoverBg = alpha(theme.palette.primary.main, 0.3)

  return (
    <div>
      <Typography variant='body1' sx={{ mt: 2, mb: 2 }}>
        Doles Dolez is an arcade-style space game built for Android devices using Unity and C#. You
        pilot a burning meteor through multiple levels, dodging asteroids and triggering fiery
        explosions. Special asteroid behaviours add strategy to the arcade action—how many can you
        shatter before they shatter you? Pick up power-ups to charge your meteor and rack up bigger
        detonations, high scores, and achievements.
      </Typography>
      <Typography variant='body1' sx={{ mt: 2, mb: 2 }}>
        This project was a bigger undertaking than my other educational projects, involving a wide
        range of skills and tools. I developed the entire game from scratch—including game logic,
        scene management, menu and settings UI, and input controls. I also handled audio management
        (background music, impact sounds, explosion effects), modelled all 3D assets in Blender, and
        implemented behavioural scripting in C#. From tuning physics interactions to organising
        asset flows, every aspect was hand-crafted.
      </Typography>
      <Typography variant='body1' sx={{ mt: 2, mb: 2 }}>
        The game was originally available on the Google Play Store, but I eventually removed it due
        to the ongoing maintenance required to support evolving platforms—such as Android API
        changes. Instead, I rebuilt and deployed the full game as a WebGL version hosted on Netlify,
        so it can continue to be enjoyed in the browser. It is intended for desktop use and is best
        experienced in full-screen mode. I hope you enjoy playing it—I definitely enjoyed and
        learned a lot making it. You can find the game through the image link below.
      </Typography>
      <Box
        component='a'
        href='https://doles-dolez.netlify.app/'
        target='_blank'
        rel='noopener noreferrer'
        sx={{
          display: 'inline-block',
          width: '60%',
          borderRadius: 1,
          overflow: 'hidden',
          padding: '16px',
          transition: 'background-color 0.3s',
          '&:hover': {
            backgroundColor: hoverBg,
          },
          img: {
            display: 'block',
            width: '100%',
            height: 'auto',
          },
        }}
      >
        <img src={dolesImg} alt='Doles Dolez Game' />
      </Box>
    </div>
  )
}

export const Doles = ({ id }: { id: string }) => (
  <Section id={id} title='Doles Dolez'>
    <Content />
  </Section>
)
