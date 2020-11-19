import React from 'react'
import styled from 'styled-components'
const Filters = () => {
  return (
    <Wrapper>
      <div className='content'>
        <h4>filters</h4>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .content {
    position: sticky;
    top: 1rem;
  }
`

export default Filters
