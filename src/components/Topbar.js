import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Elsewhere from '@src/components/Elsewhere';
import Hyperaudio from '@src/assets/hyperaudio-logo.svg';

const useStyles = makeStyles(theme => ({
  root: { background: 'transparent' },
  toolbar: theme.mixins.toolbar,
  inner: {
    alignContent: 'center',
    alignItems: 'center',
    display: 'flex',
    minHeight: theme.spacing(8),
    [theme.breakpoints.up('md')]: {
      minHeight: theme.spacing(10),
    },
  },
  brandmark: {
    height: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      height: theme.spacing(6),
    },
  },
  menu: {
    display: 'none',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    '& > *': {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },
  menuItem: {
    borderColor: 'transparent',
  },
}));

export default function Topbar({ location: { pathname }, ...props }) {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} color="inherit" position="static">
      <Toolbar className={classes.toolbar} disableGutters>
        <Grid alignContent="stretch" alignItems="center" container direction="row" justify="space-between" spacing={4}>
          <Grid item className={`${classes.inner}`} xs={6}>
            <Hyperaudio className={classes.brandmark} />
          </Grid>
          <Grid item container className={`${classes.inner}`} xs={6} justify="flex-end">
            <Elsewhere />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
