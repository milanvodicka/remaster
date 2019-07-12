import React, { useState } from "react"
import inViewport from "react-in-viewport"
import { Fade } from "@material-ui/core"

const Transition = ({ children, inViewport, innerRef }) => {
  const [visible, show] = useState(false)
  if (inViewport && !visible) show(true)
  return <Fade timeout={1500} in={visible} ref={innerRef}>{children}</Fade>
}

export default inViewport(Transition)
