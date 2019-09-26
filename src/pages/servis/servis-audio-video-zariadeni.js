import React from "react"
import ServicePage from "../../components/ServicePage"
import main from "../../images/main-default.jpg"
import noImage from "../../images/default.jpg"
import { Typography } from "@material-ui/core"
import List from "../../components/List"
import Link from "../../components/Link"

const Page = () => {
  return (
    <ServicePage
      breadcrumbs={[["Služby", "/#sluzby"], ["Servis"], ["Servis audio a video zariadení"]]}
      title="Servis audio a video zariadení"
      subtitle="Široké portfólio servisných aktivít"
      mainImage={main}
      intro={
        <Typography variant="body1" paragraph>
          Poskytujeme široké portfólio servisných aktivít.
        </Typography>
      }
      introImage={noImage}
      introTitle="Servis audio a video zariadení"
      offer={
        <>
          <Typography variant="h4" gutterBottom>
            Naša ponuka
          </Typography>
          <List
            items={[
              "Servis audio značiek NAD, Bluesound, Dynaudio, Electrocompaniet, Meridian,",
              "Servis gramofónov Rega, Pro-Ject,",
              "Servis projektorov Epson, Optoma",
              "ON-SITE servis audio-video systémov",
              "ON-SITE servis projektorov",
              "ON-SITE servis zasadačiek a meeting-room",
            ]}
          />
        </>
      }
      offerImage={noImage}
      offerTitle="Naša ponuka"
      end={
        <Typography variant="body1">
          <Link href="/#kontakt">Kontaktujte nás</Link> a dohodnite si stretnutie v našom showroome.
        </Typography>
      }
    />
  )
}

export default Page
