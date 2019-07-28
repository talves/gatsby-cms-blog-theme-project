const path = require('path')

module.exports = (options) => {
  const { config = {} } = options

  return {
    plugins: [
      {
        resolve: "@talves/gatsby-theme-cms-data",
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
  }
}
