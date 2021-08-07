import React from 'react'

import './Card.css'

function Card(props) {
  return <div className={props.css}>{props.children}</div>
}
export default Card
