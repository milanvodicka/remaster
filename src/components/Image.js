import { makeStyles } from "@material-ui/core"
import Transition from "./Transition"
import React from "react"

const Image = ({ image, alt }) => {
  const classes = makeStyles(theme => ({
    image: {
      display: "block",
      width: "100%",
      height: "auto",
      // margin: "auto",
      borderRadius: "5px",
    },
  }))()

  return (
    <Transition>
      <img className={classes.image} src={image} alt={alt} />
    </Transition>
  )
}

export default Image;