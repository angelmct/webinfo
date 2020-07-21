import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#000',
  },
  title: {
    flexGrow: 1,
    color: 'primary'
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div >
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Ángel Mocetzuma
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}