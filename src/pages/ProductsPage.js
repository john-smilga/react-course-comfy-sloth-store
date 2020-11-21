import React from 'react'
import styled from 'styled-components'
import { Filters, ProductList, Sort } from '../components'
const ProductsPage = () => {
  return (
    <Wrapper className='page'>
      <div className='title'>
        <h2>our products</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center products'>
        <Filters />
        <div>
          <Sort />
          <ProductList />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductsPage
