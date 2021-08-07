import React from 'react'

import Card from '../../../../ui/card/Card'
import Button from '../../../../ui/button/Button'

import './CyberSale.css'
import cybersaleImg from '../../../../../utils/imgs/cybersale.svg'
import discount10Img from '../../../../../utils/imgs/discount10.svg'

function CyberSale() {
  return (
    <React.Fragment>
      <Card css='cybersale-card'>
        <div className='cybersale-img-container'>
          <img className='cybersale-img-title' src={cybersaleImg} />
          <img className='cybersale-img-discount' src={discount10Img} />
        </div>

        <div className='cybersale-content'>
          <h1>when you spend $50 on Liquor</h1>
          <span>Applied automatically at checkout</span>

          <a href="#">T&#38;Cs apply</a>
          <Button css='cybersale-content-button'>Shop now</Button>
        </div>
      </Card>
    </React.Fragment>
  )
}

export default CyberSale