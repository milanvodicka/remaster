import React from "react"
import Hero from "../Hero"
import {
  Container,
  Grid,
  Typography,
  Paper,
  makeStyles,
  useTheme,
} from "@material-ui/core"

const ServiceItem = ({ title, text, children }) => {
  const classes = makeStyles(theme => ({
    paper: {
      padding: theme.spacing(2),
    },
    title: {
      fontWeight: 400,
    }
  }))()
  return (
    <Grid item sm={4}>
      <Paper className={classes.paper}>
        <Typography variant="h6" gutterBottom className={classes.title}>
          {title}
        </Typography>
        {text && <Typography variant="body1">{text}</Typography>}
        {children}
      </Paper>
    </Grid>
  )
}

const Title = ({ children }) => {
  const theme = useTheme()
  return (
    <Typography
      variant="h5"
      style={{
        transform: "uppercase",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
      }}
    >
      {children}
    </Typography>
  )
}

const Services = () => {
  const theme = useTheme()
  return (
    <>
      <Hero
        id="sluzby"
        title="Služby"
        subtitle="Ku všetkým našim službám ponúkame obhliadku, návrh riešenia, vypracovanie projektu a samozrejme komplexnú realizáciu zákazky so záručným ON-SITE servisom."
        imageSrc="https://unsplash.it/2000/1000"
      />
      <Container
        style={{ marginTop: theme.spacing(4), marginBottom: theme.spacing(4) }}
      >
        <Title>Domácnosť</Title>
        <Grid container spacing={2}>
          <ServiceItem title="Smart Home" text="Inteligentná domácnosť alebo firma, Google, Alexa, Homekit, Fibaro, Z-Wave, iné IoT, zabezpečujeme taktiež domácu Wi-Fi sieť pomocou sieťových prvkov Mikrotik a iné." />
          <ServiceItem title="Bezpečnosť" text="Smart security IoT (odstavenie vody v prípade aktivácie záplavového čidla, upozornenie v prípade detekcie dymu, alebo zvýšenia teploty, upozornenie na pohyb osôb, zaslanie foto atď.),  alarmy Jablotron, kamerové systémy Dahua, Hikvision, Avigilon a iné IP kamery a záznamníky." />
          <ServiceItem title="Ozvučenie" text="Ozvučenie domu, bytu, alebo iných priestorov, systémy SONOS, Bluesound, Heos." />
          <ServiceItem title="TV a multimédia" text="Reproduktory a ozvučenie ku TV, smart ovládanie Logitech, Apple TV, Chromecast, integrácia služieb HBO GO, Netlfix, domáce úložisko QNAP, satelitný príjem na mieru (príjem viacerých družíc), Linux STB Enigma VU+, zoznam kanálov a balíkov na mieru." />
          <ServiceItem title="Kino" text="Projekcia, ozvučenie, ovládanie techniky, svetiel, závesov a iné " />
          <ServiceItem title="Hi-fi" text="Poradenstvo, návrh, predaj a inštalácia Hi-Fi zostavy pre Vás, reproduktory, zosilňovače, gramofóny, káble, receivery, prehrávače. Čistenie LP platní špičkovou ultrazvukovou práčkou." />
        </Grid>
        <Title>Firma</Title>
        <Grid container spacing={2}>
          <ServiceItem
            title="Inteligentá zasadačka – Smart Meetingroom"
            text="Káblový aj bezdrôtový prenos obrazu a zvuku, projektor, alebo TV, videokonferenčné systémy Logitech, Microsoft Teams, Hangouts Meet, jednoduché ovládanie techniky a spúštanie projekčného plátna, rezervačný systém Microsoft, Google a iné."
          />
          <ServiceItem title="Digital Signage – reklamné displeje" text="Reklamné a informačné displeje pre predajne, hotely a kongresy, zobrazovanie počasia, denného menu, meetingov atď., systémy Avemeo, Samsung  Magic Info a Brightsign." />
          <ServiceItem title="Hotelová TV" text="Kompletný príjem SAT TV a rozvod pre hotel, IP TV, DVB-T, DVB-C, hotelový systém Avemeo, objednávanie upratovania, jedla a služieb priamo z izby a taktiež hotelový infokanál." />
        </Grid>
      </Container>
    </>
  )
}

export default Services
