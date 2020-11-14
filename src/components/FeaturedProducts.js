import React from 'react'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    products,
  } = useProductsContext()
  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>Error...</h1>
  }
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
      {products.map((product) => {
        const { id, name, image } = product
        return (
          <Link key={id} to={`/products/${id}`}>
            <article>
              <img src={image} alt={name} width='200' />
              <h4>{name}</h4>
            </article>
          </Link>
        )
      })}
    </div>
  )
}

export default FeaturedProducts
