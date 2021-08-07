import React from 'react'

import Card from '../../../ui/card/Card'
import Button from '../../../ui/button/Button'

import './SelocPlus.css'

// Need a better way of doing this
import freeDeliveryImg from '../../../../utils/imgs/freeDelivery.svg'
import flybuysImg from '../../../../utils/imgs/flyBuys.svg'
import liquorLandImg from '../../../../utils/imgs/liquorLand.svg'
import customerCareImg from '../../../../utils/imgs/customerCare.svg'
import rapidClickImg from '../../../../utils/imgs/rapidClick.svg'

const SelocPlus = () => {
  return (
    <div className="ad-selocplus">
      <div className="ad-seloc-context">
        <h1>Introducing Seloc Plus</h1>
        <h2>Sign up today and enjoy a one month free trial!</h2>
      </div>

      <div className='ad-seloc-container'>

        <Card css='ad-seloc-card'>
          <img className='ad-seloc-icon' src={freeDeliveryImg} />
          <h1>Free Delivery</h1>
        </Card>
        <Card css='ad-seloc-card'>
          <img className='ad-seloc-icon' src={flybuysImg} />
          <h1>2× Flybuys points</h1>
        </Card>
        <Card css='ad-seloc-card'>
          <img className='ad-seloc-icon' src={liquorLandImg} />
          <h1>Liquorland Free Delivery</h1>
        </Card>
        <Card css='ad-seloc-card'>
          <img className='ad-seloc-icon' src={customerCareImg} />
          <h1>Priority Customer Care</h1>
        </Card>
        <Card css='ad-seloc-card'>
          <img className='ad-seloc-icon' src={rapidClickImg} />
          <h1>Free Rapid Click &#38; Collect</h1>
        </Card>
      </div>

      <Button css='ad-seloc-button'>Sign Up Now</Button>
    </div>
  )
}

export default SelocPlus