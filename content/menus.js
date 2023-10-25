export default [
    {
        text: 'NewConnecta',
        link: '/new-connecta/',
        items: [
            {
                text: 'Architecture',
                link: '/new-connecta/architecture/',
                items: [

                    {
                        text: 'Example flows',
                        link: '/new-connecta/architecture/flows.md',
                    },
                    {
                        text: 'Parts',
                        items: [
                            { text: 'Orchestrator', link: '/new-connecta/architecture/parts/orchestrator' },
                            { text: 'Orchestration API', link: '/new-connecta/architecture/parts/orchestrator_api' },
                            { text: 'Worker', link: '/new-connecta/architecture/parts/worker' },
                            { text: 'Storage', link: '/new-connecta/architecture/parts/storage' },
                            { text: 'Channel', link: '/new-connecta/architecture/parts/channel' },
                        ],
                    },

                ],


            },
            {
                text: 'Implementation',
                items: [
                    { text: '01 - CU-CRUD-UX', link: '/new-connecta/implementation-phases/01' },
                    { text: '02 - Recipes', link: '/wip.md' },
                    { text: '03 - IO (Connectors)', link: '/wip.md' },
                    { text: '04 - Workers (Legacy)', link: '/wip.md' },
                    { text: '05 - Workers (New)', link: '/wip.md' },
                    { text: '06 - New 𝑓(x)', link: '/wip.md' },

                ],
            },
            { text: 'ClassMap', link: '/new-connecta/classmap' },
            {
                text: 'Others', items:
                    [
                        { text: 'Meet 231006', link: '/new-connecta/meets/20231006' },
                        { text: 'CU Roadmap', link: '/new-connecta/cu-roadmap' },
                    ]
            },
        ],
    },
    {
        text: 'Matching',
        link: '/matching/',
        items: [
        ]
    }

]
