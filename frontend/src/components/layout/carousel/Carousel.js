import React, { useEffect } from 'react'

import LowerCostAd from '../ads/adsList/LowerCostAd'
import FreshFoodAd from '../ads/adsList/FreshFoodAd'
import CarouselNav from './CarouselNav'
import CarouselTrack from './CarouselTrack'

import { IconContext } from 'react-icons'
import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from 'react-icons/fi'

import './Carousel.css'
import SelocPlus from '../ads/adsList/SelocPlus'

const Carousel = (props) => {

  const items = [<LowerCostAd />, <FreshFoodAd />, <SelocPlus/>]

  const [carouselIndex, setCarouselIndex] =
    React.useState(0)

  // Dont call current state within same function as set state function you baboon
  const minusIndexHandler = () => {
    carouselIndex > 0 && setCarouselIndex(carouselIndex - 1)
  }

  const addIndexHandler = () => {
    carouselIndex < items.length - 1 &&
      setCarouselIndex(carouselIndex + 1)
  }

  const setIndexHandler = (num) => {
    setCarouselIndex(num)
  }

  console.log(`carouselindex: ${carouselIndex}`)

  return (
    <div className="carousel-container">
      <IconContext.Provider value={{ className: 'carousel-overlay-left-arrow' }}>
        <FiArrowLeftCircle onClick={minusIndexHandler} />
      </IconContext.Provider>

      <CarouselNav
        listOfAds={items}
        currIndex={carouselIndex}
        setIndexHandler={setIndexHandler}
      />

      <IconContext.Provider value={{ className: 'carousel-overlay-right-arrow' }}>
        <FiArrowRightCircle onClick={addIndexHandler} />
      </IconContext.Provider>

      <div className="carousel-backdrop">
        <CarouselTrack listOfAds={items} currIndex={carouselIndex}/>
      </div>
    </div>
  )
}

export default Carousel
