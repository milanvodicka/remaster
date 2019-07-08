import React from "react"
import { useTheme, Container } from "@material-ui/core"
import Hero from "../Hero"
import Portfolio from "../Portfolio"

const References = () => {
  const theme = useTheme()
  return (
    <>
      <Hero
        id="referencie"
        title="Referencie"
        imageSrc="https://unsplash.it/2000/1000"
      />
      <Container
        style={{ marginTop: theme.spacing(4), marginBottom: theme.spacing(4) }}
      >
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
    </>
  )
}

export default References
