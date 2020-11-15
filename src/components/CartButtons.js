import React from 'react'
import { FaShoppingCart, FaUserMinus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
const CartButton = () => {
  const { closeSidebar } = useProductsContext()
  return (
    <Container className='cart-btn-wrapper'>
      <Link to='/cart' className='cart-btn' onClick={closeSidebar}>
        Cart
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>1</span>
        </span>
      </Link>
      <button type='button' className='auth-btn'>
        Login <FaUserMinus />
      </button>
    </Container>
  )
}

const Container = styled.div`
  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
  }
  .cart-container {
    display: inline-block;
    position: relative;
    margin-left: 5px;

    svg {
      height: 1.6rem;
      margin-bottom: -4px;
    }
  }
  .cart-value {
    position: absolute;
    top: -6px;
    right: -14px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 1rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    background: transparent;
    border-color: transparent;
    margin-left: 1.5rem;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-bottom: -4px;
    }
  }
`
export default CartButton
