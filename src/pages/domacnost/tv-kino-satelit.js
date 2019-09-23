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
      breadcrumbs={[["Služby", "/#sluzby"], ["Domácnosť"], ["TV, kino a satelit"]]}
      title="TV, kino a satelit"
      subtitle="Zabezpečovací a kamerový systém"
      mainImage={main}
      intro={
        <Typography variant="body1" paragraph>
          Zabezpečujeme návrh, dodávku a <Bold>inštalácie TV, projektorov a domáceho kina</Bold> pre náročných klientov, ktorí túžia po vyššom štandarde programovej ponuky a kvality obrazu a zvuku.
        </Typography>
      }
      introImage={noImage}
      introTitle="Zabezpečovací a kamerový systém"
      offer={
        <>
          <Typography variant="h4" gutterBottom>
            Naša ponuka
          </Typography>
          <List
            items={[
              "Inštalácia TV a projektorov",
              "Inštalácia satelitov pre príjem z viacerých družíc",
              "Ozvučenie ku TV a domáce kino",
              "Jedno diaľkové ovládanie RTI pre všetky zariadenia",
              "Prehrávanie filmov z domáceho úložiska",
              "Apple TV, Chromecast a iné",
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
              "prepínanie obrazu medzi TV a projektorom",
              "SAT príjem od rôznych poskytovateľov naraz, DIGI, Skylink, Freesat",
              "TV rozvod do izieb, príjem pre viacerých užívateľov",
              "stereo alebo viackanálový zvuk, Dolby Atmos",
              "možnosť ovládania svetiel priamo z diaľkového ovládača RTI",
            ]}
          />
        </>
      }
      propertiesImage={noImage}
      propertiesTitle="Vybrané vlastnosti našich systémov"
      end={
        <Typography variant="body1">
          Okrem návrhu a inštalácie sa sústreďujeme na pohotový popredajný servis a starostlivosť o našich zákazníkov.
          <br/>
          <Link href="/#kontakt">Kontaktujte nás</Link> a dohodnite si stretnutie v našom showroome.
        </Typography>
      }
    />
  )
}

export default Page
