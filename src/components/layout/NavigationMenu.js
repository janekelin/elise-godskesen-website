import React from "react"
import { Link } from "gatsby"

const NavigationMenu = () => {
  return (
    <section id="mainNav" className="navigation">
      <h2 className="sr-only section__title">Navigation</h2>
      <nav className="container--flex">
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
    </section>
  )
}

export default NavigationMenu
