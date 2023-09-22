export default [
    {
        text: 'ETL',
        collapsible: true,
        items: [
            { text: 'Quick Start', link: '/etl/index' },
            {
                text: 'SipIn',
                link: '/etl/sipIn/index',
                items: [
                    { text: 'Full Records ⚠️', link: '/etl/sipIn/allRecords' },
                    { text: 'API Specs', link: '/etl/sipIn/api' },
                    { text: 'MarketFlash specific ⚠️', link: '/etl/sipIn/marketFlash' },
                    { text: 'Sells specific ⚠️', link: '/etl/sipIn/sells' },
                    { text: 'IPaaS', link: '/etl/sipIn/IPaaS' },
                ]
            },
            { text: 'SipOut ⚠️', link: '/etl/sipOut/index' },
        ]
    },
    {
        text: 'TaskManagement',
        items: [
            { text: 'Quick Start', link: '/taskManagement/index' },
            { text: 'API Specs', link: '/taskManagement/api' },
        ]
    },
    {
        text: 'Content creators [i]',
        items: [
            { text: 'Quick Start', link: '/contentCreation/index' },
            { text: 'Markdown', link: '/contentCreation/markdown' },
            { text: 'Diagramming', link: '/contentCreation/mermaid' },
            { text: 'Dynamic Content', link: '/contentCreation/dynamicContent' },
        ]
    },
    {
        text: 'Development [i]',
        items: [
            { text: 'TODO', link: '/development/todo' },
            { text: 'TEST', link: '/development/test' },
            { text: 'Converter TEST', link: '/test' },
        ]
    },
]