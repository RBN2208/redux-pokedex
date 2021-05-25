/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setProducts } from '../redux/actions/productActions'
import axios from 'axios'
import ProductComponent from './ProductComponent'

export default function ProductListing() {
  const products = useSelector(state => state.allProducts.products)

  const dispatch = useDispatch()

  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch(err => {
        console.log(err)
      })
    dispatch(setProducts(response.data))
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      <ProductComponent />
    </div>
  )
}
