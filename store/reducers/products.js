import { productsInitials } from 'store/initialState'
import {
  PRODUCTS_CHANGE_PRODUCT_STORE,
  PRODUCTS_CHANGE_BULK_PRODUCT_STORE,

  // @TODO: FOR FUTURE FEATURE
  PRODUCTS_ADD_PRODUCT,
  PRODUCTS_UPDATE_PRODUCT,
  PRODUCTS_DELETE_PRODUCT,
  PRODUCTS_FETCH_PRODUCTS_REQUEST,
  PRODUCTS_FETCH_PRODUCTS_FAILURE,
  PRODUCTS_FETCH_PRODUCTS_SUCCESS
} from 'store/types'


const products = (state = productsInitials, action) => {
  switch (action.type) {
    case PRODUCTS_CHANGE_PRODUCT_STORE: {
      const { field, value } = action.payload
      return {
        ...state,
        [field]: value
      }
    }
    case PRODUCTS_CHANGE_BULK_PRODUCT_STORE: {
      const {
        productImage,
        name,
        price,
        sizes,
        colors,
        description
      } = action.payload
      return {
        ...state,
        productImage,
        name,
        price,
        sizes,
        colors,
        description
      }
    }


    // @TODO: FOR FUTURE FEATURE
    case PRODUCTS_FETCH_PRODUCTS_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case PRODUCTS_FETCH_PRODUCTS_FAILURE: {
      const { error } = action
      return {
        ...state,
        loading: false,
        error
      }
    }
    case PRODUCTS_FETCH_PRODUCTS_SUCCESS: {
      const { data } = action
      return {
        ...state,
        loading: false,
        data: data !== undefined ? data : null
      }
    }

    default:
      return state
  }
}

export default products