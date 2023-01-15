import * as React from 'react'
import { Typography } from '@mui/material'
import { sentenceClass } from '@/components/atoms/types'

type Props = {
  sentence: string
  class: sentenceClass
}

export default function Sentences(props: Props) {
  return (
    <Typography variant={props.class} color='text.secondary' paragraph>
      {props.sentence}
    </Typography>
  )
}
