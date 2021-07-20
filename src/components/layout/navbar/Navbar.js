import React from 'react'
import NavItem from './NavItem'

import { IconContext } from 'react-icons'
import {
  MdHome,
  MdShoppingCart,
  MdShoppingBasket,
  MdAttachMoney,
} from 'react-icons/md'

import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <NavItem
          value={{
            color: 'white',
            size: '2rem'
          }}
          icon={<MdHome />}
          linkUrl="/"
          linkTitle="Home"
        />
        <NavItem
          value={{
            color: 'white',
            size: '2rem'
          }}
          icon={<MdShoppingCart/>}
          linkUrl="/"
          linkTitle="Everything"
        />
        <NavItem
          value={{
            color: 'white',
            size: '2rem'
          }}
          icon={<MdShoppingBasket/>}
          linkUrl="/"
          linkTitle="Bought Before"
        />
        <NavItem
          value={{
            color: 'white',
            size: '2rem'
          }}
          icon={<MdAttachMoney/>}
          linkUrl="/"
          linkTitle="Specials"
        />
      </ul>
    </nav>
  )
}

export default Navbar
