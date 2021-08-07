import React from 'react'

import Card from '../../../ui/card/Card'

import './HighLights2.css'
import teaProductImg from '../../../../utils/imgs/teaProduct.png'
import timTamImg from '../../../../utils/imgs/timTam.png'

import halfPriceImg from '../../../../utils/imgs/halfPrice.svg'
import specialPriceImg from '../../../../utils/imgs/specialPrice.svg'

function HighLights2(props) {
  return (
    <React.Fragment>

      <Card css='hl2-card'>
        <div className='hl2-img-container'>
          <img className='hl2-img' src={teaProductImg} />
        </div>

        <a href="#">
          <h1>Save 50% off Organic Foods</h1>
          <span>&gt;</span>
        </a>

      </Card>

      <Card css='hl2-card'>
        <div className='hl2-backdrop'>&nbsp;</div>
        <div className='hl2-img-container'>
          <img className='hl2-img' src={timTamImg} />
        </div>

        <a href="#">
          <h1>Dark Choc Banoffee Flavoured Tim Tams</h1>
          <span>&gt;</span>
        </a>

      </Card>

    </React.Fragment>
  )
}

export default HighLights2


