import React from 'react'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { formatPrice } from '../utils/helpers'
import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext()
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2>featured products</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center featured'>
        {featured.map((product) => {
          const { id, name, image, price } = product
          return (
            <article key={id} className='product'>
              <div className='container'>
                <img src={image} alt={name} />
                <Link to={`/products/${id}`} className='link'>
                  <FaSearch />
                </Link>
              </div>
              <footer>
                <h5>{name}</h5>
                <p>{formatPrice(price)}</p>
              </footer>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  footer {
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
  }

  footer p {
    color: var(--clr-primary-5);
    font-weight: 600;
    letter-spacing: var(--spacing);
  }
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    height: 225px;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }

  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedProducts
