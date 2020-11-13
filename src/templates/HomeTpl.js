import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { ThemeProvider } from '@material-ui/core/styles';

import Layout from '@src/components/Layout';
import Separator from '@src/components/Separator';
import lightTheme from '@src/themes/lightTheme';
import withTheme from '@src/themes/withTheme';

const useStyles = makeStyles(theme => ({
  pitch: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
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
  something: {},
}));

const HomeTpl = ({
  data: {
    mdx: { frontmatter },
  },
  ...props
}) => {
  const classes = useStyles();
  const [signupData, setSignupData] = useState({
    email: '',
    optin: '',
  });

  // console.group('HomeTpl.js');
  // console.log(props);
  // console.groupEnd();

  return (
    <Layout {...props}>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>
      <main>
        <Container disableGutters className={classes.pitch}>
          <Container maxWidth="md">
            <Typography align="center" variant="h1" gutterBottom>
              A new way of looking at audio
            </Typography>
            <Typography align="center" className={classes.text} variant="h3">
              Fully accessible media
            </Typography>
          </Container>
        </Container>
        <Separator silent />
        <Container disableGutters maxWidth="md">
          <Grid container spacing={8}>
            <Grid item xs={12} sm={6}>
              <div className={classes.something}>
                <Typography variant="h5" component="h2" gutterBottom>
                  Hyperaudio puts timed-transcripts at the center of your media workflow.
                </Typography>
                <Typography variant="body1">
                  We make it easy to edit and combine machine-generated transcripts with audio and video.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.something}>
                <Typography variant="h5" component="h2" gutterBottom>
                  Remix audio and video from Interactive Transcripts.
                </Typography>
                <Typography variant="body1">It’s as simple as drag and drop!</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.something}>
                <Typography variant="h5" component="h2" gutterBottom>
                  Encourage Media Literacy with "Hyperaudio for Schools".
                </Typography>
                <Typography variant="body1">
                  Show students how to create and evaluate media. Video essays anyone?
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.something}>
                <Typography variant="h5" component="h2" gutterBottom>
                  Make your online conference super-accessible and multilingual.
                </Typography>
                <Typography variant="body1">Search, comment and share conference material with the world.</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.something}>
                <Typography variant="h5" component="h2" gutterBottom>
                  Edit your Podcast in double-quick time.
                </Typography>
                <Typography variant="body1">And get a searchable Interactive Transcript into the bargain.</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.something}>
                <Typography variant="h5" component="h2" gutterBottom>
                  Capture lectures so you can experience them remotely and in your own time.
                </Typography>
                <Typography variant="body1">Bookmark, annotate and summarise the good bits.</Typography>
              </div>
            </Grid>
          </Grid>
          <Separator silent />
          <ThemeProvider theme={lightTheme}>
            <Paper className={`${classes.paper}`}>
              <Typography align="center" className={classes.text} variant="h3">
                Get early access
              </Typography>
              <form
                action="https://audio.us2.list-manage.com/subscribe/post?u=ebee85ce694a947a39dec9f26&amp;id=f90488e03a"
                id="mc-embedded-subscribe-form"
                method="post"
                name="mc-embedded-subscribe-form"
                noValidate
                target="_blank">
                <Grid container>
                  <Grid item xs>
                    <FormControl fullWidth>
                      <InputLabel htmlFor="mce-EMAIL">Email address</InputLabel>
                      <Input id="mce-EMAIL" fullWidth name="EMAIL" type="email" />
                    </FormControl>
                  </Grid>
                  <Grid item xs>
                    <FormControl fullWidth>
                      <InputLabel htmlFor="mce-MMERGE1">I'm most interested in</InputLabel>
                      <Select
                        // value={signupData.optin}
                        native
                        // onChange={handleChange}
                        fullWidth
                        inputProps={{
                          name: 'MMERGE1',
                          id: 'mce-MMERGE1',
                        }}>
                        <option aria-label="None" value="" />
                        <option value="Hyperaudio for Schools">Hyperaraudio in general</option>
                        <option value="Hyperaudio for Schools">Hyperaudio for Schools</option>
                        <option value="Hyperaudio for Conferences">Hyperaudio for Conferences</option>
                        <option value="Hyperaudio for Lectures">Hyperaudio for Lectures</option>
                        <option value="Hyperaudio for Podcasters">Hyperaudio for Podcasters</option>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <input
                      style={{ position: 'absolute', left: '-5000px', ariaHidden: 'true' }}
                      type="text"
                      name="b_ebee85ce694a947a39dec9f26_f90488e03a"
                      tabindex="-1"
                      value=""
                    />
                    <Button
                      color="primary"
                      id="mc-embedded-subscribe"
                      name="subscribe"
                      size="large"
                      type="submit"
                      variant="contained">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </ThemeProvider>
        </Container>
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
