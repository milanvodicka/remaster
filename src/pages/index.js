import React from "react"
import Layout from "../components/Layout"
import AboutUs from "../components/sections/AboutUs"
import Services from "../components/sections/Services"
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
          subtitle: (
            <>
              Inteligentná domácnosť alebo firma.
              <br />
              Ovládanie kúrenia, osvetlenia, závlahy, žalúzií a iné.
            </>
          ),
          cta: "Viac",
          onClick: () => navigate("/domacnost/smart-home"),
        },
        {
          title: "Bezpečnosť",
          subtitle: (
            <>
              Zabezpečovací a kamerový systém.
              <br />
              Kontrola požiaru a úniku vody, alarmy Jablotron.
            </>
          ),
          cta: "Viac",
          onClick: () => navigate("/domacnost/bezpecnost"),
        },
        {
          title: "TV, kino a satelit",
          subtitle: (
            <>
              Obývačka na mieru, TV, satelit, ozvučenie,
              <br />
              združené ovládanie, Apple TV, a iné.
            </>
          ),
          cta: "Viac",
          onClick: () => navigate("/domacnost/tv-kino-satelit"),
        },
        {
          title: "Ozvučenie",
          subtitle: (
            <>
              Ozvučenie obývačky, domu, bytu, alebo iných priestorov.
              <br />
              Bezdrôtové systémy SONOS, Bluesound a iné.
            </>
          ),
          cta: "Viac",
          onClick: () => navigate("/domacnost/ozvucenie-hifi"),
        },
      ]}
      title="AV Integra servis"
      subtitle="Technológie pre modernú domácnosť alebo firmu."
      imageSrc={image}
      fullScreen
    />
    <Services />
    <AboutUs />
    <Contact />
    <div style={{ height: "33vh" }} />
  </Layout>
)

export default IndexPage
