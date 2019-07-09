import React from "react"
import { makeStyles, Container, Typography, useTheme } from "@material-ui/core"
import LazyHero from "react-lazy-hero"

const Hero = ({ title, subtitle = null, imageSrc, id = null }) => {
  const theme = useTheme()
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
    <>
      {id && <a id={id} style={{ position: 'relative', top: '17px' }}/>}
      <LazyHero
        imageSrc={imageSrc}
        color="black"
        opacity={0.4}
        minHeight="60vh"
        parallaxOffset={30}
        className={classes.hero}
      >
        <Container style={{ textAlign: "left" }}>
          <Typography variant="h2" className={classes.typo} style={{ fontWeight: 400, marginBottom: theme.spacing(4)}}>
            {title}
          </Typography>
          {subtitle &&
            <Typography variant="h5" className={classes.typo}>
              {subtitle}
            </Typography>
          }
        </Container>
      </LazyHero>
    </>
  )
}

export default Hero
