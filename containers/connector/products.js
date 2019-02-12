import {
  actionChangeStore,
  actionChangeBulkStore
} from 'store/actions'
export const mapStateToProps = (state) => {
  const getStoreProduct = {
    productImage: state.productImage,
    name: state.name,
    price: state.price,
    sizes: state.sizes,
    colors: state.colors,
    description: state.description,
  }
  return {
    getStoreProduct
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    onChangeStore: (field, value) => {
      dispatch(actionChangeStore({ field, value }))
    },
    onChangeBulkStore: (payload) => {
      dispatch(actionChangeBulkStore(payload))
    }
  }
}