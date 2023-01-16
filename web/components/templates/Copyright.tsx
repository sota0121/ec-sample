import * as React from 'react'
import { Typography, Link } from '@mui/material'

export default function Copyright(props: any) {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      <Link color='inherit' href='http://s-hon.co.jp/'>
        SHIRAISHI SHOTEN
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
