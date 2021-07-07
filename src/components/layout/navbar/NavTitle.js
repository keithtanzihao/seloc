import { Fragment } from 'react'

import titleImg from './title.png'
import styles from './NavTitle.module.css'

const NavTitle = () => {
  return (
    <Fragment>
      <div className={styles.container}>
        <a className={styles.title}>SELOC</a>
      </div>
    </Fragment>
  )
}

export default NavTitle
