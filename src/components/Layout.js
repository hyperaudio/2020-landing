import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import makeStyles from '@material-ui/core/styles/makeStyles';

// import Contact from '@src/components/Contact';
import Footer from '@src/components/Footer';
import Head from '@src/components/Head';
import Separator from '@src/components/Separator';
import Topbar from '@src/components/Topbar';
import config from '@src/config';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    // [theme.breakpoints.up('md')]: {},
  },
  toolbar: theme.mixins.toolbar,
}));

export default function Layout({ children, ...props }) {
  const classes = useStyles();

  console.group('Layout.js');
  console.log({ props });
  console.groupEnd();

  return (
    <>
      <Head {...props} />
      <CssBaseline />
      <Container className={classes.root}>
        <MDXProvider components={config.mdComponents}>
          <Topbar {...props} />
          <Separator silent />
          {children}
          <Separator silent />
          {/* <Contact {...props} /> */}
          {/* <Separator silent /> */}
          <Footer {...props} />
        </MDXProvider>
      </Container>
    </>
  );
}
