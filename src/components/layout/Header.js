import React from 'react';

const Header = () => {
  return (
    <header id="js-header" class="container--flex container--flex--vertical">
      <a href="/"><h1 data-img="0">iana godskesen</h1></a>
      <section id="mainNav" class="navigation">
        <h2 class="sr-only section__title">Navigation</h2>
        <nav class="container--flex">
          <a href="#home" data-img="0">Home</a>
          <a href="#about" data-img="1">About</a>
          <a href="#projects" data-img="2">Projects</a>
          <a href="#contact" data-img="3">Contact</a>
        </nav>
      </section>
      <img
        id="js-portrait"
        class="portrait"
        src="build/images/b_image0.png"
        alt="Portrait of Iana Godskesen Kalinichenko"
      />
    </header>
  );
};

export default Headers;