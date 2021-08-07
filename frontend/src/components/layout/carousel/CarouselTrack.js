import React, { useEffect } from 'react'

import Ads from '../ads/Ads'

import './CarouselTrack.css'

const CarouselTrack = (props) => {
  return (
    <ul className="carousel-track">
      {props.listOfAds.map((advert, index) => {
        return (
          <li className="carousel-item">
            {props.currIndex === index ? (
              <Ads css="ad-container focus">{advert}</Ads>
            ) : (
              <Ads css="ad-container">{advert}</Ads>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default CarouselTrack
