import SectionTitle from '../../ui/header/SectionTitle'
import Product from '../../product/Product'

import './Carousel.css'

import { listOfBeans } from '../../../TempProductDB'

const Carousel = (props) => {
  return (
    <div className="sectionContainer">
      <SectionTitle content=" Discounted goods" />
      <div className='sectionCarousel'>
        {listOfBeans.map((product) => {
          return <Product product={product} />
        })}
      </div>
    </div>
  )
}

export default Carousel
