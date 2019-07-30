module.exports = {
  "collections": [
    {
      "name": "docs",
      "label": "Docs Entries",
      "label_singular": "Entry",
      "description": "The docs entry edited here can be markdown or mdx.\n",
      "extension": "mdx",
      "format": "frontmatter",
      "folder": "content/docs",
      "slug": "{{year}}-{{month}}-{{day}}-{{slug}}",
      "create": true,
      "fields": [
        {
          "label": "Title",
          "name": "title",
          "widget": "string",
          "tagname": "h1"
        },
        {
          "label": "Draft?",
          "name": "draft",
          "widget": "boolean"
        },
        {
          "label": "Publish Date",
          "name": "date",
          "widget": "datetime",
          "dateFormat": "YYYY-MM-DD",
          "timeFormat": "HH:mm",
          "format": "YYYY-MM-DD HH:mm"
        },
        {
          "label": "Body",
          "name": "body",
          "widget": "markdown"
        }
      ]
    }
  ]
}