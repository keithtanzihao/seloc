import React from 'react'

import { IconContext } from 'react-icons'
import { FaBullseye } from 'react-icons/fa'

import './SidebarItem.css'

function SidebarItem(props) {

  // Too scuffed
  let contentActive = props.status == props.index ? 'content-active' : ''
  let itemActive = props.status == props.index ? 'item-active' : ''
  let iconActive = props.status == props.index ? 'sidebar-icon-active' : 'sidebar-icon'
  
  const actionHandler = () => {
    props.statusHandler(props.index)
  }

  return (
    <div className={`sidebar-item ${itemActive}`} onClick={actionHandler}>
      <IconContext.Provider value={{ className: `${iconActive}` }}>
          {props.icon}
      </IconContext.Provider>
      {props.children}
      <span className={`sidebar-content ${contentActive}`}>{props.content}</span>
    </div>
  )
}

export default SidebarItem