import React from "react"
import { Link } from "gatsby"
import css from "./navigation.module.css"
import NavigationContainer from "../Containers/NavigationContainer"

const NavigationMenu = () => {
  return (
    <NavigationContainer>
      <nav className={css.navigation}>
        <Link to="/" data-img="0" className={css.link}>
          Home
        </Link>
        <Link to="/about/" data-img="1" className={css.link}>
          About
        </Link>
        <Link to="/projects/" data-img="2" className={css.link}>
          Projects
        </Link>
        <Link to="/contact/" data-img="3" className={css.link}>
          Contact
        </Link>
      </nav>
    </NavigationContainer>
  )
}

export default NavigationMenu
