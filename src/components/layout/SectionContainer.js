import React from 'react';
import containerStyles from './container.module.css';

const SectionContainer = ({ children, type }) => {
  return (
    <section className={containerStyles[type]}>
      {children}
    </section>
  );
}

export default SectionContainer;