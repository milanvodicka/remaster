import React from "react"
import Layout from "../components/Layout"
import AboutUs from "../components/sections/AboutUs"
import Services from "../components/sections/Services"
import References from "../components/sections/References"
import Contact from "../components/sections/Contact"

const IndexPage = () => (
  <Layout>
    <AboutUs/>
    <Services/>
    <References/>
    <Contact/>
  </Layout>
)

export default IndexPage
