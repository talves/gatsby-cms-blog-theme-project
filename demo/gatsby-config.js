const path = require('path')
const config = require('./config')

module.exports = {
  plugins: [
    {
      resolve: "@talves/gatsby-theme-cms",
      options: {
        config,
        basePath: `${__dirname}`
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: path.join(__dirname, `./src/cms`),
        manualInit: true, // We will not load a config automatically see src/cms/index.js
      },
    }
  ]
};
