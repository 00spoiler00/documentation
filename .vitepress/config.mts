import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "UVE Developer Portal",
  description: "Discover the limitless potential of integrating and building upon UVE's robust suite of tools and APIs. As the gateway to a vibrant ecosystem, the UVE Developer Portal is meticulously crafted to offer all the resources you need for seamless development experiences.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/index' },
      { text: 'CMS tutorials', link: '/cms/markdown-examples' },
      { text: 'UVE Documentation', link: '/api/index' }
    ],
    
    sidebar: [
      {
        text: 'Development',
        items: [
          { text: 'TODO', link: '/development/todo' },
          { text: 'Test', link: '/development/test' }
        ]
      },
      {
        text: 'Using this CMS',
        items: [
          { text: 'Markdown Examples', link: '/cms/markdown-examples' },
          { text: 'Runtime API Examples', link: '/cms/api-examples' },
          { text: 'Test', link: '/test' }
        ]
      },
      {
        text: 'APIs Documentation',
        items: [
          { text: 'Data Integration (Nomenclators)', link: '/api/dataIntegration/nomenclators' },
          { text: 'Data Integration (API)', link: '/api/dataIntegration/api' },
          { text: 'Task Management', link: '/api/taskManagement/index' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'linkedin', link: 'https://es.linkedin.com/company/uvesolutions' }
    ]
  }
})
