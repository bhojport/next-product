import { utilProductsGetBack } from '/utils'

const item = (props) => {
  const { id, onChangeProducts, onAddProduct, onSaveAndNew, getStoreProduct } = props
  const {
    productImage,
    name,
    price,
    sizes,
    colors,
    description,
  } = getStoreProduct

  return (
    <form className="col-5 mx-auto">

      <div className="form-group clearfix">
        <button type="button" className="float-right btn p-0" onClick={utilProductsGetBack()}>Go to listing</button>
      </div>

      { /* Choose image */}
      <div className="form-group">
        {/* <div className="input-group row">
        <label htmlFor="inputProductImage" className="col col-form-label">Choose image:</label>
      </div>
      <div className="input-group mb-3">
        <div className="custom-file">
          <input type="file" className="custom-file-input" id="inputProductImage" />
          <label className="custom-file-label" htmlFor="inputProductImage" aria-describedby="inputProductImage">Choose product image...</label>
        </div>
      </div> */}

        <div className="form-group">
          <small className="d-block p-2 bg-danger text-white">ALL FIELDS ARE REQUIRED.</small>
          <small>No validation is added and thus no error will throw. So, please fill all the fields for now.</small>
        </div>

        <div className="form-group">
          <label htmlFor="inputProductImageName">Product image:</label>
          <input type="text" className="form-control" id="inputProductImageName" aria-describedby="inputProductImageName" placeholder="Input product image name..." name="productImage" onChange={onChangeProducts()} value={productImage} />
        </div>
        <div className="input-group row">
          <small className="col text-success">Upload is not availble for now. You can enter product image with extension. For eg. "canvas.jpg" will select images from static directory.</small>
        </div>
      </div>

      { /* Product name */}
      <div className="form-group">
        <label htmlFor="inputProductName">Product name:</label>
        <input type="text" className="form-control" id="inputProductName" aria-describedby="inputProductName" placeholder="Input product name..." name="name" onChange={onChangeProducts()} value={name} />
      </div>

      { /* Product price */}
      <div className="form-group">
        <label htmlFor="inputProductPrice">Product price:</label>
        <input type="text" className="form-control" id="inputProductPrice" aria-describedby="inputProductPrice" placeholder="Input product price..." name="price" onChange={onChangeProducts()} value={price} />
      </div>

      { /* Product sizes */}
      <div className="form-group">
        <label htmlFor="selectProductSizes">Available product sizes:</label>
        <select multiple className="form-control" id="selectProductSizes" name="sizes" onChange={onChangeProducts()} value={sizes}>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>
      </div>

      { /* Product colors */}
      <div className="form-group">
        <label htmlFor="selectProductColors">Available product colors:</label>
        <select multiple className="form-control" id="selectProductColors" name="colors" onChange={onChangeProducts()} value={colors}>
          <option>Red</option>
          <option>Green</option>
          <option>Blue</option>
          <option>Black</option>
        </select>
      </div>

      { /* Product description */}
      <div className="form-group">
        <label htmlFor="inputProductDescription">Product description:</label>
        <textarea className="form-control" id="inputProductDescription" rows="3" placeholder="What is your product about?&#10;Please describe your product to get it more attention on users..." name="description" onChange={onChangeProducts()} value={description}></textarea>
      </div>

      <div className="form-group float-right">
        <button type="button" className="btn mr-3" onClick={onSaveAndNew(id)}>Save &amp; add another product</button>
        <button type="button" className="btn btn-primary" onClick={onAddProduct(id)}>Save this product</button>
      </div>

    </form>
  )
}

export default item