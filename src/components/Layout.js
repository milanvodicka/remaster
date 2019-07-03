import React, { useEffect } from "react"
import HtmlHeader from "./HtmlHeader"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Grid,
} from "@material-ui/core"
import "typeface-roboto"
import Phone from "@material-ui/icons/Phone"
import SmoothScroll from "smooth-scroll"
import { navigate } from "@reach/router"
import { SocialIcon } from "react-social-icons"

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

const active = hash =>
  window && window.location && window.location.hash === hash

const Layout = ({ title = "", children }) => {
  useEffect(() => {
    if (window) {
      scrollTo(window.location.hash.substring(1))
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
            <Toolbar>
              <Grid container justify="space-between">
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
                  <Nav name="Home" active={active("")} />
                  <Nav name="Foo" anchor="foo" active={active("#foo")} />
                  <Nav name="Bar" anchor="bar" active={active("#bar")} />
                  <Nav name="Baz" anchor="baz" active={active("#baz")} />
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
