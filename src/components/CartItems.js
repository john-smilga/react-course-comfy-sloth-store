import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import CartItem from './CartItem'
import CartColumns from './CartColumns'
const CartItems = () => {
  const { cart } = useCartContext()

  return (
    <Wrapper className='section section-center'>
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />
      })}
      <hr />
      <footer></footer>
    </Wrapper>
  )
}
const Wrapper = styled.section``
export default CartItems
