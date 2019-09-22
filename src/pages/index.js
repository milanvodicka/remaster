import React from "react"
import Layout from "../components/Layout"
import AboutUs from "../components/sections/AboutUs"
import Services from "../components/sections/Services"
// import References from "../components/sections/References"
import Contact from "../components/sections/Contact"
import Hero from "../components/CarouselHero"
import image from "../images/main.jpg"
import { navigate } from "gatsby"

const IndexPage = () => (
  <Layout>
    <Hero
      content={[
        {
          title: "AV Integra Servis",
          subtitle: (
            <>
              Technológie pre modernú domácnosť alebo firmu.
              <br />
              Široké portfólio servisných služieb.
            </>
          ),
        },
        {
          title: "Smart Home",
          subtitle: "Inteligentná domácnosť alebo firma.",
          cta: "Viac",
          onClick: () => navigate("/smart-home"),
        },
      ]}
      title="Remaster"
      subtitle="Technológie pre modernú domácnosť alebo firmu."
      imageSrc={image}
      fullScreen
    />
    <Services />
    {/*<References/>*/}
    <AboutUs />
    <Contact />
    <div style={{ height: "33vh" }} />
  </Layout>
)

export default IndexPage
