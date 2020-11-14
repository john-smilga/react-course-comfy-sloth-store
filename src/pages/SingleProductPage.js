import React, { useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
const url = `https://course-api.com/react-store-single-product?id=`
const SingleProductPage = () => {
  const { id } = useParams()
  const history = useHistory()
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product,
    fetchSingleProduct,
  } = useProductsContext()

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
  }, [id])
  useEffect(() => {
    console.log(error)
    if (error) {
      setTimeout(() => {
        history.push('/')
      }, 3000)
    }
  }, [error])
  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return (
      <div>
        there was an error
        <Link to='/'>Back Home</Link>
      </div>
    )
  }
  return <h2>single product {id}</h2>
}

export default SingleProductPage
