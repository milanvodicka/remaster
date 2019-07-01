import React, { useEffect } from "react"
import HtmlHeader from "./HtmlHeader"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Grid,
  Container,
} from "@material-ui/core"
import "typeface-roboto"
import Phone from "@material-ui/icons/Phone"
import SmoothScroll from "smooth-scroll"
import { Location, navigate } from "@reach/router"

if (typeof window !== "undefined") {
  // Make scroll behavior of internal links smooth
  new SmoothScroll('a[data-href*="#"]', { offset: 130 })
}

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
    paddingTop: "105px",
    "@media (min-width: 600px)": {
      paddingTop: "113px",
    },
  },
  socialIcon: {
    textTransform: "none",
    color: "#FFFFFF",
    fontWeight: "normal",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}))

const navigation = classes => ({ name, anchor = null, active = false }) => (
  <a className={classes.a} data-href={`#${anchor || ""}`}>
    <Button
      variant="contained"
      className={active ? classes.buttonActive : classes.button}
      onClick={() => navigate(anchor ? `#${anchor}` : '/')}
    >
      {name}
    </Button>
  </a>
)

const active = hash =>
  window && window.location && window.location.hash === hash

const Layout = ({ title = "", children }) => {
  useEffect(() => {
    console.log("effect")
    if (window) {
      const e = window.location.hash && document.querySelector(window.location.hash)
      const scroll = new SmoothScroll()
      if (e) {
        scroll.animateScroll(e.offsetTop - 130)
      } else {
        scroll.animateScroll(0)
      }
    }
  }, [window.location.hash])
  const classes = useStyles()
  const Nav = navigation(classes)

  return (
    <>
      <HtmlHeader title={title} />
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
                    <Typography variant="body2">+421 907 574 291</Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Button className={classes.socialIcon}>Facebook</Button>
                  <Button className={classes.socialIcon}>Linked In</Button>
                </Grid>
              </Grid>
            </Toolbar>
          </Grid>
          <Grid item>
            <Toolbar>
              <Grid container justify="space-between">
                <Grid item>
                  <Typography variant="h5" noWrap>
                    <a className={classes.a} href="#" onClick={(e) => { navigate('/'); e.preventDefault()}}>
                      Remaster
                    </a>
                  </Typography>
                </Grid>
                <Grid item>
                  <Nav name="Home" active={active("#") || active("")} />
                  <Nav name="Foo" anchor="foo" active={active("#foo")} />
                  <Nav name="Bar" anchor="bar" active={active("#bar")} />
                  <Nav name="Baz" anchor="baz" active={active("#baz")} />
                </Grid>
              </Grid>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
      <Location>
        {({ location }) => {
          console.log("Location: ", location)
        }}
      </Location>
      <Container className={classes.container}>{children}</Container>
    </>
  )
}

export default Layout
