/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  selectedProduct,
  removeSelectedProduct,
} from '../redux/actions/productActions'

export default function ProductDetails() {
  let product = useSelector(state => state.product)
  const { image, title, price, category, description } = product
  const { productId } = useParams()
  const dispatch = useDispatch()

  const fetchProductDetail = async id => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch(err => {
        console.log('Err', err)
      })

    dispatch(selectedProduct(response.data))
  }

  useEffect(() => {
    if (productId && productId !== '') fetchProductDetail(productId)
    return () => {
      dispatch(removeSelectedProduct())
    }
  }, [productId])
  return (
    <>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div>
          <img width="150" src={image} alt="" />
          <h1>{title}</h1>
          <p>${price}</p>
          <h3>{category}</h3>
          <p>{description}</p>
        </div>
      )}
    </>
  )
}
