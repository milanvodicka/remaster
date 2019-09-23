import React from "react"
import { Container, makeStyles, Typography, Breadcrumbs as MUIBreadcrumbs } from "@material-ui/core"
import Link from "./Link"

const Breadcrumbs = ({ breadcrumbs }) => {
  const classes = makeStyles(theme => ({
    wrapper: {
      background: "#191919",
    },
    container: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    separator: {
      color: "#fff",
    },
    typo: {
      color: "#fff",
    },
  }))()
  return (
    <div className={classes.wrapper}>
      <Container className={classes.container}>
        <MUIBreadcrumbs
          classes={{
            separator: classes.separator,
          }}
        >
          {breadcrumbs.map(([breadcrumb, link]) =>
            link ? (
              <Link href={link}>
                <Typography variant="body2">{breadcrumb}</Typography>
              </Link>
            ) : (
              <Typography variant="body2" className={classes.typo}>
                {breadcrumb}
              </Typography>
            )
          )}
        </MUIBreadcrumbs>
      </Container>
    </div>
  )
}

export default Breadcrumbs
