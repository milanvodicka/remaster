import React from "react"
import Hero from "../Hero"
import { Typography, Container, useTheme, Grid } from "@material-ui/core"

const AboutUs = () => {
  const theme = useTheme()
  return (
    <>
      <Hero
        id="o-nas"
        title="O nás"
        subtitle="Technológie pre modernú domácnosť, alebo firmu."
        imageSrc="https://unsplash.it/2000/1000"
      />
      <Container style={{ marginTop: theme.spacing(4) }}>
        <Grid container direction="row">
          <Grid item style={{ flex: 1 }}>
            <Typography variant="body1">
              Mnohí zákazníci hľadajú spolahlivého dodávateľa, ktorý by im
              zabezpečil technológiu pre modernú domácnosť, alebo firmu. Či už
              sa jedná o smart - inteligentné ovládanie domu, bytu a kancelárie,
              alebo bezpečnosť, monitorovanie priestoru, jednoduché a pohodlné
              ovládanie multimediálnych zariadení, alebo vybavenie domáceho
              kina, u nás nájdete komplexný záber pre všetky tieto odvetvia.
            </Typography>
          </Grid>
          <Grid item style={{ width: theme.spacing(4) }}/>
          <Grid item style={{ flex: 1 }}>
            <Typography variant="body1">
              Sme moderná spoločnosť, ktorá sa orientuje najmä na poskytovanie
              služieb a dobrého servisu, a preto ponúkame našim zákazníkom pomoc
              aj s produktami, ktoré si zakúpili sami. Našou pridanou hodnotou
              je totiž know-how a skúsenosti, ktorými vieme pomôcť našim
              klientom. Máme dlhoročné skúsenosti so starostlivosťou
              o zákazníkov a vieme, ako veľmi si cenia kvalitnú servisnú
              a popredajnú starostlivosť. O našich zákazníkov sa staráme
              dlhodobo. Vždy sa preto budeme riadiť prozákazníckou filozofiou
              a poslaním prinášať pohodlie, bezpečnosť a slobodu pri používaní
              našich systémov a riešení.
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body1" style={{ marginTop: theme.spacing(2)}}>
          Peter Vodička – jeden z tímu Remaster.sk
        </Typography>
      </Container>
    </>
  )
}

export default AboutUs
