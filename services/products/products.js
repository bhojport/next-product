import fetch from 'cross-fetch'
import getConfig from 'next/config'
import { utilProductsGetBack } from 'utils'

const { publicRuntimeConfig } = getConfig()
const { API_URL } = publicRuntimeConfig

// @TODO: Use config for api url
// eg. PRODUCTS_API_URL=`${API_URL}/products`
export const countProducts = async () => {
  return await fetch(`${API_URL}/products/count`)
}
export const getProducts = async (skip, limit) => {
  return await fetch(`${API_URL}/products?filter[limit]=${limit}&filter[skip]=${skip}`)
}
export const getProduct = async (id) => {
  return await fetch(`${API_URL}/products/${id}`)
}

export const saveProduct = async (id, data) => {
  const requestUrl = id ? `${API_URL}/products/${id}` : `${API_URL}/products`
  const storeProduct = await fetch(requestUrl, {
    // @TODO: Use config for headers, etc.
    method: id ? 'PUT' : 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  if (storeProduct.ok) {
    utilProductsGetBack()()
  }
}

export const deleteProduct = async (id) => {
  const requestUrl = `${API_URL}/products/${id}`
  const removeProduct = await fetch(requestUrl, { method: 'DELETE' })
  if(removeProduct.ok) {
    utilProductsGetBack()()
  }
}
