import React from "react"
import { Typography, useTheme } from "@material-ui/core"

const SectionTitle = ({ children, style = {} }) => {
  const theme = useTheme()
  return (
    <Typography
      variant="h3"
      style={{
        fontWeight: 300,
        marginTop: theme.spacing(12),
        marginBottom: theme.spacing(6),
        ...style,
      }}
    >
      {children}
    </Typography>
  )
}

export default SectionTitle
