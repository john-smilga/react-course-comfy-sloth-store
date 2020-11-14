import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return (
    <Container>
      <h4>&copy;Comfy Sloth {new Date().getFullYear()}</h4>
    </Container>
  )
}

const Container = styled.footer`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--clr-black);
  h4 {
    color: var(--clr-white);
    margin-bottom: 0;
  }
`

export default Footer
