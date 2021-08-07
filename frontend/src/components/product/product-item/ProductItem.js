import React from 'react'

import Card from '../../ui/card/Card'
import Button from '../../ui/button/Button'

import './ProductItem.css'
import './DiscountTypes.css'

function ProductItem(props) {

  return (
    <Card css='prod-card card-special'>
      <div className='prod-content'>
        <span className='prod-discount dis-special'>product.discount</span>
        <div className='prod-img-container' >
          <img className='prod-img' src={`https://spoonacular.com/productImages/${props.product.id}-636x393.jpg?apiKey=c54fc793d8d742a19ab5936f577292e2`} alt="" />
        </div>
        <span className='prod-title'>{props.product.title}</span>
        <span className='prod-price'>${props.product.price}</span>
      </div>


      <Button css='prod-button'>Add Item</Button>

    </Card>
  )
}

export default ProductItem