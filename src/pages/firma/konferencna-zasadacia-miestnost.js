import React from "react"
import ServicePage from "../../components/ServicePage"
import main from "../../images/firma/konferencna-zasadacia-miestnost/main.jpg"
import offer from "../../images/firma/konferencna-zasadacia-miestnost/offer.jpg"
import { Typography } from "@material-ui/core"
import Bold from "../../components/Bold"
import List from "../../components/List"
import Link from "../../components/Link"

const Page = () => {
  return (
    <ServicePage
      breadcrumbs={[["Služby", "/#sluzby"], ["Firma"], ["Konferenčná a zasadacia miestnosť"]]}
      title="Konferenčná a zasadacia miestnosť"
      subtitle="Návrh a realizáciu audio - video zariadení pre konferenčné a zasadacie miestnosti"
      mainImage={main}
      intro={
        <Typography variant="body1" paragraph>
          Zabezpečujeme príjem a rozvod satelitného a terestriálneho TV vysielania v akýchkoľvek priestoroch, <Bold>od malej kancelárie, až po budovy a hotely</Bold>. Ponúkame
          taktiež návrh, dodávku a inštalácie TV, displejov a projektorov.
        </Typography>
      }
      offer={
        <>
          <Typography variant="h4" gutterBottom>
            Naša ponuka
          </Typography>
          <List
            items={[
              "Inštalácia TV, projektorov a ozvučenia",
              "Káblový, alebo bezdrôtový prenos obrazu a zvuku",
              "RTI - ovládanie celej miestnosti z tabletu",
              "Videokonferenčné systémy Logitech",
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
              "prepínanie obrazu medzi TV a projektorom",
              "možnosť ovládania svetiel a žalúzií",
              "externé mikrofóny pre videokonferenciu",
              "videokonferencia pre Skype, Teams a iné",
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
