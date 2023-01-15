import * as React from 'react'
import { Typography } from '@mui/material'
import { sentenceClass } from '@/components/atoms/types'

type Props = {
  title: string
  class: sentenceClass
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify'
}

export default function ContentTitle(props: Props) {
  const align = props.align ? props.align : 'center'
  return (
    <Typography
      component='h1'
      variant={props.class}
      align={align}
      color='text.primary'
      gutterBottom
    >
      {props.title}
    </Typography>
  )
}
