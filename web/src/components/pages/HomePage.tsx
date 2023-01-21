import { AppBar, Box } from '@mui/material'
import Header from '@/components/atoms/Header'
import ContentOverview from '@/components/molecules/ContentOverview'
import MoveToPageButton from '@/components/atoms/MoveToPageButton'

type Props = {
  title: string
  overviewContent: string
}

export default function HomePage(props: Props) {
  const { title, overviewContent } = props
  return (
    <>
      <AppBar position='relative'>
        <Header title={title} />
      </AppBar>
      <ContentOverview title='What is Raku-Buy?' sentence={overviewContent} />
      <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, m: 'auto' }} maxWidth='sm'>
        <MoveToPageButton text={'Move to Shop'} link={'/shop'} sx={{ m: 'auto' }} />
      </Box>
    </>
  )
}
