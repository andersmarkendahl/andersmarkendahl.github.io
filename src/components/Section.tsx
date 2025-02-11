/** @jsx jsx */
import { jsx } from '@emotion/react'
import { ReactNode } from 'react'
import { Divider, Typography } from '@mui/material'

const SectionHeader = ({ title }: { title: string }) => (
  <div css={{ marginBottom: '8px', maxWidth: '300px' }}>
    <Typography variant='h4'>{title}</Typography>
    <Divider sx={{ width: '100%', borderBottomWidth: 4 }} orientation='horizontal' />
  </div>
)

export interface Props {
  id: string
  title: string
  children?: ReactNode
}

export const Section = ({ id, title, children }: Props) => (
  <div id={id}>
    <div css={{ marginBottom: '16px' }}>
      <SectionHeader title={title} />
    </div>
    {children}
  </div>
)
