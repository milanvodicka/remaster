import React from "react"
import ServicePage from "../../components/ServicePage"
import main from "../../images/main-default.jpg"
import noImage from "../../images/default.jpg"
import { Typography } from "@material-ui/core"
import Bold from "../../components/Bold"
import List from "../../components/List"
import Link from "../../components/Link"

const Page = () => {
  return (
    <ServicePage
      breadcrumbs={[["Služby", "/#sluzby"], ["Firma"], ["TV a satelitný príjem"]]}
      title="TV a satelitný príjem"
      subtitle="Príjem a rozvod satelitného a terestriálneho TV vysielania"
      mainImage={main}
      intro={
        <Typography variant="body1" paragraph>
          Zabezpečujeme príjem a rozvod satelitného a terestriálneho TV vysielania v akýchkoľvek priestoroch, <Bold>od malej kancelárie, až po budovy a hotely</Bold>. Ponúkame taktiež návrh,
          dodávku a inštalácie TV, displejov a projektorov.
        </Typography>
      }
      introImage={noImage}
      introTitle="TV a satelitný príjem"
      offer={
        <>
          <Typography variant="h4" gutterBottom>
            Naša ponuka
          </Typography>
          <List
            items={[
              "Inštalácia satelitov pre príjem z viacerých družíc",
              "Rozvod TV signálu po budove (IP TV, DVB-S/C/T)",
              "Inštalácia TV, displejov a projektorov",
              "Interaktívny hotelový TV systém",
            ]}
          />
        </>
      }
      offerImage={noImage}
      offerTitle="Naša ponuka"
      properties={
        <>
          <Typography variant="h4" gutterBottom>
            Vybrané vlastnosti našich systémov
          </Typography>
          <List
            items={[
              "SAT príjem od rôznych poskytovateľov naraz (DIGI, Skylink, Freesat a iné)",
              "Príjem pre desiatky a stovky TV (penzióny, hotely a iné)",
              "Rozvod po koaxiálnom kábli, alebo cez IP",
              "Interaktívny hotelový TV systém a infokanál (prepojenie so systémom HOREC a iné)",
            ]}
          />
        </>
      }
      propertiesImage={noImage}
      propertiesTitle="Vybrané vlastnosti našich systémov"
      end={
        <Typography variant="body1">
          Okrem návrhu a inštalácie sa sústreďujeme na pohotový popredajný servis a starostlivosť o našich zákazníkov.
          <br />
          <Link href="/#kontakt">Kontaktujte nás</Link> a dohodnite si stretnutie v našom showroome.
        </Typography>
      }
    />
  )
}

export default Page
