import React from 'react';
import Link from '@material-ui/core/Link';

export default {
  description: 'Hyperaudio is THIS THIS AND THAT',
  keywords: 'hyperaudio, audio, webmedia, media, online, speech, text, word, alignment, tools',
  title: 'Hyperaudio',
  url: 'https://hyper.audio/',
  mailto: 'hello@hyper.audio',
  elsewhere: {
    slack: {
      url: 'https://hyperaudio.slack.com/signup#/',
      tip: 'Join our Slack channel',
    },
    twitter: {
      url: 'https://twitter.com/hyperaud_io',
      tip: 'Follow us on Twitter',
    },
    github: {
      url: 'https://github.com/hyperaudio',
      tip: 'Visit Hyperaudio Github',
    },
    tinyletter: {
      url: 'https://tinyletter.com/hyperaudio',
      tip: 'Sign up to our tiny letter',
    },
  },
  mdComponents: {
    a: props => <Link component="a" {...props} />,
  },
};
