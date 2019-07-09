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
import SectionTitle from "../SectionTitle"
import SectionSubtitle from "../SectionSubtitle"

const ServiceItem = ({ title, text, children }) => {
  const classes = makeStyles(theme => ({
    paper: {
      padding: theme.spacing(2),
      height: "250px"
    },
    title: {
      textTransform: "uppercase",
      fontWeight: 600,
      marginBottom: theme.spacing(2)
    },
    tile: {
      "@media(max-width:600px)": {
        width: "100%"
      }
    }
  }))()
  return (
    <Grid item sm={6} md={4} className={classes.tile}>
      <Paper className={classes.paper} elevation={2}>
        <Typography variant="body1" className={classes.title}>
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
      variant="h4"
      style={{
        textAlign: "center",
        textTransform: "uppercase",
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
      }}
    >
      {children}
    </Typography>
  )
}

const Services = () => {
  const theme = useTheme()
  return (
    <Container
      id="sluzby"
      style={{ marginTop: theme.spacing(4), marginBottom: theme.spacing(4) }}
    >
      <SectionTitle>
        Služby
      </SectionTitle>
      <SectionSubtitle style={{ textAlign: "center" }}>
        Domácnosť
      </SectionSubtitle>
      <Grid container spacing={2}>
        <ServiceItem
          title="Smart Home"
          text="Inteligentná domácnosť alebo firma, bezdrôtová domáca inteligencia, Wi-Fi siete a iné."
        />
        <ServiceItem
          title="Bezpečnosť"
          text="Smart security IoT (odstavenie vody, detekcia dymu, zvýšenej teploty, pohybu osôb, alarmy, kamerové systémy, IP kamery a záznamníky."
        />
        <ServiceItem
          title="Ozvučenie"
          text="Ozvučenie domu, bytu, alebo iných priestorov, bezdrôtové multi-room systémy."
        />
        <ServiceItem
          title="TV a multimédia"
          text="Reproduktory a ozvučenie k TV, smart ovládanie, integrácia streamovacích služieb (Netflix a pod.), domáce úložisko, satelitný príjem na mieru."
        />
        <ServiceItem
          title="Kino"
          text="Projekcia, ozvučenie, ovládanie techniky, svetiel, závesov a iné."
        />
        <ServiceItem
          title="Hi-fi"
          text="Poradenstvo, návrh, predaj a inštalácia Hi-Fi zostavy. Reproduktory, zosilňovače, gramofóny, káble, receivery, prehrávače."
        />
        <ServiceItem
          title="Čistenie LP platní"
          text="Čistenie LP platní špičkovou ultrazvukovou práčkou."
        />
      </Grid>
      <SectionSubtitle style={{ textAlign: "center" }}>
        Firma
      </SectionSubtitle>
      <Grid container spacing={2}>
        <ServiceItem
          title="Inteligentá zasadačka"
          text="Drôtový aj bezdrôtový prenos obrazu a zvuku, projektor, alebo TV, videokonferenčné systémy rôzných značiek. Jednoduché ovládanie techniky a spúštanie projekčného plátna, rezervačný systém a iné."
        />
        <ServiceItem
          title="Reklamné displeje"
          text="Reklamné a informačné displeje pre predajne, hotely a kongresy, zobrazovanie počasia, denného menu, meetingov a iné."
        />
        <ServiceItem
          title="Hotelová TV"
          text="Kompletný príjem SAT TV a rozvod pre hotel, IP TV, DVB-T, DVB-C, hotelový systém, objednávanie upratovania, jedla a služieb priamo z izby a taktiež hotelový infokanál."
        />
      </Grid>
    </Container>
  )
}

export default Services
