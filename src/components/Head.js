import React from 'react';
import { Helmet } from 'react-helmet';

import useTheme from '@material-ui/core/styles/useTheme';

import ornament from '@src/ornaments/ornament.svg';
import config from '@src/config';

export default function Head(props) {
  const theme = useTheme();

  return (
    <Helmet encodeSpecialCharacters={true} titleTemplate={`%s ⋅ ${config.title}`} defaultTitle={config.title}>
      <html lang="en" />

      <link rel="canonical" href={config.url} />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />

      <meta name="author" content="Hyperaudio — https://hyper.audio" />
      <meta name="charset" content="utf-8" />
      <meta name="coverage" content="Worldwide" />
      <meta name="description" content={config.description} />
      <meta name="designer" content="Hyperaudio — https://hyper.audio" />
      <meta name="distribution" content="Global" />
      <meta name="google" content="nositelinkssearchbox" />
      <meta name="keywords" content={config.keywords} />
      <meta name="language" content="en" />
      <meta name="rating" content="General" />
      <meta name="revist-after" content="after 1 days" />
      <meta name="robots" content="index,follow" />
      <meta name="title" content={config.title} />
      <meta
        name="viewport"
        content="width=device-width, minimum-scale = 1.0, initial-scale = 1.0, maximum-scale = 1.0, user-scalable=no, shrink-to-fit=no"
      />

      {/* twitter metadata */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@hyperaudi_io" />

      {/* og metadata */}
      <meta property="og:description" content={config.description} />
      <meta property="og:image" content="/cover.png" />
      <meta property="og:image:alt" content={config.title} />
      <meta property="og:image:height" content="627" />
      <meta property="og:image:secure_url" content="/cover.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:locale" content="en" />
      <meta property="og:site_name" content={config.title} />
      <meta property="og:title" content={config.title} />
      <meta property="og:url" content={config.url} />

      <style>
        {`
          html {
            background: linear-gradient(${theme.palette.background.default}, ${theme.palette.background.paper}) !important;
          }
          html, body { width: 100%; overflow-x: hidden; }
          body {
            background-attachment: fixed;
            background-color: transparent !important;
            background-image: url(${ornament});
            background-position: center 100%;
            background-repeat: no-repeat;
            background-size: cover;
          }
          button:focus,
          a:focus {
            outline: none;
          }
        `}
      </style>
    </Helmet>
  );
}
