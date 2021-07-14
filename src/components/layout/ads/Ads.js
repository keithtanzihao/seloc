import React, { Fragment } from 'react'

import Card from '../../ui/card/Card'
import Button from '../../ui/button/Button'

import './Ads.css'
import promoImg from '../../../utils/imgs/discount.png'
import berryImg from '../../../utils/imgs/berrymix.png'

// Refactoring required
const Ads = (props) => {
  return (
    <div className="adContainer">
      <Card css="base cardLight1 bg1 size2">
        <div className="adContent">
          <h1 className="adHeader">Organic Bar</h1>
          <p className="adText">
            Especially suitable for athletes, but also ideal
            for preventing fatigue and loss of productivity.
          </p>
          <Button css="btn-adBerry" content="Shop now" />
        </div>

        <div className="adImg">
          <img className="berryImg" src={berryImg} />
        </div>
      </Card>

      <Card css="base cardDark size1">
        <div className="adImg">
          <img className="promoImg" src={promoImg} />
        </div>
      </Card>
    </div>
  )
}

export default Ads
