import React from "react"
import ServicePage from "../../components/ServicePage"
import main from "../../images/domacnost/ozvucenie/main.jpg"
import offer from "../../images/domacnost/ozvucenie/offer.jpg"
import { Typography } from "@material-ui/core"
import List from "../../components/List"
import Link from "../../components/Link"

const Page = () => {
  return (
    <ServicePage
      breadcrumbs={[["Služby", "/#sluzby"], ["Domácnosť"], ["Ozvučenie a Hi-Fi"]]}
      title="Ozvučenie a Hi-Fi"
      subtitle="Návrh a inštalácie kompletného ozvučenia domu, alebo bytu"
      mainImage={main}
      intro={
        <Typography variant="body1" paragraph>
          Poskytujeme návrh a inštalácie kompletného ozvučenia domu, alebo bytu. Realizujeme ozvučenie ktorýchkoľvek miestností, vrátane obývačiek a Hi-Fi zostáv pre kvalitný
          posluch.
        </Typography>
      }
      offer={
        <>
          <Typography variant="h4" gutterBottom>
            Naša ponuka
          </Typography>
          <List
            items={[
              "Inštalácia reproduktorov a ozvučenia v ktorejkoľvek miestnosti",
              "Bezdrôtové systémy SONOS, BlueSound a iné",
              "Ozvučenie obývačky a domáce kino",
              "Stereo High-End a HiFi zostavy",
              "Inštalácie a nastavenie gramofónov",
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
              "Možnosť použitia bezdrôtových systémov, bez nutnosti káblovania",
              "Možnosť prehrávania hudby vo všetkých miestnostiach naraz - Party mode",
              "Ovládanie cez smartphone",
              "Ozvučenie exteriéru, napr. terasa, záhrada a iné",
              "Prehrávanie internetových rádií, hudobných služieb Deezer, Spotify a iné",
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
