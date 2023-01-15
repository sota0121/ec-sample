import * as React from 'react'
import { Toolbar, Typography } from '@mui/material'
import CartIcon from '@mui/icons-material/Shop'

type Props = {
  title: string
}

export default function Header(props: Props) {
  return (
    <Toolbar>
      <CartIcon sx={{ mr: 2 }} />
      <Typography variant='h6' color='inherit' noWrap>
        {props.title}
      </Typography>
    </Toolbar>
  )
}
