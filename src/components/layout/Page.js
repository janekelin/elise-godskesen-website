import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import SectionContainer from "./SectionContainer"

const Page = ({ children, type}) => {
  return (
    <>
      <Header />
      <main>
        <SectionContainer children={children} type={type} />
      </main>
      <Footer />
    </>
  )
}

export default Page
