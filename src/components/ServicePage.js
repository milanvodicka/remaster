import React from "react"
import Layout from "./Layout"
import Hero from "./Hero"
import TopSpace from "./TopSpace"
import SideBySide from "./SideBySide"
import { Container, Grid } from "@material-ui/core"
import Breadcrumbs from "./Breadcrumbs"

const ServicePage = ({ title, subtitle, mainImage, intro, offer, offerImage, offerTitle, properties, end, breadcrumbs = [] }) => {
  return (
    <Layout>
      <Hero title={title} subtitle={subtitle} imageSrc={mainImage} />
      {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
      <Container>
        <TopSpace>
          <Grid container>
            <Grid item sm={12}>
              {intro}
            </Grid>
          </Grid>
        </TopSpace>
        {offer &&
          <TopSpace>
            <SideBySide image={offerImage} alt={offerTitle} grid={[8, 4]}>
              {offer}
            </SideBySide>
          </TopSpace>
        }
        {properties && (
          <TopSpace>
            <Grid container>
              <Grid item sm={12}>
                {properties}
              </Grid>
            </Grid>
          </TopSpace>
        )}
        {end && <TopSpace>{end}</TopSpace>}
      </Container>
      <div style={{ height: "33vh" }} />
    </Layout>
  )
}

export default ServicePage
