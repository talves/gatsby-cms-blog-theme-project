# Instructions

We are going to setup a yarn workspace project for our theme and work through the steps.

## Dependencies

- `yarn` (using yarn workspaces)
- Gatsby
- NetlifyCMS source plugin

## Setup Git

- Initialize
- 

## Setup project

- workspaces
- package.json
- create demo/packages directories

`package.json`
```javascript
{
  "name": "just-demo",
  "private": true,
  "workspaces": [
    "demo",
    "packages/@talves/*"
  ],
  "scripts": {
    "demo": "yarn workspace demo develop"
  }
}
```

### Create a theme data blog package (package/@talves/gatsby-theme-cms-data-blog)

```bash
cd package/@talves/gatsby-theme-cms-data-blog
yarn init -y
```

`gatsby-config.js`
```javascript
const { createPluginPaths, createPluginOptions } = require('gatsby-source-netlify-cms')
const config = require('./src/cms/default-config.json')

const cmsPluginOptions = createPluginOptions(config)
const cmsPluginPaths = createPluginPaths(config)

module.exports = {
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
```
