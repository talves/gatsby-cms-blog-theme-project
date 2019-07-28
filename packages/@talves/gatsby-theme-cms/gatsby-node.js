const path = require('path')

exports.createPages = async (
    {
      actions,
      graphql,
      reporter
    },
    // options
    {
      basePath = '/'
    }
  ) => {
    const pascalCase = str => {
      return ` ${str}`.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    }
    const { collections } = require('./src/cms/config.json')
    const markdownCollections = collections.filter(collection => {
      return (collection.folder &&
          (!collection.extension && !collection.format)
          || Boolean([undefined, 'md', 'markdown'].indexOf(collection.extension) > 0)
          || Boolean([undefined, 'md', 'markdown'].indexOf(collection.format) > 0)
        )
    })

    markdownCollections.forEach(async (collection) => {
      // create the collection page
      const slug = path.join(basePath, `${collection.name}`).replace(/\\/g, '/')
      actions.createPage({
        path: slug,
        component: require.resolve(`./src/templates/${collection.name}/index.js`),
      })
      // create the item pages for the collection
      const allName = `all${pascalCase(collection.name)}`
      const result = await graphql(`
        query {
          ${allName} {
            nodes {
              internal {
                type
              }
              id
              name
              slug
            }
          }
        }
      `)

      if (result.errors) {
        reporter.panic(`Error loading the query ${allName}`, result.errors)
      }

      result.data[allName].nodes.forEach(node => {
        const slug = path.join(basePath, node.internal.type.toLowerCase(), node.name).replace(/\\/g, '/')
        actions.createPage({
          path: slug,
          component: require.resolve(`./src/templates/${collection.name}/item`),
          context: {
            id: node.id,
            slug,
            collection: collection.name,
          }
        })
      })
    })

}

exports.onCreateDevServer = ({ app }) => {
  const fsMiddlewareAPI = require('netlify-cms-backend-fs/dist/fs')
  fsMiddlewareAPI(app)
}
