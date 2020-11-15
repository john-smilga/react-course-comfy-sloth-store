import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return (
    <Container>
      <h4>
        &copy; {new Date().getFullYear()}
        <span> ComfySloth </span> All rights reserved
      </h4>
    </Container>
  )
}

const Container = styled.footer`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--clr-black);
  span {
    color: var(--clr-primary-5);
  }
  h4 {
    color: var(--clr-white);
    margin-bottom: 0;
    font-weight: 400;
    text-transform: none;
  }
`

export default Footer
