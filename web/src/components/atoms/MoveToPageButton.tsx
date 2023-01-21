import * as React from 'react'
import { NextRouter, useRouter } from 'next/router'
import { Button } from '@mui/material'

type Props = {
  variant?: 'text' | 'outlined' | 'contained' | undefined
  color?: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | undefined
  sx?: object
  text: string
  link?: string
  rootLink?: string
  urlParams?: string
}

const sxDefault = {
  margin: '0.5rem',
}

export default function MoveToPageButton(props: Props) {
  // Props
  const { variant = 'contained', color = 'primary', sx = sxDefault } = props

  // Hooks
  const router = useRouter()

  // Create link string
  const link = props.link
    ? props.link
    : props.rootLink
    ? props.rootLink + '/' + props.urlParams
    : ''

  // Event handlers
  const handleOnClick = (link: string) => {
    router.push(link)
  }

  return (
    <Button variant={variant} color={color} sx={sx} onClick={() => handleOnClick(link)}>
      {props.text}
    </Button>
  )
}
