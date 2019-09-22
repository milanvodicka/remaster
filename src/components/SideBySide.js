import { Grid, makeStyles } from "@material-ui/core"
import Image from "./Image"
import React from "react"

const SideBySide = ({ reverse = false, children, image, alt, grid = [6, 6], style = {} }) => {
  const classes = makeStyles(theme => ({
    imageGrid: {
      [theme.breakpoints.only("xs")]: {
        ...(reverse ? { marginBottom: theme.spacing(6) } : { marginTop: theme.spacing(6) }),
      },
      [theme.breakpoints.up('sm')]: {
        ...(reverse ? { paddingRight: theme.spacing(2) } : { paddingLeft: theme.spacing(2) }),
      }
    },
    textGrid: {
      [theme.breakpoints.up('sm')]: {
        ...(reverse ? { paddingLeft: theme.spacing(2) } : { paddingRight: theme.spacing(2) }),
      },
    }
  }))()

  const [left, right] = grid;

  const Text = () => (
    <Grid item sm={left} className={classes.textGrid}>
      {children}
    </Grid>
  )

  const GridImage = () => (
    <Grid item sm={right} className={classes.imageGrid}>
      <Image image={image} alt={alt} />
    </Grid>
  )

  return !reverse ? (
    <Grid container alignItems="center" style={style}>
      <Text />
      <GridImage />
    </Grid>
  ) : (
    <Grid container alignItems="center" style={style}>
      <GridImage />
      <Text />
    </Grid>
  )
}

export default SideBySide
