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
      subtitle="Návrh a realizáciu audio - video systémov pre konferenčné a zasadacie miestnosti"
      mainImage={main}
      intro={
        <Typography variant="body1" paragraph>
          Zabezpečujeme návrh a realizáciu audio - video systémov pre konferenčné a zasadacie miestnosti. Ponúkame inštaláciu TV a projektorov, ozvučenie a videokonferenčné
          systémy.
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
              <>Ovládanie celej miestnosti z tabletu - <Bold>RTI, Crestron</Bold></>,
              <>Videokonferenčné systémy <Bold>Logitech, Cisco, Polycom</Bold></>,
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
            items={["bezdrôtový prenos videa a zvuku", "projektor a projekčné plátno zabudované v strope", "videokonferencia pre Skype, Teams a iné", "možnosť ovládania svetiel a žalúzií"]}
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
