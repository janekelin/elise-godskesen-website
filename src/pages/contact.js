import React from "react"
import Page from "../components/layout/Page"

export default () => (
  <Page>
    <section id="contact" className="container--flex content--wrapped">
      <h2 className="sr-only section__title">My contact details</h2>
      <div id="linkedin">
        <a href="https://www.linkedin.com/in/ianagodskesen/">
          <span className="sr-only">My LinkedIn</span>
          <i className="fab fa-linkedin fa-10x"></i>
        </a>
      </div>
      <div id="github">
        <a href="https://github.com/janekelin">
          <span className="sr-only">My GitHub</span>
          <i className="fab fa-github-square fa-10x"></i>
        </a>
      </div>
      <div id="twitter">
        <a href="https://twitter.com/_janekelin">
          <span className="sr-only">My Twitter</span>
          <i className="fab fa-twitter-square fa-10x"></i>
        </a>
      </div>
      <div id="codepen">
        <a href="https://codepen.io/janekelin">
          <span className="sr-only">My CodePen</span>
          <i className="fab fa-codepen fa-10x"></i>
        </a>
      </div>
    </section>
  </Page>
)
