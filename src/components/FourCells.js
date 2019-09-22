import { Grid, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import grey from "@material-ui/core/colors/grey"

const FourCells = ({ cells }) => {
  const classes = makeStyles(theme => ({
    gridItem: {
      width: "100%",
    },
    gridItemInner: {
      color: grey["800"],
      backgroundColor: grey["200"],
      margin: theme.spacing(1),
      padding: theme.spacing(2),
      borderRadius: "5px",
    },
  }))()
  return (
    <Grid container>
      {cells.map(cell => (
        <Grid item md={3} className={classes.gridItem}>
          <div className={classes.gridItemInner}>
            <Typography variant="body1">{cell}</Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  )
}

export default FourCells
