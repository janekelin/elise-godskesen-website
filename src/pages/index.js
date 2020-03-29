import React from "react"
import Page from "../components/layout/Page"
import SectionContainer from "../components/layout/Containers/SectionContainer"
import css from "../styles/typography.module.css"

export default () => (
  <Page>
    <SectionContainer title="Presentation" titleSrOnly>
      <p>
        I am a front-end developer passionate about UX/UI, accessibility, and
        electronic services. I have a solid understanding of Git/GitHub, project
        management, customer service, and communication theory. In my free time
        I like to learn new technologies and frameworks.
      </p>
      <p>
        From <strong className={css.accent}>November 2019</strong>, I am a
        Front-End developer at Fitness24Seven.
      </p>
    </SectionContainer>
  </Page>
)
