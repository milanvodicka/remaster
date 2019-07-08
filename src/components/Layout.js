import React, { useEffect } from "react"
import HtmlHeader from "./HtmlHeader"
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Grid,
  useMediaQuery,
  useTheme,
  Fab,
  IconButton
} from "@material-ui/core"
import "typeface-roboto"
import Phone from "@material-ui/icons/Phone"
import Menu from "@material-ui/icons/Menu"
import SmoothScroll from "smooth-scroll"
import { navigate } from "@reach/router"
import { SocialIcon } from "react-social-icons"
import ScrollSpy from "./ScrollSpy"

const buttonStyles = theme => ({
  fontWeight: "normal",
  textTransform: "none",
  color: "#FFFFFF",
  backgroundColor: "#151515",
  "&:hover": {
    backgroundColor: "#EC5538",
  },
  marginRight: theme.spacing(0.5),
  boxShadow: "none",
})

const useStyles = makeStyles(theme => ({
  button: buttonStyles(theme),
  buttonActive: {
    ...buttonStyles(theme),
    backgroundColor: "#EC5538",
  },
  a: {
    color: "#FFFFFF",
    textDecoration: "none",
  },
  container: {
    paddingTop: "113px",
  },
  socialIcon: {
    height: "25px !important",
    width: "25px !important",
    marginLeft: theme.spacing(0.5),
    "& .social-svg-mask:hover": {
      fill: "rgb(236, 85, 56) !important",
    },
  },
}))

const scrollTo = (id = null) => {
  if (window) {
    const e = id && document.querySelector(`#${id}`)
    const scroll = new SmoothScroll()
    if (e) {
      scroll.animateScroll(e.offsetTop - 130)
    } else {
      scroll.animateScroll(0)
    }
  }
}

const navigation = classes => ({ name, anchor = null, active = false }) => (
  <a className={classes.a}>
    <Button
      variant="contained"
      className={active ? classes.buttonActive : classes.button}
      onClick={() => {
        const url = anchor ? `#${anchor}` : "/"
        navigate(url)
        scrollTo(anchor)
      }}
    >
      {name}
    </Button>
  </a>
)

const Layout = ({ title = "", children }) => {
  useEffect(() => {
    if (window) {
      scrollTo(window.location.hash.substring(1))
    }
  }, [window.location.hash])
  const classes = useStyles()
  const theme = useTheme()
  const phone = !useMediaQuery(theme.breakpoints.up("sm"))
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
            <Toolbar variant="dense">
              <Grid
                container
                justify="space-between"
                direction="row"
                alignItems="center"
              >
                <Grid item>
                  <Grid container direction="row" alignItems="center">
                    <Phone fontSize="small" />
                    <Typography variant="body2">
                      <a
                        href="tel:+421907574291"
                        style={{ color: "#FFF", textDecoration: "none" }}
                      >
                        +421 907 574 291
                      </a>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <SocialIcon
                    network="facebook"
                    bgColor="#404040"
                    className={classes.socialIcon}
                    url="#"
                  />
                  <SocialIcon
                    network="linkedin"
                    bgColor="#404040"
                    className={classes.socialIcon}
                    url="#"
                  />
                </Grid>
              </Grid>
            </Toolbar>
          </Grid>
          <Grid item>
            <Toolbar style={{ minHeight: '64px' }}>
              <Grid container justify="space-between" alignItems="center">
                <Grid item>
                  <Typography variant="h5" noWrap>
                    <a
                      className={classes.a}
                      href="#"
                      onClick={e => {
                        navigate("/")
                        e.preventDefault()
                      }}
                    >
                      Remaster
                    </a>
                  </Typography>
                </Grid>
                <Grid item>
                  {!phone && (
                    <ScrollSpy ids={["onas", "sluzby", "referencie", "kontakt"]}>
                      {ids => (
                        <>
                          <Nav name="Hore" active={ids.top} />
                          <Nav name="O nás" anchor="onas" active={ids.onas} />
                          <Nav name="Služby" anchor="sluzby" active={ids.sluzby} />
                          <Nav name="Referencie" anchor="referencie" active={ids.referencie} />
                          <Nav name="Kontakt" anchor="kontakt" active={ids.kontakt} />
                        </>
                      )}
                    </ScrollSpy>
                  )}
                  {phone && (
                    <>
                    {false && <Fab size="small" style={{ backgroundColor: '#EC5538' }}><Menu /></Fab>}
                    <IconButton size="small"><Menu style={{ color: "#EC5538" }} /></IconButton>
                    </>
                  )}
                </Grid>
              </Grid>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
      <div className={classes.container}>{children}</div>
    </>
  )
}

export default Layout
