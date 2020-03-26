import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/layout/Header';

export default () => (
  <main>
    <section id="contact" class="container--flex content--wrapped">
        <h2 class="sr-only section__title">My contact details</h2>
        <div id="linkedin">
          <a href="https://www.linkedin.com/in/ianagodskesen/"
            ><span class="sr-only">My LinkedIn</span
            ><i class="fab fa-linkedin fa-10x"></i
          ></a>
        </div>
        <div id="github">
          <a href="https://github.com/janekelin"
            ><span class="sr-only">My GitHub</span
            ><i class="fab fa-github-square fa-10x"></i
          ></a>
        </div>
        <div id="twitter">
          <a href="https://twitter.com/_janekelin"
            ><span class="sr-only">My Twitter</span
            ><i class="fab fa-twitter-square fa-10x"></i
          ></a>
        </div>
        <div id="codepen">
          <a href="https://codepen.io/janekelin"
            ><span class="sr-only">My CodePen</span
            ><i class="fab fa-codepen fa-10x"></i
          ></a>
        </div>
      </section>
  </main>
  );