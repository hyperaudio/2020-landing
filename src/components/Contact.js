import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { ThemeProvider } from '@material-ui/core/styles';

import lightTheme from '@src/themes/lightTheme';
import config from '@src/config';

const useStyles = makeStyles(theme => ({
  paper: {
    height: '100%',
    padding: theme.spacing(10),
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(10, 5),
      textAlign: 'center',
    },
  },
  item: {
    [theme.breakpoints.down('sm')]: {
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px !important`,
    },
    position: 'relative',
  },
  button: {
    marginTop: theme.spacing(3),
  },
  gridItem: {
    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  },
}));

export default function Contact(props) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={lightTheme}>
      <Paper className={`${classes.paper}`}>
        <Grid container alignContent="stretch" spacing={8}>
          <Grid className={classes.gridItem} item xs={12} md={4}>
            <div>
              <Typography color="textPrimary" component="h2" gutterBottom variant="h4">
                Join newsletter
              </Typography>
              <Typography variant="body1" gutterBottom>
                Occasionally we send out emails with news about the project. Sign up to receive our newsletter.
              </Typography>
            </div>
            <Button className={classes.button} href={config.elsewhere.tinyletter.url} variant="outlined">
              Tune in
            </Button>
          </Grid>
          <Grid className={classes.gridItem} item xs={12} md={4}>
            <div>
              <Typography color="textPrimary" component="h2" gutterBottom variant="h4">
                Catch us on Slack
              </Typography>
              <Typography variant="body1" gutterBottom>
                Stop by to say hello, ask a question, or share a creation.
              </Typography>
            </div>
            <Button className={classes.button} href={config.elsewhere.slack.url} variant="outlined">
              Join Slack
            </Button>
          </Grid>
          <Grid className={classes.gridItem} item xs={12} md={4}>
            <div>
              <Typography color="textPrimary" component="h2" gutterBottom variant="h4">
                Email us
              </Typography>
              <Typography variant="body1" gutterBottom>
                Avoid the overwhelming pressures of real time chat and send a note directly to {config.mailto}.
              </Typography>
            </div>
            <Button className={classes.button} href={`mailto:${config.mailto}`} variant="outlined">
              Email us
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}
