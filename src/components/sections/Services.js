import React from "react"
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
import Security from "../../images/icons/bezpecnost.svg"
import CleaningLPs from "../../images/icons/cistenie-platni.svg"
import HiFiSound from "../../images/icons/hi-fi-zvuk.svg"
import HotelTV from "../../images/icons/hotelova-tv.svg"
import SmartMeetingRoom from "../../images/icons/inteligentna-zasadacka.svg"
import Cinema from "../../images/icons/kino.svg"
import Sound from "../../images/icons/ozvucenie.svg"
import DigitalSignage from "../../images/icons/reklamne-displeje.svg"
import SmartHome from "../../images/icons/smart-home.svg"
import Multimedia from "../../images/icons/tv-multimedia.svg"
import { navigate } from "gatsby"

const ServiceItem = ({ title, text, Icon, onClick = null }) => {
  const classes = makeStyles(theme => ({
    paper: {
      padding: theme.spacing(3),
      height: "250px",
      display: "flex",
      ...(onClick
        ? {
            cursor: "pointer",
            "&:hover": {
              boxShadow:
                "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
            },
          }
        : {}),
    },
    title: {
      textTransform: "uppercase",
      fontWeight: 600,
      marginBottom: theme.spacing(2),
    },
    tile: {
      "@media(max-width:600px)": {
        width: "100%",
      },
    },
    grid: {
      overflow: "hidden",
    },
    iconContainer: {
      alignSelf: "center",
    },
    icon: {
      width: "100%",
      height: "auto",
      "& path": {
        fill: "rgba(0,0,0,0.5)",
      },
    },
  }))()
  return (
    <Grid item sm={6} md={6} lg={4} className={classes.tile} onClick={onClick}>
      <Paper className={classes.paper} elevation={2}>
        <Grid
          container
          spacing={3}
          alignItems="flex-start"
          className={classes.grid}
        >
          <Grid item xs={3} className={classes.iconContainer}>
            <Icon className={classes.icon} />
          </Grid>
          <Grid item xs={9}>
            <Typography variant="body1" className={classes.title}>
              {title}
            </Typography>
            <Typography variant="body1">{text}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

const Services = () => {
  const theme = useTheme()
  return (
    <Container
      id="sluzby"
      style={{ marginTop: theme.spacing(4), marginBottom: theme.spacing(4) }}
    >
      <SectionTitle>Služby</SectionTitle>
      <SectionSubtitle style={{ textAlign: "center" }}>
        Domácnosť
      </SectionSubtitle>
      <Grid container spacing={2}>
        <ServiceItem
          title="Smart Home"
          text="Inteligentná domácnosť alebo firma. Ovládanie kúrenia, osvetlenia, závlahy, žalúzií a iné."
          Icon={SmartHome}
          onClick={() => navigate("/smart-home")}
        />
        <ServiceItem
          title="Bezpečnosť"
          text="Zabezpečovací a kamerový systém, kontrola požiaru a úniku vody. Alarmy Jablotron."
          Icon={Security}
        />
        <ServiceItem
          title="Ozvučenie"
          text="Ozvučenie obývačky, domu, bytu, alebo iných priestorov. Bezdrôtové systémy SONOS, Bluesound a iné."
          Icon={Sound}
        />
        <ServiceItem
          title="TV a multimédia"
          text="Obývačka na mieru, TV, satelit, ozvučenie, združené ovládanie, Apple TV, a iné."
          Icon={Multimedia}
        />
        <ServiceItem
          title="Kino"
          text="Vlastné kino s projektorom, ozvučením, združeným ovládaním všetkej techniky, svetiel, plátna a iné."
          Icon={Cinema}
        />
        <ServiceItem
          title="Hi-Fi zvuk"
          text="Pre audiofilov a nadšencov ponúkame poradenstvo, návrh, predaj a kompletnú inštaláciu audio zostavy. Sme autorizovaným servisným strediskom značiek NAD, Dynaudio, Bluesound a iné."
          Icon={HiFiSound}
        />
        <ServiceItem
          title="Čistenie LP platní"
          text="Čistenie LP platní špičkovou ultrazvukovou technológiou."
          Icon={CleaningLPs}
        />
      </Grid>
      <SectionSubtitle style={{ textAlign: "center" }}>Firma</SectionSubtitle>
      <Grid container spacing={2}>
        <ServiceItem
          title="Inteligentá zasadačka"
          text="Projektor, TV, ozvučenie, bezdrôtový prenos videa, ovládanie svetiel, žalúzií, videokonferenčný systém Logitech a iné."
          Icon={SmartMeetingRoom}
        />
        <ServiceItem
          title="Reklamné displeje"
          text="Reklamné a informačné displeje a obrazovky pre predajne, hotely, reštaurácie a iné."
          Icon={DigitalSignage}
        />
        <ServiceItem
          title="Hotelová TV"
          text="Príjem SAT a DVB-T na mieru, rozvod signálu do izieb, IP TV, DVB-T/C, interaktívny hotelový systém a infokanál."
          Icon={HotelTV}
        />
      </Grid>
    </Container>
  )
}

export default Services
