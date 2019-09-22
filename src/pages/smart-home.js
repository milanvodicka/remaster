import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import { Typography, Container, Grid, makeStyles} from "@material-ui/core"
import grey from '@material-ui/core/colors/grey'
import mainImage from "../images/smart-home.jpg"
import iphoneImage from "../images/smart-home/iphone.jpg"
import smartApartment from "../images/smart-home/smart-apartment.jpg"
import smartAssistans from "../images/smart-home/assistans.jpg"
import homekitGears from "../images/smart-home/homekits-gear.png"
import Link from "../components/Link"
import TopSpace from "../components/TopSpace"
import SideBySide from "../components/SideBySide"
import WideImage from "../components/WideImage"
import Bold from "../components/Bold"

const Page = () => {
  const classes = makeStyles((theme) => ({
    list: {
      margin: 0,
      padding: 0,
      paddingLeft: theme.spacing(4),
    },
    gridItem: {
      width: '100%',
    },
    gridItemInner: {
      color: grey['800'],
      backgroundColor: grey['200'],
      margin: theme.spacing(1),
      padding: theme.spacing(2),
      borderRadius: '5px',
    },
    listItem: {
      marginBottom: theme.spacing(2),
      color: grey['800'],
    }
  }))();

  return (
    <Layout>
      <Hero title="Smart Home" subtitle="Inteligentná domácnosť" imageSrc={mainImage} />
      <Container>
        <TopSpace>
          <SideBySide image={iphoneImage} alt="Bezdrôtová inteligentná domácnosť.">
            <Typography variant="body1" paragraph>
              Ak máte malý byt, alebo veľký dom, ak staviate, alebo už máte staršiu stavbu a chcete jej <Bold>jednoduché a intuitívne zabezpečenie, ovládanie a kontrolu</Bold>, potom aj Vy dnes môžete vlastniť inteligentnú domácnosť.
            </Typography>
          </SideBySide>
        </TopSpace>
        <TopSpace spacing={3}>
        <Grid container>
          <Grid item md={3} className={classes.gridItem}>
            <div className={classes.gridItemInner}>
              <Typography variant="body1">Inštalujeme systémy <Bold>Fibaro, RTI,
                Jablotron, Apple Homekit, Homey a Logitech
                Harmony</Bold>.</Typography>
            </div>
          </Grid>
          <Grid item md={3} className={classes.gridItem}>
            <div className={classes.gridItemInner}>
              <Typography variant="body1">Použitie <Bold>bezdrotových
                technológií Z-WAVE, Zigbee</Bold> alebo <Bold>Wifi</Bold> bez
                nutnosti ťahania káblov.</Typography>
            </div>
          </Grid>
          <Grid item md={3} className={classes.gridItem}>
            <div className={classes.gridItemInner}>
              <Typography variant="body1">Spočiatku môže domácnosť obsahovať iba
                niekoľko základných funkcií a <Bold>cenou sa Vám
                  prispôsobí</Bold>.</Typography>
            </div>
          </Grid>
          <Grid item md={3} className={classes.gridItem}>
            <div className={classes.gridItemInner}>
              <Typography variant="body1">Ovládanie pomocou smartphone alebo
                hlasového ovládania <Bold>Alexa, Siri, Google Assistant</Bold>.</Typography>
            </div>
          </Grid>
        </Grid>
        </TopSpace>
      </Container>

      <TopSpace>
        <WideImage image={smartApartment} alt="Smart apartment" />
      </TopSpace>

      <Container>
        <TopSpace>
          <SideBySide image={homekitGears} alt="Homepod a homekit zariadenia">
            <Typography variant="h4" gutterBottom>Čo dnes dokáže inteligentná domácnosť</Typography>
            <Typography variant="body1" component="div">
              <ul className={classes.list}>
                <li className={classes.listItem}><Bold>zabezpečenie domácnosti</Bold> pomocou pohybových a dverových čidiel a kamery</li>
                <li className={classes.listItem}>automatické <Bold>zabránenie vytopeniu</Bold> uzatvorením prívodu vody</li>
                <li className={classes.listItem}>prebudenie osôb v prípade <Bold>detekcie dymu a požiaru</Bold></li>
                <li className={classes.listItem}>automatizované <Bold>ovládanie kúrenia</Bold> (ovládanie kotla, podlahového kúrenia, alebo radiátorových hlavíc)</li>
              </ul>
            </Typography>
          </SideBySide>
        </TopSpace>
        <TopSpace>
          <SideBySide reverse image={smartAssistans} alt="Alexa, Siri a Google Assistant">
            <Typography variant="body1" component="div">
              <ul className={classes.list}>
                <li className={classes.listItem}>automatizované <Bold>ovládanie svetiel a žalúzií</Bold> (možné realizovať aj na pôvodných elektroinštaláciách)</li>
                <li className={classes.listItem}>ovládanie <Bold>audio-video zariadení a domáceho kina</Bold> pomocou jediného ovládača</li>
                <li className={classes.listItem}>zónové bezdrôtové mutliroom <Bold>ozvučenie SONOS</Bold>, alebo <Bold>Bluesound</Bold></li>
                <li className={classes.listItem}><Bold>kontrola kvality ovzdušia</Bold>, teploty a vlhkosti v danej miestnosti, a riadenie vzduchotechniky</li>
              </ul>
            </Typography>
          </SideBySide>
        </TopSpace>
        <TopSpace>
          <Typography variant="body1" paragraph>
            Okrem návrhu a inštalácie sa sústreďujeme na pohotový popredajný servis a starostlivosť o našich zákazníkov.
            <br/>
            <Bold><Link href="/#kontakt">Kontaktujte nás</Link> a dohodnite si stretnutie v našom showroome.</Bold>
          </Typography>
        </TopSpace>
      </Container>
      <div style={{ height: "33vh" }} />
    </Layout>
  )
}

export default Page
