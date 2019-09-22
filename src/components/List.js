import { makeStyles } from "@material-ui/core"
import React from "react"
import grey from "@material-ui/core/colors/grey"

const List = ({ items = [] }) => {
  const classes = makeStyles(theme => ({
    list: {
      margin: 0,
      padding: 0,
      paddingLeft: theme.spacing(4),
    },
    listItem: {
      marginBottom: theme.spacing(2),
      color: grey["800"],
    },
  }))()
  return (
    <ul className={classes.list}>
      {items.map((item, key) => (
        <li key={key} className={classes.listItem}>{item}</li>
      ))}
    </ul>
  )
}

export default List
