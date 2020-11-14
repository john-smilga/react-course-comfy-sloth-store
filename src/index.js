import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
ReactDOM.render(
  <ProductsProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </ProductsProvider>,
  document.getElementById('root')
)
