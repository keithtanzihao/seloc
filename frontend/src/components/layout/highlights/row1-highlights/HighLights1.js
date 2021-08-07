import React from 'react'

import Card from '../../../ui/card/Card'

import './HighLights1.css'
import orgFoodImg from '../../../../utils/imgs/organicFoods.png'
import dairyImg from '../../../../utils/imgs/dairyProducts.png'
import chocoImg from '../../../../utils/imgs/mnmChoco.png'
import readyMealImg from '../../../../utils/imgs/readyMeals.png'

import halfPriceImg from '../../../../utils/imgs/halfPrice.svg'
import specialPriceImg from '../../../../utils/imgs/specialPrice.svg'

function HighLights1(props) {
  return (
    <React.Fragment>

      <Card css='hl1-card'>
        <div className='hl1-backdrop'>&nbsp;</div>
        <div className='hl1-img-container'>
          <img className='hl1-icon' src={halfPriceImg} />
          <img className='hl1-img' src={orgFoodImg} />
        </div>

        <a href="#">
          <h1>Save 50% off Organic Foods</h1>
          <span>&gt;</span>
        </a>

      </Card>

      <Card css='hl1-card'>
        <div className='hl1-backdrop'>&nbsp;</div>
        <div className='hl1-img-container'>
          <img className='hl1-icon' src={specialPriceImg} />
          <img className='hl1-img' src={dairyImg} />
        </div>

        <a href="#">
          <h1>Save on Dairy Products</h1>
          <span>&gt;</span>
        </a>

      </Card>

      <Card css='hl1-card'>
        <div className='hl1-backdrop'>&nbsp;</div>
        <div className='hl1-img-container'>
          <img className='hl1-icon' src={specialPriceImg} />
          <img className='hl1-img' src={chocoImg} />
        </div>

        <a href="#">
          <h1>Confectionery Special</h1>
          <span>&gt;</span>
        </a>

      </Card>

      <Card css='hl1-card'>
        <div className='hl1-backdrop'>&nbsp;</div>
        <div className='hl1-img-container'>
          <img className='hl1-icon' src={halfPriceImg} />
          <img className='hl1-img' src={readyMealImg} />
        </div>

        <a href="#">
          <h1>Cheap ready to go Meals</h1>
          <span>&gt;</span>
        </a>
      </Card>

    </React.Fragment>
  )
}

export default HighLights1


