const path = require('path');
const remarkNormalizeHeadings = require('remark-normalize-headings');
const remarkSqueezeParagraphs = require('remark-squeeze-paragraphs');

module.exports = {
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
            },
          },
          {
            resolve: 'gatsby-remark-component',
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              sizeByPixelDensity: true,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: path.resolve(__dirname, 'src/assets'),
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`work sans\:400,500,600,700`, `roboto\:400,400i,700`, `roboto mono\:400,500,600`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': path.resolve(__dirname, 'src'),
        },
        extensions: [],
      },
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        reportOnly: false,
        mergeScriptHashes: true,
        mergeStyleHashes: false,
        mergeDefaultDirectives: true,
        directives: {
          'script-src': "'self'",
          'style-src': "'self' 'unsafe-inline' fonts.googleapis.com",
          'font-src': "'self' fonts.gstatic.com",
          'img-src': "'self' data: www.google-analytics.com",
          'frame-ancestors': "'none'",
          'form-action': "'self' audio.us2.list-manage.com",
        },
      },
    },
  ],
};
