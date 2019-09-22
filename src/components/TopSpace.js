import { useTheme } from "@material-ui/core"
import { cloneElement } from "react"

const TopSpace = ({ children, margin = false, spacing = 6 }) => {
  const theme = useTheme()
  const space = theme.spacing(spacing)
  return cloneElement(children, {
    style: {
      ...(margin ? { marginTop: space } : { paddingTop: space }),
      ...(children.props.style || {}),
    },
  })
}

export default TopSpace;
