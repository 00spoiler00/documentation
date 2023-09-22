import { withMermaid } from "vitepress-plugin-mermaid"
import sidebar from "../content/menus"

// https://vitepress.dev/reference/site-config
export default withMermaid({

    lang: 'en-US',
    title: "UVE Developer Portal",


    description: "Discover the limitless potential of integrating and building upon UVE's robust suite of tools and APIs. As the gateway to a vibrant ecosystem, the UVE Developer Portal is meticulously crafted to offer all the resources you need for seamless development experiences.",
    head: [
        [
            'link',
            { rel: 'icon', href: '/favicon.ico' }
        ],
        // [
        //     'link',
        //     { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
        // ],
        // [
        //     'link',
        //     { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
        // ],
        // [
        //     'link',
        //     { href: 'https://fonts.googleapis.com/css2?family=Kenia&display=swap', rel: 'stylesheet' }
        // ]
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
        siteTitle: "Developer Portal",

        search: {
            provider: 'local'
        },

        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/index' },
            { text: 'Documentation', link: '/etl/index' },
            { text: 'CMS Usage', link: '/contentCreation/index' },
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