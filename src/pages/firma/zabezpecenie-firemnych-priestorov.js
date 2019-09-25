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
      breadcrumbs={[["Služby", "/#sluzby"], ["Firma"], ["Zabezpečenie firemných priestorov"]]}
      title="Zabezpečenie firemných priestorov"
      subtitle="Kontrola pohybu osôb a ochrana majetku"
      mainImage={main}
      intro={
        <Typography variant="body1" paragraph>
          Kontrola pohybu osôb a ochrana majetku, je dnes neodmysliteľnou súčasťou firemných priestorov. Ponúkame návrh, dodávku a <Bold>inštalácie systému Jablotron</Bold>, a taktiež
          prístupové a kamerové systémy od rôznych výrobcov.
        </Typography>
      }
      introImage={noImage}
      introTitle="Zabezpečenie firemných priestorov"
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
              <>
                Prístupové a dochádzkové systémy Dahua, Avigilon, <Bold>2N, Entry</Bold>
              </>,
              <>
                Video vrátniky <Bold>Easy Door, DoorBird</Bold>, 2N a iné
              </>,
              <>Perimetrická ochrana pozemku</>,
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
              "možnosť použiť bezdrôtové čidlá a senzory",
              "vizuálna kontrola objektu cez mobilný telefón",
              "rozpoznávanie tvárí a vozidiel",
              "upozornenie narušenia prostredníctvom: SMS, tel. hovor, alebo aplikácie",
              "detekcia pre únik vody, požiar, dym",
              "záznam o pohybe osôb a dochádzka",
              "napojenie na pult centrálnej ochrany",
              "prideľovanie oprávnení pre vstup do rôznych priestorov",
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
