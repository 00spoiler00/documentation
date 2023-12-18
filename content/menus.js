export default [
    {
        text: 'Projects',
        items: [
            { text: 'Matching upgrade', link: '/projects/matching-upgrade.md' },
            {
                text: 'NewConnecta',
                link: '/projects/new-connecta/',
                collapsed: true,
                items: [
                    {
                        text: 'Architecture',
                        link: '/projects/new-connecta/architecture/',
                        items: [

                            {
                                text: 'Example flows',
                                link: '/projects/new-connecta/architecture/flows.md',
                            },
                            {
                                text: 'Frontend',
                                items: [
                                    { text: 'FE library evolution proposal', link: '/projects/new-connecta/architecture/frontend/module-architecture-proposal' },
                                ],
                            },
                            {
                                text: 'Backend',
                                items: [
                                    { text: 'Orchestrator', link: '/projects/new-connecta/architecture/parts/orchestrator' },
                                    { text: 'Orchestration API', link: '/projects/new-connecta/architecture/parts/orchestrator_api' },
                                    { text: 'Worker', link: '/projects/new-connecta/architecture/parts/worker' },
                                    { text: 'Storage', link: '/projects/new-connecta/architecture/parts/storage' },
                                    { text: 'Channel', link: '/projects/new-connecta/architecture/parts/channel' },
                                ],
                            },
                        ],
                    },
                    {
                        text: 'Implementation',
                        items: [
                            { text: '01 - CU-CRUD-UX', link: '/projects/new-connecta/implementation-phases/01' },
                            { text: '02 - Recipes', link: '/wip.md' },
                            { text: '03 - IO (Connectors)', link: '/wip.md' },
                            { text: '04 - Workers (Legacy)', link: '/wip.md' },
                            { text: '05 - Workers (New)', link: '/wip.md' },
                            { text: '06 - New 𝑓(x)', link: '/wip.md' },

                        ],
                    },
                    { text: 'ClassMap', link: '/projects/new-connecta/classmap' },
                    {
                        text: 'Others', items:
                            [
                                { text: 'Meet 231006', link: '/projects/new-connecta/meets/20231006' },
                                { text: 'CU Roadmap', link: '/projects/new-connecta/cu-roadmap' },
                            ]
                    },
                ],
            },
        ]
    },
    {
        text: 'Solution ReadMe files',
        items: [
            { text: 'UveCore', link: '/readmes/uve-core/index.md' },
        ]
    },
    {
        text: 'Structures&Models',
        items: [
            { text: 'Connecta', link: '/general/structures-and-models/connecta.md' },
            { text: 'Reporta', link: '/general/structures-and-models/reporta.md' },
        ]
    },


]
