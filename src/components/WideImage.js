import { Container, makeStyles } from "@material-ui/core"
import Transition from "./Transition"
import React from "react"

const WideImage = ({ image, alt, style = {} }) => {
  const classes = makeStyles({
    wide: {
      maxWidth: "100%",
      padding: 0,
    },
    image: {
      width: "100%",
    },
  })()
  return (
    <Container className={classes.wide} style={style}>
      <Transition>
        <img className={classes.image} src={image} alt={alt} />
      </Transition>
    </Container>
  )
}

export default WideImage
