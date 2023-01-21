import * as React from 'react'
import { Box, Container } from '@mui/material'
import ContentTitle from '@/components/atoms/ContentTitle'
import Sentences from '@/components/atoms/Sentences'

type Props = {
  title: string
  sentence: string
}

export default function ContentOverview(props: Props) {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth='sm'>
        <ContentTitle title={props.title} class='h2' />
        <Sentences sentence={props.sentence} class='h5' />
      </Container>
    </Box>
  )
}
