import React from 'react';
import Page from '../components/layout/Page';
import SectionContainer from '../components/layout/Containers/SectionContainer';
import css from '../styles/typography.module.css';
import { graphql } from 'gatsby';

export default ({ data }) => (
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
      <p>
        On my blog I have {data.allMarkdownRemark.totalCount} post/s. Check it
        out:
      </p>
      {data.allMarkdownRemark.nodes.map(n => (
        <div key={n.id}>
          <h3>{n.frontmatter.title}</h3>
          <span>{n.frontmatter.date}</span>
          <p>{n.excerpt}</p>
        </div>
      ))}
    </SectionContainer>
  </Page>
);

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      nodes {
        id
        frontmatter {
          title
          date(formatString: "DD MM, YYYY")
        }
        excerpt
      }
    }
  }
`;
