import React from "react"
import Layout from "./Layout"
import Hero from "./Hero"
import TopSpace from "./TopSpace"
import SideBySide from "./SideBySide"
import { Container, Typography } from "@material-ui/core"

const ServicePage = ({ title, subtitle, mainImage, intro, introImage, introTitle, offer, offerImage, offerTitle, properties, propertiesImage, propertiesTitle, end }) => {
  return (
    <Layout>
      <Hero title={title} subtitle={subtitle} imageSrc={mainImage} />
      <Container>
        <TopSpace>
          <SideBySide image={introImage} alt={introTitle}>
            {intro}
          </SideBySide>
        </TopSpace>
        <TopSpace>
          <SideBySide reverse image={offerImage} alt={offerTitle}>
            {offer}
          </SideBySide>
        </TopSpace>
        <TopSpace>
          <SideBySide image={propertiesImage} alt={propertiesTitle}>
            {properties}
          </SideBySide>
        </TopSpace>
        <TopSpace>{end}</TopSpace>
      </Container>
      <div style={{ height: "33vh" }} />
    </Layout>
  )
}

export default ServicePage
