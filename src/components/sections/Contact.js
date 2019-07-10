import React from "react"
import { Container, useTheme, Typography, makeStyles } from "@material-ui/core"
import Hero from "../Hero"
import SectionTitle from "../SectionTitle"

const Contact = () => {
  const classes = makeStyles({
    a: {
      color: 'rgba(0, 0, 0, 0.87)',
      '&:hover': {
        color: '#EC5538',
      }
    }
  })()
  const theme = useTheme()
  return (
      <Container
        id="kontakt"
        style={{ marginTop: theme.spacing(4), marginBottom: theme.spacing(4) }}
      >
        <SectionTitle>Kontakt</SectionTitle>
        <Typography variant="h6">AV Integra servis, s.r.o</Typography>
        <Typography variant="body1">
          Pluhová 40/A<br/>
          831 03, Bratislava<br/><br/>
          Peter Vodička ml. – obchodný zástupca<br/>
          Tel: <a className={classes.a} href="tel:+421 907 574 291">+421 907 574 291</a>,<br/>
          Email: <a className={classes.a} href="mailto:vodicka@remaster.sk">vodicka@remaster.sk</a><br/>
        </Typography>
      </Container>
  )
}

export default Contact
