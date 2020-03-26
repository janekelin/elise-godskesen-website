import React from 'react';

const NavigationMenu = () => {
  return (
    <section id="mainNav" class="navigation">
        <h2 class="sr-only section__title">Navigation</h2>
        <nav class="container--flex">
          <a href="#home" data-img="0">Home</a>
          <a href="#about" data-img="1">About</a>
          <a href="#projects" data-img="2">Projects</a>
          <a href="#contact" data-img="3">Contact</a>
        </nav>
      </section>
  );
};

export default NavigationMenu;