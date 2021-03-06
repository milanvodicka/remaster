import React from "react"
import ServicePage from "../../components/ServicePage"
import main from "../../images/servis/cistenie-platni/main.jpg"
import offer from "../../images/servis/cistenie-platni/offer.png"
import { Grid, Typography, Paper, makeStyles } from "@material-ui/core"
import Link from "../../components/Link"
import Bold from "../../components/Bold"
import grey from "@material-ui/core/colors/grey"

const Page = () => {
  const classes = makeStyles((theme) => ({
    priceListWrapper: {
      padding: theme.spacing(3),
    },
    priceListRow: {
      padding: theme.spacing(2),
      borderBottom: '1px solid' + grey['300'],
    },
    priceListTitle: {
      fontWeight: 'bold'
    }
  }))();
  return (
    <ServicePage
      breadcrumbs={[["Služby", "/#sluzby"], ["Servis"], ["Čistenie platní"]]}
      title="Čistenie platní"
      subtitle="Čistenie LP platní najmoderňejšou technológiou"
      mainImage={main}
      intro={
        <>
          <Typography variant="body1" paragraph>
            Poskytujeme čistenie LP platní najmoderňejšou, špičkovou technológiou.
          </Typography>
          <Typography variant="body1" paragraph>
            <Bold>Príďte si vyskúšať výsledok prania s doposiaľ najdokonalejším spôsobom odstránenia nečistôt z vinylových drážok, práčkou Audio Desk Systeme Gläss.</Bold>
          </Typography>
          <Typography variant="body1" paragraph>
            Vinyl Cleaner Pro je prvý a zatiaľ jediný prístroj pre čistenie vinylových platní, ktorý kombinuje <Bold>ultrazvukový čistiaci proces</Bold> založený na kavitácii spolu
            s konvenčným mechanickým čistením pomocou rotujúcich valcov z mikrovlákna. Kavitácia je proces známy z mechaniky tekutín, ktorý spočíva v prípade tohto zariadenia vo
            vytvorení veľkého množstva explodujúcich <Bold>mikroskopických vákuových bublín, ktoré vyvolávajú rázovú vlnu</Bold> šíriacu sa kvapalinou. Nespočetné množstvo
            mikro-výbuchov efektívne uvoľňuje všetky nečistoty z drážok platne.
          </Typography>
        </>
      }
      offer={
        <Paper className={classes.priceListWrapper}>
          <Grid container spacing={3}>
            <Grid item xs={9} className={`${classes.priceListRow} ${classes.priceListTitle}`}>
              Popis služby
            </Grid>
            <Grid item xs={3} className={`${classes.priceListRow} ${classes.priceListTitle}`}>
              Cena s dph
            </Grid>
            <Grid item xs={9} className={classes.priceListRow}>
              Čistenie vinylu ultrazvukovou práčkou bez výmeny vnútorného obalu
            </Grid>
            <Grid item xs={3} className={classes.priceListRow}>
              3,20€
            </Grid>
            <Grid item xs={9} className={classes.priceListRow}>
              Čistenie vinylu ultrazvukovou práčkou s výmenou vnútorného obalu
            </Grid>
            <Grid item xs={3} className={classes.priceListRow}>
              3,60€
            </Grid>
          </Grid>
        </Paper>
      }
      offerImage={offer}
      offerTitle="Naša ponuka"
      end={
        <Typography variant="body1">
          Adresa: Pluhová 40/a, Bratislava<br/>
          Otváracie hodiny: pondelok až piatok od 9:00 do 17:00<br/>
          Tel: <Link href="tel:+421 903 704 700">+421 903 704 700</Link>
        </Typography>
      }
    />
  )
}

export default Page
