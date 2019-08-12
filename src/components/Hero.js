import React from "react"
import {
  makeStyles,
  Container,
  Typography,
  useTheme,
} from "@material-ui/core"
import LazyHero from "react-lazy-hero"

const styles = (theme) => ({
  typo: {
    color: "white",
    marginBottom: theme.spacing(1),
    textAlign: "left",
    textShadow: "0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1)",
  },
  hero: {
    "& > div:nth-child(2) > div": {
      flex: 1,
    },
  },
})

export const HeroContent = ({ title, subtitle = null, style={} }) => {
  const theme = useTheme()
  const classes = makeStyles(styles)()
  return (
    <div style={style}>
      <Typography variant="h2" className={classes.typo}
                  style={{ fontWeight: 400, marginBottom: theme.spacing(4) }}>
        {title}
      </Typography>
      {subtitle &&
      <Typography variant="h5" className={classes.typo}>
        {subtitle}
      </Typography>
      }
    </div>
  )
}

export const HeroWrapper = ({ children, imageSrc, id = null, fullScreen = false }) => {
  const classes = makeStyles(styles)()
  return (
    <>
      {id && <a id={id} style={{ position: "relative", top: "17px" }}/>}
      <LazyHero
        imageSrc={imageSrc}
        color="black"
        opacity={0.3}
        minHeight={fullScreen ? "calc(100vh - 128px)" : "60vh"}
        parallaxOffset={150}
        className={classes.hero}
      >
        <Container style={{ textAlign: "left" }}>
          {children}
        </Container>
      </LazyHero>
    </>
  )
}

const Hero = ({ title, subtitle = null, imageSrc, id = null, fullScreen = false }) => (
  <HeroWrapper imageSrc={imageSrc} id={id} fullScreen={fullScreen}>
    <HeroContent title={title} subtitle={subtitle}/>
  </HeroWrapper>
)

export default Hero
