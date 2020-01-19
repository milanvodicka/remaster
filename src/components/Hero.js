import React from "react"
import {
  makeStyles,
  Container,
  Typography,
  useTheme,
  Button
} from "@material-ui/core"
import LazyHero from "react-lazy-hero"
import {primaryColor} from "../helpers"

const styles = (theme) => ({
  typo: {
    color: "white",
    marginBottom: theme.spacing(1),
    textAlign: "left",
    textShadow: "0px 4px 3px rgba(0,0,0,0.5), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1)",
  },
  hero: {
    "& > div:nth-child(2) > div": {
      flex: 1,
    },
  },
  button: {
    color: "white",
    backgroundColor: primaryColor,
    "&:hover": {
      backgroundColor: primaryColor,
      boxShadow:
        "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
    }
  }
})

export const HeroContent = ({ title, subtitle = null, cta = null, onClick = null, style = {} }) => {
  const theme = useTheme()
  const classes = makeStyles(styles)()
  return (
    <div style={style}>
      <Typography
        variant="h2"
        className={classes.typo}
        style={{ fontWeight: 400, marginBottom: theme.spacing(4), lineHeight: '1.1', fontSize: '3rem' }}
      >
        {title}
      </Typography>
      {subtitle &&
        <Typography variant="h5" className={classes.typo} style={{ lineHeight: '1.3'}}>
          {subtitle}
        </Typography>
      }
      {cta && onClick &&
        <Button
          variant="contained"
          onClick={onClick}
          size="large"
          className={classes.button}
        >
          {cta}
        </Button>
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
        parallaxOffset={50}
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
