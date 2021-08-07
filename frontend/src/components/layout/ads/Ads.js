import React from 'react'

import './Ads.css'

// Refactoring required
const Ads = (props) => {
  return (
    <div className={props.css}>
      {props.children}
    </div>
  )
}

export default Ads
