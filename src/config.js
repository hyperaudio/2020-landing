import React from 'react';
import Link from '@material-ui/core/Link';

export default {
  description: 'A new way of looking at audio.',
  keywords: 'hyperaudio, audio, webmedia, media, online, speech, text, word, alignment, tools',
  title: 'Hyperaudio',
  url: 'https://hyper.audio/',
  mailto: 'hello@hyperaud.io',
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
      url: 'http://eepurl.com/hdUrXr',
      tip: 'Sign up to our tiny letter',
    },
  },
  mdComponents: {
    a: props => <Link component="a" {...props} />,
  },
};
