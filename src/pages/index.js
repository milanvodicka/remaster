import React from "react"
import Layout from "../components/Layout"
import AboutUs from "../components/sections/AboutUs"
import Services from "../components/sections/Services"
import References from "../components/sections/References"

const IndexPage = () => (
  <Layout>
    <AboutUs/>
    <Services/>
    <References/>
  </Layout>
)

export default IndexPage
