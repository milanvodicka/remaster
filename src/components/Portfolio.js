import React from "react"
import { Grid, Typography, makeStyles } from "@material-ui/core"

const Portfolio = ({ titles }) => {
  const classes = makeStyles(theme => ({
    container: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
    },
    typo: {
      color: "white",
      textAlign: "center",
      textShadow: "0 0 3px rgba(0,0,0,0.8)"
    },
    tile: {
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(218,218,218,1) 100%)",
      "@media (max-width: 600px)": {
        width: "100%"
      },
    },
    content: {
      height: "300px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background 500ms",
      "&:hover": {
        background: "rgba(0,0,0,0.6)",
      },
    },
  }))()
  return (
    <Grid container className={classes.container} spacing={0}>
      {titles.map(title => (
        <Grid item key={title} className={classes.tile} md={4} sm={6}>
          <div className={classes.content}>
            <Typography variant="h4" className={classes.typo}>
              {title}
            </Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  )
}

export default Portfolio
