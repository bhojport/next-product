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

export const changeStore = (payload) => ({ type: PRODUCTS_CHANGE_PRODUCT_STORE, payload })
export const changeBulkStore = (payload) => ({ type: PRODUCTS_CHANGE_BULK_PRODUCT_STORE, payload})

// @TODO: FOR FUTURE FEATURE
export const addProduct = (payload) => ({ type: PRODUCTS_ADD_PRODUCT, payload })
export const updateProduct = (payload) => ({ type: PRODUCTS_UPDATE_PRODUCT, payload })
export const deleteProduct = (payload) => ({ type: PRODUCTS_DELETE_PRODUCT, payload })
export const getRequest = (payload) => ({ type: PRODUCTS_FETCH_PRODUCTS_REQUEST, payload })
export const getFailure = (payload) => ({ type: PRODUCTS_FETCH_PRODUCTS_FAILURE, payload })
export const getSuccess = (payload) => ({ type: PRODUCTS_FETCH_PRODUCTS_SUCCESS, payload })
