import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function ProductComponent() {
  const products = useSelector(state => state.allProducts.products)
  return (
    <div>
      {products.map(({ id, title, product, price, image, category }) => {
        return (
          <div key={id}>
            <h3>{title}</h3>
            <p>{product}</p>
            <p>{category}</p>
            <p>{price}</p>
            <Link to={`/product/${id}`}>
              <img src={image} alt="" width="200" height="200" />
            </Link>
          </div>
        )
      })}
    </div>
  )
}
