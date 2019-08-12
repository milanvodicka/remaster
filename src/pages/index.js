import React from "react"
import Layout from "../components/Layout"
import AboutUs from "../components/sections/AboutUs"
import Services from "../components/sections/Services"
import References from "../components/sections/References"
import Contact from "../components/sections/Contact"
import Hero from "../components/CarouselHero"
import image from "../images/main.jpg"

const IndexPage = () => (
  <Layout>
    <Hero
      content={[
        {
          title: "Remaster",
          subtitle: "Technológie pre modernú domácnosť alebo firmu.",
        },
        {
          title: "Smart Home",
          subtitle: "Inteligentná domácnosť alebo firma.",
        },
        {
          title: "Bezpečnosť",
          subtitle: "Zabezpečovací a kamerový systém, kontrola požiaru a úniku vody.",
        },
      ]}
      title="Remaster"
      subtitle="Technológie pre modernú domácnosť alebo firmu."
      imageSrc={image}
      fullScreen
    />
    <Services/>
    <References/>
    <AboutUs/>
    <Contact/>
    <div style={{ height: "33vh" }}/>
  </Layout>
)

export default IndexPage
