import React from "react"
import NavigationMenu from "../layout/NavigationMenu"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header
      id="js-header"
      className="container--flex container--flex--vertical"
    >
      <Link to="/">
        <h1 data-img="0">iana godskesen</h1>
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

export default Header;
