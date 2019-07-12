import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import image from "../images/smart-home.jpg"
import {
  Typography,
  Container,
  useTheme,
  Grid,
  makeStyles,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core"
import mobileAppImage from "../images/smart-home/mobile-app.jpg"
import tabletAppImage from "../images/smart-home/tablet-app.jpg"
import wirelessImage from "../images/smart-home/wireless.jpg"
import homekit from "../images/smart-home/apple-homekit.png"
import assistant from "../images/smart-home/google-assistant.png"
import alexa from "../images/smart-home/amazon-alexa.png"
import Transition from "../components/Transition"

const Page = () => {
  const classes = makeStyles(theme => ({
    image: {
      display: "block",
      width: "80%",
      height: "auto",
      margin: "auto",
      borderRadius: "5px",
    },
    workswith: {
      display: "block",
      width: "auto",
      height: "60px",
      margin: "auto",
    },
    wide: {
      backgroundColor: "rgba(0,0,0,0.03)",
      marginTop: theme.spacing(9),
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      maxWidth: "100%",
      boxShadow: "inset 0 30px 20px -30px rgba(0,0,0,0.06)",
      textShadow: "0 0 10px white",
    },
  }))()
  const theme = useTheme()
  return (
    <Layout>
      <Hero
        title="Smart Home"
        subtitle="Inteligentná domácnosť"
        imageSrc={image}
      />
      <Container style={{ paddingTop: theme.spacing(9) }}>
        <Grid container alignItems="center">
          <Grid item sm={6}>
            <Typography variant="body1">
              V dnešnej dobe sme svedkami vzrušujúcich zmien v oblasti
              domácností a s nimi spojenými technológiami. Všetci sme si zvykli
              používať smartphone pri každodenných činnostiach a vyhladávaní
              informácii z celého sveta. Rovnaký trend pozorujeme aj pri
              ovládaní súčastí bežnej domácnosti, akou sú kúrenie, svetlá,
              žalúzie, rolety, závlaha, ale aj zabezpečovací, či kamerový
              systém.
            </Typography>
          </Grid>
          <Grid item sm={6}>
            <Transition>
              <img
                className={classes.image}
                src={wirelessImage}
                alt="Bezdrôtová inteligentná domácnosť."
              />
            </Transition>
          </Grid>
        </Grid>

        <Grid
          container
          alignItems="center"
          style={{ paddingTop: theme.spacing(9) }}
        >
          <Grid item sm={6}>
            <Transition>
              <img
                className={classes.image}
                src={tabletAppImage}
                alt="Ovládanie inteligentnej domácnosti z tabletu."
              />
            </Transition>
          </Grid>
          <Grid item sm={6}>
            <Typography variant="body1">
              V minulosti bolo veľmi nákladné spojiť tieto oblasti do jedného
              združeného ovládania. Išlo o rozsiahle systémy, ktoré si
              vyžadovali dôslednú káblovú predprípravu a náročný návrh. Ku
              takýmto systémom zákazníci potrebovali spravidla servisnú
              starostlivosť a každá zmena si vyžadovala zásah programátora.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container className={classes.wide}>
        <Typography variant="h5" style={{ textAlign: "center" }}>
          Veľkou výhodou je absolútna flexibilita a sloboda, v prípade zmien,
          alebo rozšírenia systému o ďalšie prvky.
        </Typography>
      </Container>

      <Container
        style={{
          marginTop: theme.spacing(9),
        }}
      >
        <Grid
          container
          alignItems="center"
          style={{ paddingTop: theme.spacing(9) }}
        >
          <Grid item sm={6}>
            <Typography variant="body1">
              Dnes sú možnosti naklonené širokej verejnosti. Či už sa jedná o
              malý byt s ovládaním radiatorových hlavíc, svietidiel a
              audio-video zariadení, alebo rodinný dom s kompletnou
              inteligenciou, ktorý vie presne čo má kedy urobiť, aj bez Vášho
              zásahu. Navyše nie je potrebná rozsiahla predpríprava ani ťahanie
              kabeláže a je možné systém nasadiť aj na pôvodnú
              elektroinštaláciu. Umožńujú nám to moderné bezdrôtové technológie
              ako je Z-WAVE, Wi-Fi, ZigBee a iné. Navyše ovládanie je čím ďalej
              tým jednoduchšie, a to pomocou smarthone, tabletu, alebo hlasového
              ovládania Alexa, Google Assistant a Siri.
            </Typography>
          </Grid>
          <Grid item sm={6}>
            <Transition onEnterViewport={() => console.log("foo")}>
              <img
                className={classes.image}
                src={mobileAppImage}
                alt="Mobilná aplikácia na ovládanie inteligentnej domácnosti."
              />
            </Transition>
          </Grid>
        </Grid>
      </Container>

      <Container className={classes.wide}>
        <Typography variant="h5" style={{ textAlign: "center" }}>
          Pracujeme s
        </Typography>
        <Grid
          container
          style={{ marginTop: theme.spacing(4) }}
          alignItems="center"
        >
          <Grid item sm={4}>
            <Transition>
              <img
                className={classes.workswith}
                src={homekit}
                alt="Apple Homekit"
              />
            </Transition>
          </Grid>
          <Grid item sm={4}>
            <Transition>
              <img
                className={classes.workswith}
                src={assistant}
                alt="Apple Homekit"
              />
            </Transition>
          </Grid>
          <Grid item sm={4}>
            <Transition>
              <img
                className={classes.workswith}
                src={alexa}
                alt="Apple Homekit"
              />
            </Transition>
          </Grid>
        </Grid>
      </Container>

      <Container style={{ marginTop: theme.spacing(9) }}>
        <Grid container>
          <Grid item sm={12}>
            <Typography variant="h6" style={{ marginBottom: theme.spacing(2) }}>
              Niektoré z možností inteligentnej domácnosti:
            </Typography>
          </Grid>
          <Grid item sm={6}>
            <List>
              <ListItem>
                <ListItemText primary="Ovládanie kúrenia" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Ovládanie svetiel" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Ovládanie žalúzií a roliet" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Ovládanie zavlažovania" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Ovládanie TV a audio zariadení" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Ovládanie zabezpečovacieho systému a kamier" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Videovrátnik a otváranie brány" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Automatizované scény osvetlenia a zatemnenia podľa denného režimu" />
              </ListItem>
            </List>
          </Grid>
          <Grid item sm={6}>
            <List>
              <ListItem>
                <ListItemText primary="Meranie spotreby el. energie" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Meranie teploty, vlhkosti a kvality ovzdušia" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Ovládanie podľa počasia z vlastnej meteostanice alebo z internetu" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Uzatvorenie prívodu vody v prípade detekcie záplavovým senzorom" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Detekcia dymu a požiaru" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Hlasové ovládanie Alexa, Google Assistant, Siri" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Simulácia prítomnosti a dovolenkový režim" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Budík so zapnutím ozvučenia v celom dome" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
      <div style={{ height: "33vh" }} />
    </Layout>
  )
}

export default Page
