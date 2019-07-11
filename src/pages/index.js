import React from "react"
import Layout from "../components/Layout"
import AboutUs from "../components/sections/AboutUs"
import Services from "../components/sections/Services"
import References from "../components/sections/References"
import Contact from "../components/sections/Contact"
import Hero from "../components/Hero"
import image from "../images/main.jpg"

const IndexPage = () => (
  <Layout>
    <Hero
      title="Remaster"
      subtitle="Technológie pre modernú domácnosť alebo firmu."
      imageSrc={image}
    />
    <Services/>
    <References/>
    <AboutUs/>
    <Contact/>
    <div style={{ height: "33vh"}}/>
  </Layout>
)

export default IndexPage
