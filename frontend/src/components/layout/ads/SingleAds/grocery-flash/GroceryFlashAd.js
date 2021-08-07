import React from 'react'

import Card from '../../../../ui/card/Card'
import Button from '../../../../ui/button/Button'

import { IconContext } from 'react-icons'
import { FaTruck } from 'react-icons/fa'
import { BiWind } from 'react-icons/bi'

import './GroceryFlashAd.css'

function GroceryFlashAd() {
  return (
    <React.Fragment>
      <Card css='sa-gf-card'>
        <div className="sa-gf-content">
          <h1>Need groceries in a flash ?</h1>
          <span>Simply order online by 1am and we'll deliver your groceries the same day</span>
          <span>$14 fee, 50 item limit, min spend $30</span>
          <a href="#">Find out more</a>
        </div>
        
        <Button css='sa-gf-button'>Select Delivery Time</Button>

        <div className='sa-gf-img'>
          <IconContext.Provider value={{ className: 'sa-gf-truck' }}>
            <FaTruck />
          </IconContext.Provider>

          <IconContext.Provider value={{ className: 'sa-gf-dash' }}>
            <BiWind />
          </IconContext.Provider>
        </div>
      </Card>

    </React.Fragment>
  )
}

export default GroceryFlashAd