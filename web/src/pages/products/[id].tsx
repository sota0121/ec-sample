import * as React from 'react'
import { NextPage } from 'next'
import { NextRouter, useRouter } from 'next/router'
import { Button } from '@mui/material'

const ProductPage: NextPage = () => {
  // TODO: Get product data from API
  const router = useRouter()
  const { id } = router.query

  // Event handlers
  const handleOnClick = (router: NextRouter) => {
    const link = `/shop`
    router.push(link)
  }

  return (
    <div>
      <h1>Product ID is {id}</h1>
      <p>Product Description is here.</p>
      <Button variant='contained' color='primary' onClick={() => handleOnClick(router)}>
        Move To Shop Page
      </Button>
    </div>
  )
}

export default ProductPage
