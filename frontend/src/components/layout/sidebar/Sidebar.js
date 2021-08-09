import React from 'react'

import ColesPlus from './sidebar-items/ColesPlus'
import SidebarItem from './sidebar-items/SidebarItem'

import { IconContext } from 'react-icons'
import { GiShoppingCart } from 'react-icons/gi'
import { FaTruck } from 'react-icons/fa'
import { BsPerson, BsChat } from 'react-icons/bs'


import './Sidebar.css'

function Sidebar() {

  const [status, setStatus] = React.useState(-1)

  const statusHandler = (index) => {
    setStatus(index)
  }

  return (
    <div className='sidebar'>
      <ColesPlus
        index={0}
        status={status}
        statusHandler={statusHandler}
      />

      <SidebarItem
        index={1}
        status={status}
        statusHandler={statusHandler}
        content='Trolley and checkout'
        icon={<GiShoppingCart />}>
      </SidebarItem>

      <SidebarItem
        index={2}
        status={status}
        statusHandler={statusHandler}
        content='Choose a delivery time'
        icon={<FaTruck />}
      />

      <SidebarItem
        index={3}
        status={status}
        statusHandler={statusHandler}
        content='Log in / Sign up'
        icon={<BsPerson />}
      />

      <SidebarItem
        index={4}
        status={status}
        statusHandler={statusHandler}
        content='Help / Support'
        icon={<BsChat />}
      />

    </div>
  )
}

export default Sidebar

