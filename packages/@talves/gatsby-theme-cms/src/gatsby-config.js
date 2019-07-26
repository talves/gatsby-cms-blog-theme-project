module.exports = ({ config }) => ({
  plugins: [
    {
      resolve: '@talves/gatsby-theme-cms-data-blog',
      options: { config }
    },
    {
      resolve: '@talves/gatsby-theme-cms-data-site',
      options: { config }
    }
  ]
})
