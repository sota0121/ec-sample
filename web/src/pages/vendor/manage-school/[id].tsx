import * as React from 'react'
import { NextPage } from 'next'
import { NextRouter, useRouter } from 'next/router'
import { Button } from '@mui/material'

const SchoolManagePage: NextPage = () => {
  // TODO: Get school data from API
  const router = useRouter()
  const { id } = router.query

  // Event handlers
  const handleOnClick = (router: NextRouter) => {
    const link = `/shop`
    router.push(link)
  }

  return (
    <div>
      <h1>School ID is {id}</h1>
      <p>School Description is here.</p>
      <p>ここには任意の学校の編集画面を実装する</p>
      <Button variant='contained' color='primary' onClick={() => handleOnClick(router)}>
        Move To Shop Page
      </Button>
    </div>
  )
}

export default SchoolManagePage
