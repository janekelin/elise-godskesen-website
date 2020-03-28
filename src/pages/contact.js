import React from "react"
import Page from "../components/layout/Page"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => (
  <Page type="contact">
      <h2 className="sr-only section__title">My contact details</h2>
      <div id="linkedin">
        <a href="https://www.linkedin.com/in/ianagodskesen/">
          <span className="sr-only">My LinkedIn</span>
          <FontAwesomeIcon icon="linkedin" />
        </a>
      </div>
      <div id="github">
        <a href="https://github.com/janekelin">
          <span className="sr-only">My GitHub</span>
          <FontAwesomeIcon icon="github-square" />
        </a>
      </div>
      <div id="twitter">
        <a href="https://twitter.com/_janekelin">
          <span className="sr-only">My Twitter</span>
          <FontAwesomeIcon icon="twitter-square" />
        </a>
      </div>
      <div id="codepen">
        <a href="https://codepen.io/janekelin">
          <span className="sr-only">My CodePen</span>
          <FontAwesomeIcon icon="codepen" />
        </a>
      </div>
  </Page>
)
