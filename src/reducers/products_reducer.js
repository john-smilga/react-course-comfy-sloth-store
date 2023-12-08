import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const products_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true }
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false }
  }

  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, isLoadingProducts: true }
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featuredProducts = action.payload.filter(
      (product) => product.featured === true
    )
    return {
      ...state,
      isLoadingProducts: false,
      products: action.payload,
      featuredProducts,
    }
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, isLoadingProducts: false, errorFetchingProducts: true }
  }
  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return {
      ...state,
      isLoadingSingleProduct: true,
      errorFetchingSingleProduct: false,
    }
  }
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      isLoadingSingleProduct: false,
      singleProduct: action.payload,
    }
  }
  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      isLoadingSingleProduct: false,
      errorFetchingSingleProduct: true,
    }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
