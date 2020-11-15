import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../assets/hero-bcg.jpeg'
const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>
          design your <br />
          comfort zone
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>
        <Link to='/products' className='btn hero-btn'>
          shop now
        </Link>
      </article>
      <article className='img-container'>
        <img src={heroBcg} alt='nice table' />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 40vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
  }
  @media (min-width: 992px) {
    min-height: 60vh;
    padding: 5rem 0;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    h1 {
      margin-bottom: 2rem;
    }
    .hero-btn {
      padding: 0.5rem 1rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
      img {
        width: 100%;
        position: relative;
        border-radius: var(--radius);
      }
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 94%;
      background: var(--clr-primary-9);
      top: 10%;
      left: -6%;
      border-radius: var(--radius);
    }
  }
`

export default Hero
