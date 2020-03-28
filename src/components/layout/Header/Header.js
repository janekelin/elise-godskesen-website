import React from "react"
import NavigationMenu from "../NavigationMenu"
import { Link } from "gatsby"
import css from './header.module.css'

const Header = () => {
  return (
    <header className={css.header}
    >
      <Link to="/">
        <h1 className={css.heading} data-img="0">iana godskesen</h1>
      </Link>
      <NavigationMenu />
      <img
        id="js-portrait"
        className="portrait"
        src="build/images/b_image0.png"
        alt="Portrait of Iana Godskesen Kalinichenko"
      />
    </header>
  )
}

export default Header
