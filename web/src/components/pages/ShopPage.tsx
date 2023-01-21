import { AppBar, Toolbar, Typography } from '@mui/material'
import CartIcon from '@mui/icons-material/Shop'
import Header from '@/components/atoms/Header'
import ContentOverview from '@/components/molecules/ContentOverview'
import ProductImageBoard from '@/components/organisms/ProductImageBoard'
import { Product } from '@/models/products'

type Props = {
  title: string
}

const overviewContent = `
  Raku-Buy is a web application that allows you to buy and sell items.
  You can also create your own shop and sell your items.
  `

const sampleProducts: Product[] = [
  {
    id: 'A001',
    name: 'sample1',
    description: 'This is a sample 1 product.',
    imageLink: '/sample/book.jpg',
  },
  {
    id: 'A002',
    name: 'sample2',
    description: 'This is a sample 2 product.',
    imageLink: '/sample/book.jpg',
  },
  {
    id: 'A003',
    name: 'sample3',
    description: 'This is a sample 3 product.',
    imageLink: '/sample/book.jpg',
  },
  {
    id: 'A004',
    name: 'sample4',
    description: 'This is a sample 4 product.',
    imageLink: '/sample/book.jpg',
  },
  {
    id: 'A005',
    name: 'sample5',
    description: 'This is a sample 5 product.',
    imageLink: '/sample/book.jpg',
  },
]

export default function ShopPage(props: Props) {
  const { title } = props
  return (
    <>
      <AppBar position='relative'>
        <Header title={title} />
      </AppBar>
      <ContentOverview title='What is Raku-Buy?' sentence={overviewContent} />
      <ProductImageBoard products={sampleProducts} />
    </>
  )
}
