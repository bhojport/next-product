import { DefaultLayout } from 'components'
import { ProductsContainer } from 'containers'
import { withRouter } from 'next/router'


const Products = ({ router: { query } }) => {
  return (
    <DefaultLayout>
      <ProductsContainer {...query} />
    </DefaultLayout>
  )
}

export default withRouter(Products)