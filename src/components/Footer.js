import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return (
    <Container>
      <div>
        <h4>
          &copy; {new Date().getFullYear()}
          <span> ComfySloth </span>
        </h4>
        <h4>All rights reserved</h4>
      </div>
    </Container>
  )
}

const Container = styled.footer`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-5);
  }
  h4 {
    color: var(--clr-white);
    margin-bottom: 0;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
`

export default Footer
