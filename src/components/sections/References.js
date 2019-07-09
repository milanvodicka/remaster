import React from "react"
import { useTheme, Container } from "@material-ui/core"
import Portfolio from "../Portfolio"
import SectionTitle from "../SectionTitle"

const References = () => {
  const theme = useTheme()
  return (
      <Container
        id="referencie"
        style={{ marginTop: theme.spacing(4), marginBottom: theme.spacing(4) }}
      >
        <SectionTitle>Referencie</SectionTitle>
        <Portfolio
          titles={[
            "Byt Eurovea",
            "Byt Riverpark",
            "Dom Včie Hrdlo",
            "Dom Hamuliakovo",
            "Chata Nezábudka",
            "Hotel Lindner",
          ]}
        />
      </Container>
  )
}

export default References
