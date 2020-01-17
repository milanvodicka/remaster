import React from "react"
import ServicePage from "../../components/ServicePage"
import main from "../../images/firma/reklamne-displeje-videosteny/main.jpg"
import offer from "../../images/firma/reklamne-displeje-videosteny/offer.jpg"
import { Typography } from "@material-ui/core"
import List from "../../components/List"
import Link from "../../components/Link"

const Page = () => {
  return (
    <ServicePage
      breadcrumbs={[["Služby", "/#sluzby"], ["Firma"], ["Informačné displeje a video steny"]]}
      title="Informačné displeje a video steny"
      subtitle="Návrh a realizáciu Digital Signage"
      mainImage={main}
      intro={
        <Typography variant="body1" paragraph>
          Informačné displeje sa stávajú súčasťou firemných a obchodných priestorov. Ponúkame návrh a realizáciu Digital Signage, či už jedného informačného displeja, alebo celej
          reklamnej siete.
        </Typography>
      }
      offer={
        <>
          <Typography variant="h4" gutterBottom>
            Naša ponuka
          </Typography>
          <List
            items={[
              "Návrh a realizáciarealizácia systému infopanelov (Digital Signage) (Digital Signage)",
              "Systémy Samsung Magic Info, Brightsign, Avemeo a iné",
              "Inštalácia LCD alebo LED video steny",
              "Tvorba a editácia obsahu pre infopanely",
            ]}
          />
        </>
      }
      offerImage={offer}
      offerTitle="Naša ponuka"
      properties={
        <>
          <Typography variant="h4" gutterBottom>
            Vybrané vlastnosti našich systémov
          </Typography>
          <List
            items={[
              "Možnosť manažovania rozsiahlej siete obrazoviek",
              "Možnosti úpravy obsahu a vzdialenej správy",
              "Počasie, kurzový lístok, videá, obrázky, live prenos a iné",
              "Interaktivita cez dotykovú plochu, kameru, senzor pohybu a iné",
            ]}
          />
        </>
      }
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
