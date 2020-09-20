const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const home = await graphql(`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "/content/index.mdx/" } }) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  const creators = [
    {
      src: home,
      tpl: path.resolve('src/templates/HomeTpl.js'),
    },
  ];

  /* Create pages */
  creators.forEach(creator => {
    const { src, tpl } = creator;
    src.data.allMdx.edges.forEach(({ node: { slug, id } }) => {
      createPage({
        path: slug || '/',
        component: tpl,
        context: {
          id,
        },
      });
    });
  });
};
