import React from 'react'

import Card from '../../../ui/card/Card'
import Button from '../../../ui/button/Button'

import { IconContext } from 'react-icons'
import { GiFruitBowl } from 'react-icons/gi'

import './FreshFoodAd.css'
import freshFoodImg from '../../../../utils/imgs/freshFood.jfif'

const FreshFoodAd = (props) => {
  const clickButton = () => {
    console.log('BUTTON clicked')
  }

  return (
    <div className="ad-fresh">
      <Card css="ad-fresh-card">
        <IconContext.Provider value={{ className: 'ad-fresh-icon' }}>
          <GiFruitBowl />
        </IconContext.Provider>

        <div className="ad-fresh-content">
          <h1>Tasty &#38; Healthy</h1>
          <h1>Organic Food</h1>
          <Button
            css="ad-fresh-button"
            content="Shop now"
            onClick={clickButton}
          />
        </div>
        
      </Card>
      <img className="ad-fresh-img" src={freshFoodImg} />
    </div>
  )
}

export default FreshFoodAd
