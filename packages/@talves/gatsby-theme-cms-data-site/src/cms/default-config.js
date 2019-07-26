module.exports = {
  "collections": [
    {
      "name": "settings",
      "label": "Settings",
      "delete": false,
      "editor": {
        "preview": false
      },
      "files": [
        {
          "file": "content/settings/site-metadata.json",
          "name": "siteMetadata",
          "label": "Site Metadata",
          "fields": [{
              "name": "title",
              "label": "Title",
              "widget": "string"
            },
            {
              "name": "author",
              "label": "Author Name",
              "widget": "string"
            },
            {
              "name": "description",
              "label": "Description",
              "widget": "string"
            },
            {
              "name": "social",
              "label": "Social Links",
              "widget": "list",
              "fields": [
                {"name": "name", "label": "Social Name", "widget": "string"},
                {"name": "url", "label": "URL", "widget": "string"}
              ]
            }
          ]
        },
        {
          "name": "netlify",
          "label": "Netlify Settings",
          "file": "netlify.toml",
          "description": "Netlify Build Settings",
          "fields": [
            {
              "label": "Build Settings",
              "name": "build",
              "widget": "object",
              "fields": [
                {
                  "label": "Build Command",
                  "name": "command",
                  "widget": "string"
                },
                {
                  "label": "Publish location",
                  "name": "publish",
                  "widget": "string"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}