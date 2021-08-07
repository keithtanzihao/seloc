import React from 'react'

import './DisplayProduct.css'

/**
 * DisplayProduct
 * 
 * Required to maintain container sizing
 * 
 * Might have to relook at the container component. This is kinda redudant but 
 * necessary for now if i dont change the container's css.
 * 
 * @param {*} props 
 * @returns 
 */

const DisplayProduct = (props) => {
  return (
    <div className={props.css}>
      {props.children}
    </div>
  )
}

export default DisplayProduct
