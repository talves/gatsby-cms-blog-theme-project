const { createPluginPaths, createPluginOptions } = require('gatsby-source-netlify-cms')
const baseConfig = require('./cms/default-config.js')

module.exports = ({ config }) => {
  const newConfig = { ...baseConfig, ...config }
  const cmsPluginOptions = createPluginOptions(newConfig)
  const cmsPluginPaths = createPluginPaths(newConfig)
  // We have sample data so pass this plugin path
  cmsPluginOptions.copyRootPath = `${__dirname}`

  return {
    plugins: [
      // Setup the netlify cms source (data)
      {
        resolve: "gatsby-source-netlify-cms",
        options: cmsPluginOptions
      },
      // Setup the file source plugins for the above
      ...cmsPluginPaths,
    ]
  }
}