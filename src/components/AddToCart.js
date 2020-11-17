import React, { useState } from 'react'
import styled from 'styled-components'
const AddToCart = ({ colors }) => {
  const [mainColor, setMainColor] = useState(colors[0])
  return (
    <Wrapper>
      <div className='colors'>
        <span>colors :</span>
        {colors.map((color, index) => {
          return (
            <button
              key={index}
              style={{ background: color }}
              className={`${
                mainColor === color ? 'color-btn active' : 'color-btn'
              }`}
              onClick={() => setMainColor(color)}
            />
          )
        })}
      </div>
      <button>add to cart</button>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
  }
  .active {
    border: 2px solid var(--clr-primary-5);
  }
`
export default AddToCart
