import React from "react"
import { makeStyles, Container, Typography } from "@material-ui/core"
import LazyHero from "react-lazy-hero"

const Hero = ({ title, subtitle, imageSrc }) => {
  const classes = makeStyles(theme => ({
    typo: {
      color: "white",
      marginBottom: theme.spacing(1),
      textAlign: "left",
      textShadow: "0 0 5px rgba(0,0,0,0.8)",
    },
    hero: {
      "& > div:nth-child(2) > div": {
        flex: 1,
      },
    },
  }))()
  return (
    <LazyHero
      imageSrc={imageSrc}
      color="black"
      opacity="0.5"
      minHeight="30vh"
      parallaxOffset={30}
      className={classes.hero}
    >
      <Container style={{ textAlign: "left" }}>
        <Typography variant="h3" className={classes.typo}>
          {title}
        </Typography>
        <Typography variant="body1" className={classes.typo}>
          {subtitle}
        </Typography>
      </Container>
    </LazyHero>
  )
}

export default Hero
