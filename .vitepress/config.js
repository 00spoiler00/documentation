import { withMermaid } from "vitepress-plugin-mermaid"
import sidebar from "../sidebarMenus"

// https://vitepress.dev/reference/site-config
export default withMermaid({

    lang: 'en-US',
    title: "UVE Developer Portal",
    description: "Discover the limitless potential of integrating and building upon UVE's robust suite of tools and APIs. As the gateway to a vibrant ecosystem, the UVE Developer Portal is meticulously crafted to offer all the resources you need for seamless development experiences.",
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

        search: {
            provider: 'local'
        },

        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/index' },
            { text: 'UVE Documentation', link: '/api/index' },
            { text: 'CMS Usage', link: '/cms/index' },
        ],

        sidebar,

        socialLinks: [
            { icon: 'linkedin', link: 'https://es.linkedin.com/company/uvesolutions' }
        ]
    }
})