import React from "react"
import Layout from "./Layout"
import Hero from "./Hero"
import TopSpace from "./TopSpace"
import SideBySide from "./SideBySide"
import { Container, Grid, Typography, Breadcrumbs } from "@material-ui/core"
import Link from "./Link"

const ServicePage = ({
  title,
  subtitle,
  mainImage,
  intro,
  introImage,
  introTitle,
  offer,
  offerImage,
  offerTitle,
  properties,
  propertiesImage,
  propertiesTitle,
  end,
  breadcrumbs = [],
}) => {
  return (
    <Layout>
      <Hero title={title} subtitle={subtitle} imageSrc={mainImage} />
      <Container>
        {breadcrumbs && (
          <TopSpace>
            <Breadcrumbs>
              {breadcrumbs.map(([breadcrumb, link]) => (link ? <Link href={link}>{breadcrumb}</Link> : <Typography>{breadcrumb}</Typography>))}
            </Breadcrumbs>
          </TopSpace>
        )}
        <TopSpace>
          <Grid container>
            <Grid item sm={12}>
              {intro}
            </Grid>
          </Grid>
        </TopSpace>
        <TopSpace>
          <SideBySide image={offerImage} alt={offerTitle} grid={[8, 4]}>
            {offer}
          </SideBySide>
        </TopSpace>
        <TopSpace>
          <Grid container>
            <Grid item sm={12}>
              {properties}
            </Grid>
          </Grid>
        </TopSpace>
        <TopSpace>{end}</TopSpace>
      </Container>
      <div style={{ height: "33vh" }} />
    </Layout>
  )
}

export default ServicePage
