import { utilProductsGetItemDetail } from 'utils'
export const listItems = (contents) => {
  return Object.keys(contents).map((key) => {
    const {
      id,
      productImage,
      name,
      price,
      sizes,
      colors
    } = contents[key]
    return (
      <tr onClick={utilProductsGetItemDetail(id)} key={`product-items-${key}`}>
        <th scope="row">
          <img src={`/static/images/${productImage}`} alt="..." className="img-thumbnail w-50" />
        </th>
        <td>{name}</td>
        <td>{price}</td>
        {sizes && <td>{sizes.join()}</td>}
        {colors && <td>{colors.join()}</td>}
      </tr>
    )
  })
}
