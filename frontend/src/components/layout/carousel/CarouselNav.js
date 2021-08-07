import React, { useEffect, useRef } from 'react'

import Button from '../../ui/button/Button'

import './CarouselNav.css'

const CarouselNav = (props) => {
  return (
    <div className="carousel-nav">
      {props.listOfAds.map((item, index) => {
        return (
          <Button
            id={index}
            css={
              props.currIndex === index
                ? 'carousel-nav-btn btn-selected'
                : 'carousel-nav-btn'
            }
            index={index}
            onClick={() => props.setIndexHandler(index)}
          ></Button>
        )
      })}
    </div>
  )
}

export default CarouselNav
