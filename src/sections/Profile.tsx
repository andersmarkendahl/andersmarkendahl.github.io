/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Grid, Typography } from '@mui/material'
import { profileImg } from './images'
import { theme } from '../components/Theme'

const Content = () => (
  <Grid
    container
    rowSpacing={4}
    columnSpacing={0}
    alignItems='center'
    justifyContent='flex-start'
    sx={{
      flexDirection: { xs: 'column', sm: 'row' },
    }}
  >
    <Grid item xs={12} sm={6}>
      <Typography variant='h2' align='left'>
        Anders Markendahl
      </Typography>
    </Grid>

    <Grid
      item
      xs={12}
      sm={6}
      sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' } }}
    >
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
    </Grid>
  </Grid>
)

export const Profile = ({ id }: { id: string }) => (
  <div id={id}>
    <Content />
  </div>
)
