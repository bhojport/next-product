import {
  listRenderer as List,
  itemRenderer as Item,
  detailRenderer as Detail
} from './renderers'

const Products = (props) => {
  const { id, isNew, isEdit, ...rest } = props
  const { content, ...handlers } = rest

  if (isNew) return <Item {...handlers} />
  if (isEdit) return <Item {...props} />
  if (id) return <Detail {...props} />
  return <List {...props} />
}

export default Products
