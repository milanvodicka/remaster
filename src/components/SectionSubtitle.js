import React from "react"
import { Typography, useTheme } from "@material-ui/core"

const SectionTitle = ({ children, style = {} }) => {
  const theme = useTheme()
  return (
    <Typography
      variant="h4"
      style={{
        fontWeigth: 400,
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        ...style,
      }}
    >
      {children}
    </Typography>
  )
}

export default SectionTitle
