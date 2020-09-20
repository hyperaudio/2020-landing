import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  text: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(4),
    },
  },
}));

export default function Headline({ text, title, ...props }) {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      {title ? (
        <Typography align="center" variant="h1">
          {title}
        </Typography>
      ) : null}
      {props.children}
      {text ? (
        <Typography
          align="center"
          className={classes.text}
          dangerouslySetInnerHTML={{ __html: text }}
          variant="subtitle1"
        />
      ) : null}
    </Container>
  );
}
