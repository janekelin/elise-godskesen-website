import React from 'react';
import Header from "../layout/Header";
import Footer from '../layout/Footer';

const Page = props => {
  return (
    <>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </>
  );
}

export default Page;