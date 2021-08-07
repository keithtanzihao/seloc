import React from 'react'

import Card from '../../../ui/card/Card'
import Button from '../../../ui/button/Button'

import './LowerCostAd.css'

import productColes from '../../../../utils/imgs/productsColes.png'

const LowerCostAd = (props) => {

  const clickButton = () => {
    console.log('BUTTON clicked')
  }

  return (
    <div className='ad-lowercost'>
      <img className='ad-lowercost-img' src={productColes}/>
      <Card css='ad-lowercost-card'>
        <h1>Helping lower the cost of your weekly shop</h1>
        <Button css='ad-lowercost-button' content='Shop now' onClick={clickButton}/>
      </Card>
    </div>
  )
}

export default LowerCostAd