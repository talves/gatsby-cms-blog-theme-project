const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const blogCollections = require('@talves/gatsby-theme-cms-data-blog').collections
const siteCollections = require('@talves/gatsby-theme-cms-data-site').collections

/*
  Runs prior to Gatsby doing anything else
  We are creating the cms config from options and base!
*/
exports.onPreBootstrap = (props, options) => {
  const { store, reporter } = props
  const { config = {} } = options
  const { program } = store.getState()

  // Combine the base config with passed in config, (overwrites base)
  const newConfig = {
    ...config,
    collections: [
      ...siteCollections,
      ...blogCollections,
    ]
  }
  const dir = path.join(program.directory, `./src/cms`)
  // Write out the config for the build of the cms (src/cms/config.json)
  if (!fs.existsSync(dir)) mkdirp.sync(dir)
  const configFilePath = path.join(dir, `config.json`)
  try {
    fs.writeFileSync(configFilePath, JSON.stringify(newConfig, null, 2), { flag: 'w', encoding: 'utf8' })
  } catch (error) {
    reporter.panic('[@talves/gatsby-theme-cms] Error writing config', error)
  }
}
