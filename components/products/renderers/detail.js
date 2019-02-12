import {
  utilProductsGetBack,
  utilProductsEditItem
} from '/utils'

const detail = ({ id, content, ...handler }) => {

  if (!content) return null

  const {
    productImage,
    name,
    price,
    sizes,
    colors,
    description,
  } = content
  const { onDeleteProduct } = handler


  return productImage && (
    <>
      <div className="col-12 mb-2">
        <div className="row">
          <div className="offset-6 col-6">
            <button type="button" className="btn btn-secondary mr-3" onClick={utilProductsEditItem(id)}>Edit this item</button>
            <button type="button" className="btn text-danger" onClick={onDeleteProduct(id)}>Delete this item</button>
            <button type="button" className="float-right btn" onClick={utilProductsGetBack(id)}>Go to listing</button>
          </div>
        </div>
      </div>
      <div className="col">
        {/* Need to refactor for image paths (using config) */}
        <img src={`/static/images/${productImage}`} alt="..." className="img-fluid w-100" />
      </div>
      <div className="col">
        <h1 className="border border-left-0 border-right-0">{name}</h1>
        <p>{description}</p>
        <dl>
          <dt>Price</dt>
          <dd>{price}</dd>
          <dt className="mt-4">Sizes</dt>
          <dd>
            {
              sizes.map((size, i) => (
                <span className="text-center border d-inline-block p-2 mr-2" key={`size-${i}`}>{size}</span>
              ))
            }
          </dd>
          <dt className="mt-4">Colors</dt>
          <dd className="text-white">
            {
              colors.map((color, i) => {
                // need to refactor this :) I don't like switches :P
                let colorClass
                switch (color.toLowerCase()) {
                  case 'red':
                    colorClass = 'bg-danger'
                    break
                  case 'green':
                    colorClass = 'bg-success'
                    break
                  case 'blue':
                    colorClass = 'bg-primary'
                    break
                  case 'black':
                    colorClass = 'bg-primary'
                    break
                  default:
                    break;
                }
                return <span className={`${colorClass} text-center d-inline-block p-2 mr-2`} key={`color-${i}`}>{color}</span>
              })
            }
          </dd>
        </dl>
      </div>
    </>
  )

  // need to check if id doesn't match with the server product id, then show error page
  // it would just be okay to set state error to true
  // then render error page
}

export default detail