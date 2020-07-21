import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  grid: {
    background: "#343434",
    position: "sticky",
    padding: '15px 30px',
    margin: '30px 0px 0px 0px'
  },
  footer : {    
    color: 'white',
    fontSize: '1.2em'
  }
});

export default function Footer() {
  var styles = useStyles();

  return(
    <div>
      <Grid className={styles.grid}>        
        <Typography variant='h4' className={styles.footer}>Universidad de La Salle Bajío</Typography>
        <Typography className={styles.footer}>Desarrollo Integral para Aplicaciones Empresariales</Typography>
      </Grid>
    </div>
  )
}
