import React from "react"
import { Link } from "gatsby"
import css from './navigation.module.css'
import SectionContainer from '../../layout/SectionContainer'

const NavigationMenu = () => {
  return (
    <SectionContainer type="navigation">
      <h2 className="sr-only section__title">Navigation</h2>
      <nav className={css.navigation}>
        <Link to="/" data-img="0">
          Home
        </Link>
        <Link to="/about/" data-img="1">
          About
        </Link>
        <Link to="/projects/" data-img="2">
          Projects
        </Link>
        <Link to="/contact/" data-img="3">
          Contact
        </Link>
      </nav>
    </SectionContainer>
  )
}

export default NavigationMenu
