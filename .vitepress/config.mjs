import { withMermaid } from "vitepress-plugin-mermaid"
import { defineConfig } from 'vitepress'
import sidebar from "../content/menus"

// https://vitepress.dev/reference/site-config

export default withMermaid({

  lang: 'en-US',
  title: "Documentation",

  description: "Internal UVE documentation repository",
  head: [
    [
      'link',
      { rel: 'icon', href: '/favicon.ico' }
    ],
    [
      'link',
      { rel: 'stylesheet', href: '/css/fontawesome.css' }
    ],
    [
      'link',
      { rel: 'stylesheet', href: '/css/brands.css' }
    ],
    [
      'link',
      { rel: 'stylesheet', href: '/css/solid.css' }
    ],
  ],

  cleanUrls: true,
  srcDir: './content',

  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },

  // optionally set additional config for plugin itself with MermaidPluginConfig
  mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container 
  },

  themeConfig: {

    logo: "/logo.png",
    siteTitle: "Documentation",

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/index' },
    ],

    sidebar,

    socialLinks: [
      { icon: 'linkedin', link: 'https://es.linkedin.com/company/uvesolutions' }
    ],

    footer: {
      message: "UVE Services on Demand S.L.",
      copyright: "Copyright © 2023-present UVE Services on Demand S.L.",
    },

  }
})