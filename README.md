## gatsby-cms-blog-theme-project

A project to show how to create themes and a site using the `gatsby-source-netlify-cms` plugin

### Project package layout (mono-repo using yarn workspaces)

    demo                                # Gatby demo site using theme
    ├── ...
    ├── @talves/packages                # Theme module package projects
    │   ├── gatsby-theme-cms            # The CMS theme package 
    │   ├── gatsby-theme-cms-data       # Data used by the CMS theme
    │   ├── gatsby-theme-cms-data-site  # Site data
    │   └── gatsby-theme-cms-data-blog  # Blog data
    └── ...

### Theme composition layout

    demo                                    # Gatby demo site using theme
    │   @talves (Package namespace) 
    ├── gatsby-theme-cms                    # The CMS theme 
    │   ├── gatsby-theme-cms-data           # Data used by the CMS theme
    │   │   ├── gatsby-theme-cms-data-site  # Site data
    │   │   └── gatsby-theme-cms-data-blog  # Blog data
    └── ...
