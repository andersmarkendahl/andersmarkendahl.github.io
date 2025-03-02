/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Typography } from '@mui/material'
import { profileImg } from './images'
import { theme } from '../components/Theme'

const Content = () => (
  <div
    css={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '32px',
      '@media (min-width: 600px)': {
        flexDirection: 'row',
        alignItems: 'center',
      },
    }}
  >
    <Typography
      variant='h2'
      css={{
        textAlign: 'center',
        '@media (min-width: 600px)': {
          textAlign: 'left',
        },
      }}
    >
      Anders Markendahl
    </Typography>

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
        alt='Anders profile'
        css={{
          width: '100%',
          height: 'auto',
        }}
      />
    </div>
  </div>
)

export const Profile = ({ id }: { id: string }) => (
  <div id={id}>
    <Content />
  </div>
)
