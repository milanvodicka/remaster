import React from "react"
import { navigate } from "gatsby"
import { makeStyles } from "@material-ui/core"
import { primaryColor } from "../helpers"

const Link = ({ href, children }) => {
  const classes = makeStyles({
    a: {
      cursor: "pointer",
      color: primaryColor,
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  })()
  return (
    <a className={classes.a} onClick={() => navigate(href)}>
      {children}
    </a>
  )
}

export default Link
