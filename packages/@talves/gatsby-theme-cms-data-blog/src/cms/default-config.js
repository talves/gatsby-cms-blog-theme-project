module.exports = {
  "collections": [
    {
      "name": "blog",
      "label": "Blog Entries",
      "label_singular": "Entry",
      "description": "The blog entry edited here can be markdown.\n",
      "folder": "content/blog",
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
        },
        {
          "label": "Blog Entry Author",
          "name": "author",
          "widget": "relation",
          "collection": "authors",
          "searchFields": [
            "name",
            "description"
          ],
          "valueField": "tag"
        }
      ]
    },
    {
      "name": "authors",
      "label": "Authors",
      "folder": "content/authors",
      "extension": "json",
      "description": "Author descriptions",
      "slug": "{{slug}}",
      "create": true,
      "fields": [
        {
          "label": "Tag(ie: talves)",
          "name": "tag",
          "widget": "string",
          "hint": "Lowercase author id"
        },
        {
          "name": "info",
          "label": "Author Information",
          "label_singular": "Information",
          "widget": "object",
          "fields": [
            
            {
              "label": "Name",
              "name": "name",
              "widget": "string",
              "hint": "First and Last"
            },
            {
              "label": "Description",
              "name": "description",
              "widget": "markdown"
            }
          ]
        }
      ]
    }
  ]
}