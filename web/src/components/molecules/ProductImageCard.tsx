import * as React from 'react'
import { NextRouter, useRouter } from 'next/router'
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'
import { ProductId } from '@/models/products'

type Props = {
  productId: ProductId
  title: string
  content: string
  image: string
}

export default function ProductImageCard(props: Props) {
  // Hooks
  const router = useRouter()

  // Event handlers
  const handleOnClick = (id: ProductId) => {
    const link = `/products/${id}`
    router.push(link)
  }

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        bgcolor: 'background.paper',
      }}
    >
      <CardMedia
        component='img'
        sx={{
          // 16:9
          // pt: '56.25%',
          height: '100%',
        }}
        image={props.image}
        alt={props.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant='h5' component='h2'>
          {props.title}
        </Typography>
        <Typography>{props.content}</Typography>
      </CardContent>
      <CardActions>
        <Button size='small' color='primary' onClick={() => handleOnClick(props.productId)}>
          View
        </Button>
      </CardActions>
    </Card>
  )
}
