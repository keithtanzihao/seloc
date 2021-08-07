import Card from '../ui/card/Card'
import ProductForm from './ProductForm'

import './Product.css'

const Product = ({ product, css }) => {

  // Extremely scuffed implementation Pepeg laugh
  const costHandler = () => {
    return product.unit === 'g' || product.unit === 'ml'
      ? (
          (product.cost / parseFloat(product.weight)) *
          100
        ).toFixed(2)
      : (product.cost / parseFloat(product.weight)).toFixed(
          2
        )
  }

  const unitHandler = () => {
    return product.unit === 'g' || product.unit === 'ml'
      ? 100
      : 1
  }

  return (
    <Card css={css}>
      <div className="product">
        <div className="productImgContainer">
          <img className="productImg" src={product.img} />
        </div>

        <p className="productHead">{product.name}</p>

        <div className="productContainer">
          <span className="productCost">
            ${product.cost}
          </span>
          <span className="productUnit">
            {product.weight}
            {product.unit} | ${costHandler()} per{' '}
            {unitHandler()}
            {product.unit}
          </span>
        </div>

        <ProductForm/>
        
      </div>
    </Card>
  )
}

export default Product
