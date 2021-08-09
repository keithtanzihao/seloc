import React from 'react'

import './ColesPlus.css'

function ColesPlus(props) {

  let itemActive = props.status === props.index ? 'colesplus-active': ''

  const actionHandler = () => {
    props.statusHandler(props.index)
  }

  return (
    <div className={`colesplus ${itemActive}`} onClick={actionHandler}>
      <span>Free Delivery</span>
      <span>&#38; more benefits with</span>
      <span>Coles Plus</span>
    </div>
  )
}

export default ColesPlus