import * as React from 'react'
import { Container, Grid } from '@mui/material'
import ProductImageCard from '../molecules/ProductImageCard'
import { Product } from '@/models/products'

type Props = {
  products: Product[]
}

export default function ProductImageBoard(props: Props) {
  return (
    <Container sx={{ py: 8 }} maxWidth='md'>
      <Grid container spacing={4}>
        {props.products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductImageCard
              productId={product.id}
              title={product.name}
              content={product.description}
              image={product.imageLink}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
