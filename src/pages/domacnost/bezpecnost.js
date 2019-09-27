import React from "react"
import ServicePage from "../../components/ServicePage"
import main from "../../images/domacnost/bezpecnost/main.jpg"
import offer from "../../images/domacnost/bezpecnost/offer.png"
import { Typography } from "@material-ui/core"
import Bold from "../../components/Bold"
import List from "../../components/List"
import Link from "../../components/Link"

const Page = () => {
  return (
    <ServicePage
      breadcrumbs={[["Služby", "/#sluzby"], ["Domácnosť"], ["Bezpečnosť"]]}
      title="Bezpečnosť"
      subtitle="Zabezpečovací a kamerový systém"
      mainImage={main}
      intro={
        <Typography variant="body1" paragraph>
          <Bold>Zabezpečovacie systémy</Bold> a taktiež <Bold>kamerový systém</Bold>, sa dnes pomaly stávajú štandardným vybavením modernej domácnosti. Ponúkame návrh, dodávku a{" "}
          <Bold>inštalácie alarmu Jablotron</Bold>, a vybraných kamerových systémov.
        </Typography>
      }
      offer={
        <>
          <Typography variant="h4" gutterBottom>
            Naša ponuka
          </Typography>
          <List
            items={[
              <>
                Zabezpečovacie systémy <Bold>Jablotron</Bold>
              </>,
              <>
                Kamerové systémy <Bold>Dahua, Hikvision, Avigilon</Bold> a iné
              </>,
              <>Video vrátnik, otváranie garážovej brány</>,
              <>Perimetrická ochrana pozemku</>,
              <>
                Systémy <Bold>Netatmo, Fibaro, Ring</Bold> a ďalšie
              </>,
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
              "možnosť použiť bezdrôtové systémy, bez nutnosti ťahania kabeláže",
              "vizuálna kontrola objektu cez mobilný telefón",
              "rozpoznávanie tvárí a vozidiel",
              "upozornenie narušenia prostredníctvom: SMS, tel. hovor, alebo aplikácie",
              "detekcia pre únik vody, požiar, dym",
              "ovládanie kúrenia a termostat",
              "spínanie svetiel, alebo závlahy",
            ]}
          />
        </>
      }
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
