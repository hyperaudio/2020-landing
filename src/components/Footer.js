import React from 'react';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Elsewhere from '@src/components/Elsewhere';
import Hyperaudio from '@src/assets/hyperaudio-logo.svg';
import config from '@src/config';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
    },
  },
  item: {
    [theme.breakpoints.down('sm')]: {
      padding: `${theme.spacing(1)}px ${theme.spacing(4)}px !important`,
    },
  },
  elsewhere: {
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    },
  },
  motherhood: {
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
    },
  },
  logo: {
    height: theme.spacing(3),
    width: 'auto',
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  return (
    <Grid alignContent="stretch" alignItems="center" className={classes.root} component="footer" container spacing={8}>
      <Grid className={`${classes.item} ${classes.motherhood} `} container item md={3} xs={12}>
        <Hyperaudio className={classes.logo} alt="Hyperaudio" />
      </Grid>
      <Grid className={`${classes.item}`} item md={6} xs={12}>
        <Typography align="center" component="p" variant="caption" color="textSecondary">
          Hyperaudio is a project by Mark Boas, Laurian Gridinoc, Piotr Fedorczyk & Co. This project is licensed under
          XYZ, meaning you can do this this and that. Feel free to{' '}
          <Link href={`mailto:${config.mailto}`}>reach to us</Link> for more details.
        </Typography>
      </Grid>
      <Grid className={`${classes.item} ${classes.elsewhere}`} container item md={3} xs={12}>
        <Elsewhere />
      </Grid>
    </Grid>
  );
}
