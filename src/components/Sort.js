import React from 'react'
import { useFilterContext } from '../context/filter_context'
import styled from 'styled-components'
const Sort = () => {
  const { filtered_products: products } = useFilterContext()

  return (
    <Wrapper>
      <div className='content'>
        <p>{products.length} products found</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-bottom: 2rem;
  p {
    text-transform: capitalize;
    font-weight: 500;
    margin-bottom: 0;
  }
`

export default Sort
