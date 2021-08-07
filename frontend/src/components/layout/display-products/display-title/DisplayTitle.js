import React from 'react'

import Button from '../../../ui/button/Button'

import './DisplayTitle.css'

const DisplayTitle = (props) => {
  return (
    <div className={props.css}>
      <h1>{props.children}</h1>
      <hr />
      <Button css='dis-title-button'>Shop all</Button>
    </div>
  )
}

export default DisplayTitle
