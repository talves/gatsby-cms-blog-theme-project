const config = require('./config')

module.exports = {
  plugins: [
    {
      resolve: "@talves/gatsby-theme-cms",
      options: { config }
    }
  ]
};
