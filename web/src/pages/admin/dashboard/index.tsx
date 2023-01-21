import { NextPage } from 'next'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import HomePage from '@/components/pages/HomePage'

const overviewContent = `
  Raku-Buy is a web application that allows you to buy and sell items.
  You can also create your own shop and sell your items.
  ここには、システム管理画面のホームを実装。ダッシュボードのようなものを作る。
  `

const Home: NextPage = () => {
  return (
    <>
      <HomePage title='Raku-Buy' overviewContent={overviewContent} />
    </>
  )
}

export default Home
