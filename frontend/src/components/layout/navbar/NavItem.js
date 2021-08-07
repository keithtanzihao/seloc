import React from 'react'

import { IconContext } from 'react-icons'

import './NavItem.css'

const NavItem = (props) => {
  return (
    <li className='navItem'>
      <IconContext.Provider value={props.value}>
        <div className="navItemIcon">
          {props.icon}
        </div>
      </IconContext.Provider>
      <a href={props.linkUrl}>{props.linkTitle}</a>
    </li>
  )
}

export default NavItem