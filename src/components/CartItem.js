import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import AmountButtons from './AmountButtons'
import { FaTrash } from 'react-icons/fa'
const CartItem = ({ image, name, color, price, amount }) => {
  const increase = () => {}
  const decrease = () => {}
  return (
    <Wrapper>
      <div className='title'>
        <img src={image} alt={name} />
        <div>
          <h5>{name}</h5>
          <p className='color'>
            color :
            <span style={{ background: color }} />
          </p>
        </div>
      </div>
      <h5 className='price'>{formatPrice(price)}</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className='subtotal'>{formatPrice(price * amount)}</h5>
      <button className='remove-btn'>
        <FaTrash />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  img {
    width: 100%;
    object-fit: cover;
    height: 200px;
    margin: 0 auto;
    display: block;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h5 {
    margin-bottom: 0.25rem;
  }
  .color {
    color: var(--clr-grey-5);
    font-size: 1rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      display: inline-block;
      width: 1rem;
      height: 1rem;
      background: red;
      margin-left: 0.5rem;
      border-radius: var(--radius);
    }
  }
  .price {
    color: var(--clr-primary-5);
    margin-bottom: 0;
    font-weight: 400;
  }
  .subtotal {
    display: none;
  }
  .remove-btn {
    color: var(--clr-white);
    background: transparent;
    border: transparent;
    letter-spacing: var(--spacing);
    background: var(--clr-red-dark);
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 1rem;
    cursor: pointer;
  }
  @media (min-width: 776px) {
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--clr-grey-5);
      font-weight: 400;
    }
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;
    img {
      height: 100%;
      margin-bottom: 0;
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    h4 {
      font-size: 0.75rem;
    }
    .color {
      justify-content: flex-start;
    }
    .amount {
      font-size: 1.25rem;
    }
    .amount-btn {
      font-size: 0.85rem;
    }
  }
`

export default CartItem
