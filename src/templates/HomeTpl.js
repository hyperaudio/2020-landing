import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Headline from '@src/components/Headline';
import Layout from '@src/components/Layout';
import Separator from '@src/components/Separator';
import config from '@src/config';
import withTheme from '@src/themes/withTheme';

const useStyles = makeStyles(theme => ({
  pitch: {},
  pitchInner: {},
  ctas: {
    textAlign: 'center',
    marginTop: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(10),
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
    },
    '& > *': {
      margin: theme.spacing(1, 0),
      [theme.breakpoints.up('sm')]: {
        margin: theme.spacing(1, 1),
      },
      [theme.breakpoints.up('md')]: {
        margin: theme.spacing(0, 2.5),
      },
    },
  },
  illustration: {
    height: '200px',
    margin: theme.spacing(0, 0, 5),
    [theme.breakpoints.up('md')]: {
      height: '300px',
      margin: theme.spacing(0, 0, 10),
    },
  },
}));

const HomeTpl = ({
  data: {
    mdx: { frontmatter },
  },
  ...props
}) => {
  const classes = useStyles();

  // console.group('HomeTpl.js');
  // console.log(props);
  // console.groupEnd();

  return (
    <Layout {...props}>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>
      <main>
        <div className={classes.pitch}>
          <Container disableGutters className={classes.pitchInner}>
            <Headline title={frontmatter.pitch.title} text={frontmatter.pitch.text}></Headline>
          </Container>
          <Separator silent />
          <Container disableGutters className={classes.pitchInner} maxWidth="md">
            <Grid container spacing={8}>
              <Grid item xs={12} sm={6}>
                <Card>
                  <CardContent>
                    <Typography>Remix audio and video from Interactive Transcripts.</Typography>
                    <Typography>It’s as simple as drag and drop!</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card>
                  <CardContent>
                    <Typography>Encourage Media Literacy with Hyperaudio for Schools.</Typography>
                    <Typography>Show students how to create and evaluate media. Video essays anyone?</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card>
                  <CardContent>
                    <Typography>Make your online conference super-accessible and multilingual.</Typography>
                    <Typography>Search, comment and share conference material with the world.</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card>
                  <CardContent>
                    <Typography>Edit your Podcast in double-quick time.</Typography>
                    <Typography>And get an accompanying Interactive Transcript into the bargain.</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card>
                  <CardContent>
                    <Typography>Capture lectures so you can experience them remotely and in your own time.</Typography>
                    <Typography>Bookmark, annotate and summarise the good bits.</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
          <Container disableGutters className={classes.ctas}>
            <Button color="primary" href={config.elsewhere.tinyletter} size="large" variant="contained">
              Get early access!
            </Button>
          </Container>
        </div>
      </main>
    </Layout>
  );
};

export default withTheme(HomeTpl);

export const pageQuery = graphql`
  query HomeTplQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        pitch {
          title
          text
        }
      }
    }
  }
`;
