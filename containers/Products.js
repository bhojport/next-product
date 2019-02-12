import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import {
  serviceCountProducts,
  serviceGetProducts,
  serviceGetProduct,
  serviceSaveProduct,
  serviceDeleteProduct
} from 'services'
import {
  productsStateConnector,
  productsDispatchConnector
} from './connector'
import { ProductsComponent } from 'components'
import {
  utilProductsAddItem
} from 'utils'

class Products extends Component {
  state = {
    products: [],
    prev: false,
    next: false,
    beforeFirstBound: false,
    afterLastBound: false,
    boundPages: [],
    page: 1,
    limit: 3,
    skip: 3,
    lastPage: -1
  }

  onChangeProducts = () => (e) => {
    const { name: field, value, type } = e.target
    if (type === 'select-multiple') {
      const selectedValues = [...e.target.selectedOptions].map(sm => sm.value)
      this.props.onChangeStore(field, selectedValues)
    } else {
      this.props.onChangeStore(field, value)
    }
  }
  onAddNewAction = () => {
    const initialProduct = {
      productImage: '',
      name: '',
      price: '',
      sizes: [],
      colors: [],
      description: '',
    }
    this.props.onChangeBulkStore(initialProduct)
    utilProductsAddItem()
  }
  onAddProduct = (id) => async () => {
    return await serviceSaveProduct(id, this.props.getStoreProduct)
  }
  onSaveAndNew = (id) => () => {
    this.onAddProduct(id)
    this.onAddNewAction()
  }
  onDeleteProduct = (id) => async () => {
    return await serviceDeleteProduct(id)
  }
  componentDidUpdate(prevProps) {
    if (this.props.router.asPath !== prevProps.router.asPath) {
      this.paginateProductsComponent()
    }
  }
  async paginateProductsComponent() {

    const page = +this.props.router.query.page || 1
    const limit = +this.props.router.query.limit || 3

    const fetchTotal = await (await serviceCountProducts()).json()
    const total = fetchTotal.count
    const bound = 5
    const lastBound = Math.ceil(page + ((bound - 1) / 2))
    const lastPage = Math.ceil(total / limit)
    const skip = page * limit - limit

    let prev = page > 1
    let next = page < lastPage
    let beforeFirstBound = (page >= bound) && ((total / limit) > bound + 1)
    let afterLastBound = lastBound < lastPage - 1

    let boundPages = []
    let boundPageCounter = 1
    let boundPageFillLength = bound

    if(page < bound) {
      boundPageCounter = 1
    }
    else if(page >= bound && page <= lastPage - (bound - 1)) {
      boundPageCounter = page - Math.floor(bound/2)
    } else {
      boundPageCounter = lastPage - bound + 1
    }

    boundPages = Array.from({ length: boundPageFillLength }, (_, i) => i + boundPageCounter)

    if (page > lastPage) {
      prev = false
      next = false
      beforeFirstBound = false
      afterLastBound = false
      boundPages = []
    }

    this.setState({
      prev,
      next,
      beforeFirstBound,
      afterLastBound,
      boundPages,
      page,
      limit,
      lastPage
    })

    const { id } = this.props
    const products = await (await serviceGetProducts(skip, limit)).json()
    this.setState({ products })
    if (id) {
      const product = await (await serviceGetProduct(id)).json()
      this.props.onChangeBulkStore(product)
    }
  }

  componentDidMount() {
    this.paginateProductsComponent()
  }

  render() {
    const { id, getStoreProduct: product } = this.props
    const {
      products,
      prev,
      next,
      beforeFirstBound,
      afterLastBound,
      boundPages,
      page,
      limit,
      lastPage
    } = this.state


    return <ProductsComponent
      {...this.props}
      content={id ? product : products}
      prev={prev}
      next={next}
      beforeFirstBound={beforeFirstBound}
      afterLastBound={afterLastBound}
      boundPages={boundPages}
      page={page}
      limit={limit}
      lastPage={lastPage}

      onChangeProducts={this.onChangeProducts}
      onAddProduct={this.onAddProduct}
      onDeleteProduct={this.onDeleteProduct}
      onAddNewAction={this.onAddNewAction}
      onSaveAndNew={this.onSaveAndNew}
    />
  }
}

export default withRouter(connect(productsStateConnector, productsDispatchConnector)(Products))
