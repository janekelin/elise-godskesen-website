import React from "react"
import css from './footer.module.css'

const Footer = () => {
  return (
    <footer className={css.footer}>
      <p>
        &copy;2018-2019 -
        <a href="mailto:iana@godskesen.consulting">
          <i className="fas fa-envelope"></i> Iana Godskesen Kalinichenko
        </a>
        .
      </p>
    </footer>
  )
}

export default Footer
