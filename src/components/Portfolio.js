import React from "react"
import { Grid, Typography, makeStyles } from "@material-ui/core"

const Portfolio = ({ titles }) => {
  const classes = makeStyles(theme => ({
    container: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
      maxWidth: 3 * 375,
      margin: "auto",
      "@media (max-width:1124px)": {
        maxWidth: 2 * 375,
      },
      "@media (max-width:749px)": {
        maxWidth: 375,
      },
    },
    typo: {
      color: "white",
    },
    tile: {
      height: 375,
      width: 375,
      background: "url(https://unsplash.it/2000/1000)",
      cursor: "pointer",
    },
    content: {
      height: 375,
      width: 375,
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
    <Grid container className={classes.container}>
      {titles.map(title => (
        <Grid item key={title} className={classes.tile}>
          <div className={classes.overlay} />
          <div className={classes.content}>
            <Typography variant="h3" className={classes.typo}>
              {title}
            </Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  )
}

export default Portfolio
