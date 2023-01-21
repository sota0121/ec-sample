import { NextPage } from 'next'
import HomePage from '@/components/pages/HomePage'

const overviewContent = `
  Raku-Buy is a web application that allows you to buy and sell items.
  You can also create your own shop and sell your items.
  ここには、ここには書店のアカウント情報の編集画面を実装する。
  `

const Home: NextPage = () => {
  return (
    <>
      <HomePage title='Raku-Buy' overviewContent={overviewContent} />
    </>
  )
}

export default Home
