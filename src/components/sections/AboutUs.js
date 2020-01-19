import React from "react"
import { Typography, Container, useTheme, Grid } from "@material-ui/core"
import SectionTitle from "../SectionTitle"
import SectionSubtitle from "../SectionSubtitle"

const AboutUs = () => {
  const theme = useTheme()
  return (
    <Container
      id="onas"
      style={{ marginTop: theme.spacing(6), marginBottom: theme.spacing(6) }}
    >
      <SectionTitle>
        O nás
      </SectionTitle>
      <SectionSubtitle>
        Technológie pre modernú domácnosť alebo firmu.
      </SectionSubtitle>
      <Grid container spacing={2}>
        <Grid item sm={6}>
          <Typography variant="body1">
            Mnohí zákazníci hľadajú spolahlivého dodávateľa, ktorý by im
            zabezpečil technológiu pre modernú domácnosť, alebo firmu. Či už sa
            jedná o smart - inteligentné ovládanie domu, bytu a kancelárie,
            alebo bezpečnosť, monitorovanie priestoru, jednoduché a pohodlné
            ovládanie multimediálnych zariadení, alebo vybavenie domáceho kina,
            u nás nájdete komplexný záber pre všetky tieto odvetvia.
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography variant="body1">
            Sme moderná spoločnosť, ktorá sa orientuje najmä na poskytovanie
            služieb a dobrého servisu, a preto ponúkame našim klientom pomoc
            aj s produktami, ktoré si zakúpili sami. Našou pridanou hodnotou je
            totiž know-how a skúsenosti, ktorými vieme pomôcť našim klientom.
            Máme dlhoročné skúsenosti so starostlivosťou o zákazníkov a vieme,
            ako veľmi si cenia kvalitnú servisnú a popredajnú starostlivosť.
            O našich klientov sa staráme dlhodobo. Vždy sa preto budeme riadiť
            prozákazníckou filozofiou a poslaním prinášať pohodlie, bezpečnosť
            a slobodu pri používaní našich systémov a riešení.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AboutUs
