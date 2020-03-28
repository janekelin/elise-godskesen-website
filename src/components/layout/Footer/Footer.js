import React from "react"
import css from './footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer className={css.footer}>
      <p>
        &copy;2018-2019 -
        <a href="mailto:iana@godskesen.consulting">
          <FontAwesomeIcon icon="envelope" /> Iana Godskesen Kalinichenko
        </a>
        .
      </p>
    </footer>
  )
}

export default Footer
