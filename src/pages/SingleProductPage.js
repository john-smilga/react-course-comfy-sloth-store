import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import { Loading, Error, ProductImages } from '../components'
import styled from 'styled-components'
const SingleProductPage = () => {
  const { id } = useParams()
  const history = useHistory()
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext()

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
  }, [id])
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push('/')
      }, 3000)
    }
  }, [error])
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }

  const {
    name,
    price,
    description,
    stock,
    id: sku,
    company,
    image: images,
  } = product
  return (
    <Wrapper className='page'>
      <div className='section-center product-center'>
        <ProductImages images={images} />
        <section className='content'>
          <h2>{name}</h2>
          <p>stars</p>
          <h5 className='price'>{formatPrice(price)}</h5>
          <p className='desc'>{description}</p>
          <p className='info'>
            <span>Available : </span>
            {stock ? 'In stock' : 'out of stock'}
          </p>
          <p className='info'>
            <span>SKU :</span>
            {sku}
          </p>
          <p className='info'>
            <span>Brand :</span>
            {company}
          </p>
        </section>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
  }
`

export default SingleProductPage
