import React, { cloneElement } from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import { Typography, Container, useTheme, Grid, makeStyles} from "@material-ui/core"
import Transition from "../components/Transition"
import mainImage from "../images/smart-home.jpg"
import iphoneImage from "../images/smart-home/iphone.jpg"
import homeSecurity from "../images/smart-home/home-security.jpg"
import homekit from "../images/smart-home/homekit.png"
import fibaro from "../images/smart-home/fibaro.png"
import homey from "../images/smart-home/homey.png"
import smartApartment from "../images/smart-home/smart-apartment.jpg"
import smartAssistans from "../images/smart-home/assistans.jpg"
import homekitGears from "../images/smart-home/homekits-gear.png"
import fibaroWide1 from "../images/smart-home/fibaro-wide-1.png"
import fibaroWide2 from "../images/smart-home/fibaro-wide-2.png"

const TopSpace = ({ children, margin = false }) => {
  const theme = useTheme()
  const space = theme.spacing(9)
  return cloneElement(children, {
    style: {
      ...(margin ? { marginTop: space } : { paddingTop: space }),
      ...children.props.style,
    },
  })
}

const Image = ({ image, alt }) => {
  const classes = makeStyles(theme => ({
    image: {
      display: "block",
      width: "80%",
      height: "auto",
      margin: "auto",
      borderRadius: "5px",
    },
  }))()

  return (
    <Transition>
      <img className={classes.image} src={image} alt={alt} />
    </Transition>
  )
}

const SideBySide = ({ reverse = false, children, image, alt, style = {} }) => {
  const classes = makeStyles(theme => ({
    imageGrid: {
      [theme.breakpoints.only("xs")]: {
        ...(reverse ? { marginBottom: theme.spacing(3) } : { marginTop: theme.spacing(3) }),
      },
    },
  }))()

  const Text = () => (
    <Grid item sm={6}>
      {children}
    </Grid>
  )

  const GridImage = () => (
    <Grid item sm={6} className={classes.imageGrid}>
      <Image image={image} alt={alt} />
    </Grid>
  )

  return !reverse ? (
    <Grid container alignItems="center" style={style}>
      <Text />
      <GridImage />
    </Grid>
  ) : (
    <Grid container alignItems="center" style={style}>
      <GridImage />
      <Text />
    </Grid>
  )
}

const WideImage = ({ image, alt, style = {} }) => {
  const classes = makeStyles({
    wide: {
      maxWidth: "100%",
      padding: 0,
    },
    image: {
      width: "100%",
    },
  })()
  return (
    <Container className={classes.wide} style={style}>
      <Transition>
        <img className={classes.image} src={image} alt={alt} />
      </Transition>
    </Container>
  )
}

const Bold = ({ children }) => <span style={{ fontWeight: "bold" }}>{children}</span>

