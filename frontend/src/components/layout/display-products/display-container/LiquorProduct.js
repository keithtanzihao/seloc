import React from 'react'

import DisplayTitle from '../display-title/DisplayTitle'
import DisplayProduct from '../display-product/DisplayProduct'
import CyberSale from '../../ads/ad-items/cybersale/CyberSale'
import ProductItem from '../../../product/product-item/ProductItem'

function LiquorProduct() {

  const [productList, setProductList] = React.useState([]);

  // May need to catch error ?
  React.useEffect(async () => {
    const response = await fetch('/main')
    const data = await response.json()
    setProductList(data)
  }, [])

  return (
    <React.Fragment>
      <DisplayTitle css='dis-title'>
        <h1>$10 off when you spend $50 on Liquor</h1>
      </DisplayTitle>

      <DisplayProduct css='dis-product'>
        <CyberSale />
        {productList.map(item => <ProductItem product={item} />)}
      </DisplayProduct>

    </React.Fragment>
  )
}

export default LiquorProduct