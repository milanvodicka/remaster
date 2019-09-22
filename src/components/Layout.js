import React, { useEffect, useState } from "react"
import HtmlHeader from "./HtmlHeader"
import { CssBaseline, AppBar, Typography, Button, makeStyles, Grid, useMediaQuery, useTheme, IconButton, Container, Menu, MenuItem } from "@material-ui/core"
import "typeface-roboto"
import PhoneIcon from "@material-ui/icons/Phone"
import MenuIcon from "@material-ui/icons/Menu"
import { navigate } from "@reach/router"
import { SocialIcon } from "react-social-icons"
import logo from "../images/av-integra-servis.svg"
import { primaryColor } from "../helpers"

const useStyles = makeStyles(theme => {
  const buttonStyles = theme => ({
    fontWeight: "normal",
    textTransform: "none",
    color: "#FFFFFF",
    backgroundColor: "#151515",
    "&:hover": {
      backgroundColor: primaryColor,
    },
    marginRight: theme.spacing(0.5),
    boxShadow: "none",
  })

  return {
    button: buttonStyles(theme),
    buttonActive: {
      ...buttonStyles(theme),
      backgroundColor: primaryColor,
    },
    a: {
      color: "#FFFFFF",
      textDecoration: "none",
    },
    container: {
      paddingTop: "128px",
    },
    socialIcon: {
      height: "25px !important",
      width: "25px !important",
      marginLeft: theme.spacing(0.5),
      "& .social-svg-mask:hover": {
        fill: "rgb(197, 32, 51) !important",
      },
    },
  }
})

const scrollTo = (id = null) => {
  if (window) {
    if (!window.sscroll) {
      const SmoothScroll = require("smooth-scroll")
      window.sscroll = new SmoothScroll()
    }
    const { sscroll } = window
    const e = id && document.querySelector(`#${id}`)
    sscroll.cancelScroll()
    const options = {
      speed: 500,
      speedAsDuration: true,
      easing: "easeInOutCubic",
    }
    if (e) {
      sscroll.animateScroll(e.offsetTop - 130, undefined, options)
    } else {
      sscroll.animateScroll(0, undefined, options)
    }
  }
}

const navigation = classes => ({ name, anchor = null, active = false }) => (
  <a className={classes.a}>
    <Button
      variant="contained"
      className={active ? classes.buttonActive : classes.button}
      onClick={() => {
        const url = anchor ? `/#${anchor}` : "/"
        navigate(url)
        scrollTo(anchor)
      }}
    >
      {name}
    </Button>
  </a>
)

const phoneNavClick = (closeMenu, anchor = null) => () => {
  const url = anchor ? `/#${anchor}` : "/"
  navigate(url)
  scrollTo(anchor)
  closeMenu()
}

const Layout = ({ title = "", children }) => {
  useEffect(() => {
    if (window && window.location.hash) {
      setTimeout(() => scrollTo(window.location.hash.substring(1)), 750)
    } else {
      scrollTo()
    }
  }, [])
  const classes = useStyles()
  const theme = useTheme()
  const phone = !useMediaQuery(theme.breakpoints.up("sm"))
  const [menuEl, setMenuEl] = useState(null)
  const openMenu = event => setMenuEl(event.currentTarget)
  const closeMenu = () => setMenuEl(null)
  const Nav = navigation(classes)

  return (
    <>
      <HtmlHeader title={title} />
      <CssBaseline />
      <AppBar style={{ backgroundColor: "#151515" }}>
        <Grid container direction="column">
          <Grid
            item
            style={{
              background: "#191919",
              borderBottom: "1px solid #222",
            }}
          >
            <Container
              style={{
                minHeight: "64px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid container justify="space-between" direction="row" alignItems="center">
                <Grid item>
                  <Grid container direction="row" alignItems="center">
                    <PhoneIcon fontSize="small" />
                    <Typography variant="body2">
                      <a href="tel:+421907574291" style={{ color: "#FFF", textDecoration: "none" }}>
                        +421 907 574 291
                      </a>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  {false && <SocialIcon network="facebook" bgColor="#404040" className={classes.socialIcon} url="#" />}
                  {false && <SocialIcon network="linkedin" bgColor="#404040" className={classes.socialIcon} url="#" />}
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item>
            <Container
              style={{
                minHeight: "64px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid container justify="space-between" alignItems="center">
                <Grid item>
                  <a
                    className={classes.a}
                    href="#"
                    onClick={e => {
                      navigate("/")
                      scrollTo()
                      e.preventDefault()
                    }}
                  >
                    <img src={logo} alt="AV Integra" height="36px" />
                  </a>
                </Grid>
                <Grid item>
                  {!phone && (
                    <>
                      <Nav name="Domov" />
                      <Nav name="Služby" anchor="sluzby" />
                      <Nav name="Referencie" anchor="referencie" />
                      <Nav name="O nás" anchor="onas" />
                      <Nav name="Kontakt" anchor="kontakt" />
                    </>
                  )}
                  {phone && (
                    <>
                      <IconButton size="small" onClick={openMenu}>
                        <MenuIcon style={{ color: primaryColor }} />
                      </IconButton>
                      <Menu id="simple-menu" anchorEl={menuEl} keepMounted open={!!menuEl} onClose={closeMenu}>
                        <MenuItem onClick={phoneNavClick(closeMenu)}>Domov</MenuItem>
                        <MenuItem onClick={phoneNavClick(closeMenu, "sluzby")}>Služby</MenuItem>
                        <MenuItem onClick={phoneNavClick(closeMenu, "referencie")}>Referencie</MenuItem>
                        <MenuItem onClick={phoneNavClick(closeMenu, "onas")}>O nás</MenuItem>
                        <MenuItem onClick={phoneNavClick(closeMenu, "kontakt")}>Kontakt</MenuItem>
                      </Menu>
                    </>
                  )}
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </AppBar>
      <div className={classes.container}>{children}</div>
    </>
  )
}

export default Layout