const Page = () => (
  <Layout>
    <Hero title="Smart Home" subtitle="Inteligentná domácnosť" imageSrc={mainImage} />
    <Container>
      <TopSpace>
        <SideBySide image={iphoneImage} alt="Bezdrôtová inteligentná domácnosť.">
          <Typography variant="h4" paragraph>
            Kto dnes môže mať inteligentnú domácnosť
          </Typography>
          <Typography variant="body1" paragraph>
            Inteligentná domácnosť sa vie v prvom rade prispôsobiť Vašim požiadavkám, a preto je možné ju <Bold>vytvoriť aj na existujúcej, pôvodnej elektroinštalácií</Bold>.
          </Typography>
          <Typography variant="body1">
            Vie fungovať bez nutnosti káblovej predprípravy, a to vďaka najnovším <Bold>bezdrotovým technológiám, akou je napr. Z-WAVE, Zigbee</Bold>, alebo <Bold>Wifi</Bold>,
            ktoré používame aj pri našich inštaláciách a <Bold>systémoch FIBARO, Homey, alebo Apple Homekit</Bold>.
          </Typography>
        </SideBySide>
      </TopSpace>

      <TopSpace>
        <SideBySide reverse image={homeSecurity} alt="Bezpečnosť">
          <Typography variant="body1" paragraph>
            Spočiatku môže obsahovať iba niekoľko základných funkcií a časom sa vie rozrastať o množstvo zariadení a inteligentných schopností.
            <Bold>Cenou sa Vám prispôsobí</Bold>.
          </Typography>
          <Typography variant="body1">
            Ak máte malý byt, alebo veľký dom, ak staviate, alebo už máte staršiu stavbu a chcete <Bold>jednoduché a intuitívne ovládanie</Bold> aj pre technicky menej zdatných
            užívateľov, potom aj Vy dnes môžete vlastniť inteligentnú domácnosť.
          </Typography>
          <Grid container alignItems="center">
            <Grid item xs={4}>
              <Image image={homekit} alt="Homekit" />
            </Grid>
            <Grid item xs={4}>
              <Image image={fibaro} alt="Fibaro" />
            </Grid>
            <Grid item xs={4}>
              <Image image={homey} alt="Homey" />
            </Grid>
          </Grid>
        </SideBySide>
      </TopSpace>
    </Container>

    <TopSpace>
      <WideImage image={smartApartment} alt="Smart apartment" />
    </TopSpace>

    <Container>
      <TopSpace>
        <SideBySide image={homekitGears} alt="Homepod a homekit zariadenia">
          <Typography variant="h4">Čo dnes dokáže inteligentná domácnosť</Typography>
          <Typography variant="body1" component="div">
            <ul>
              <li>
                ochraňuje Vás a Váš majetok, <Bold>prebudí Vás v prípade detekcie dymu</Bold>, alebo požiaru
              </li>
              <li>
                <Bold>zabráni vytopeniu</Bold> uzatvorením prívodu vody
              </li>
              <li>upozorní na prítomnosť cudzej osoby v priestore</li>
              <li>
                umožní Vám <Bold>náhľad prostredníctvom kamier</Bold> a vizuálnu kontrolu diania v domácnosti,
              </li>
              <li>zavolá Vám kamkoľvek na svete a umožní rozhovor s osobou stojacou pred Vašim videovrátnikom</li>
              <li>
                ovláda Vaše <Bold>kúrenie a klimatizáciu</Bold> podľa požadovaných podmienok, a to s ohľadom na aktuálne počasie, časť dňa, alebo prítomnosť osôb v dome
              </li>
              <li>
                dokáže ovládať Vaše <Bold>svetlá, žalúzie a rolety</Bold> a nastaviť ich podľa vonkajších podmienok, alebo podľa činnosti, ktorú sa práve chystáte vykonávať
              </li>
              <li>
                sprevádza Vás počas noci zapínaním svietidiel podľa pohybu a cez deň upraví ich intenzitu <Bold>pre maximálnu úsporu a komfort zároveň</Bold>
              </li>
            </ul>
          </Typography>
        </SideBySide>
      </TopSpace>
      <TopSpace>
        <SideBySide reverse image={smartAssistans} alt="Alexa, Siri a Google Assistant">
          <Typography variant="body1" component="div">
            <ul>
              <li>kontroluje <Bold>kvalitu ovzdušia, teplotu a vlhkosť</Bold> v danej miestnosti, a podľa podmienok nastaví vzduchotechniku alebo pošle upozornenie</li>
              <li>
                spojí všetky <Bold>audio-video zariadenia, domáce kino, TV, projektor, Apple TV, receiver</Bold> a ďalšie komponenty do jedného združeného ovládania. Zároveň vie nastaviť
                svetelnú scénu podľa toho či práve počúvate hudbu, sledujete správy, alebo pozeráte film
              </li>
              <li>
                inteligentná domácnosť bude stále múdrejšia a už dnes umožňuje <Bold>riadenie a ovládanie tisícov zariadení</Bold> a rôznych el. spotrebičov ako je kávovar, práčka alebo
                umývačka riadu
              </li>
              <li>všetky zariadenia a ich parametre môžete kedykoľvek riadiť podľa aktuálnej potreby, a to aj z Vášho <Bold>smartphone, tabletu, alebo pomocou hlasového ovládania</Bold></li>
            </ul>
          </Typography>
        </SideBySide>
      </TopSpace>
      <Grid container>
        <TopSpace><Grid item xs={12}><Image image={fibaroWide1} alt="Fibaro smart home"/></Grid></TopSpace>
        <TopSpace><Grid item xs={12}><Image image={fibaroWide2} alt="Fibaro smart home"/></Grid></TopSpace>
      </Grid>
    </Container>
    <div style={{ height: "33vh" }} />
  </Layout>
)

export default Page
