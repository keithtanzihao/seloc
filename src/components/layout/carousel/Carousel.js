import SectionTitle from '../../ui/header/SectionTitle'
import Product from '../../product/Product'

import './Carousel.css'
import { IconContext } from 'react-icons'
import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from 'react-icons/fi'

import { listOfBeans } from '../../../TempProductDB'
import { useState } from 'react'

const Carousel = (props) => {
  // EXTREMELY DODGY IMPLEMENTATION
  const productCSS = 'base sizeProduct cardWhite'

  const [list, setList] = useState(2)

  const nextProduct = () => {
    setList(list === listOfBeans.length - 1 ? 0 : list + 1)
  }

  const prevProduct = () => {
    setList(list === 0 ? listOfBeans.length - 1 : list - 1)
  }

  const carouselHandler = (currIndex, len, list) => {
    let array = []
    for (let i = -2; i <= 2; i++) {
      let val = currIndex + i
      if (val < 0) {
        val = len + i
      }
      if (val > len - 1) {
        val = val - len
      }
      array.push(list[val])
    }
    return array
  }

  console.log()

  return (
    <div className="sectionContainer">
      <SectionTitle content=" Discounted goods" />

      <div className="sectionCarousel">
        <IconContext.Provider value={{ size: '3rem' }}>
          <FiArrowLeftCircle onClick={nextProduct} />
        </IconContext.Provider>


        {/* Ignoring transitions for now need and need to deactivate buttons */}
        {carouselHandler(
          list,
          listOfBeans.length,
          listOfBeans
        ).map((product, index) => {
          return (
            <Product
              product={product}
              css={
                index === 0 || index === 4
                  ? productCSS + ' slide fading'
                  : productCSS + ' slide'
              }
            />
          )
        })}

        <IconContext.Provider value={{ size: '3rem' }}>
          <FiArrowRightCircle onClick={prevProduct} />
        </IconContext.Provider>
      </div>
    </div>
  )
}

export default Carousel
