export default [
    {
        text: 'Brainwaves',
        items: [
            { text: 'AI', link: '/brainwaves/ai.md' },
            { text: 'Strategy', link: '/brainwaves/strategy.md' },
        ],
    },
    {
        text: 'Presentations',
        items: [
            { text: 'Developer Portal', link: '/presentations/developer-portal.md' },
            { text: 'Connecta Tester', link: '/live-presentations/connecta-tester' },
        ],
    },
    {


        text: 'Projects',
        items: [
            { text: 'Connecta SDK', link: '/projects/connecta-sdk-custom-projects-cowork/' },
            { text: 'Fronted ModelEditor POC', link: '/projects/front-end-model-editor/' },
            { text: 'Matching upgrade', link: '/projects/matching-upgrade.md' },
            { text: 'C# Code Style', link: '/projects/codestyle-csharp.md' },
            { text: 'Matching & Normalization Upgrade', link: '/projects/matching-upgrade.md' },
            { text: 'Frontend PoC', link: '/projects/poc-frontend-editor.md' },
            { text: 'Cloud/CAX RoadMap', link: '/projects/cloud-roadmap.md' },
            { text: 'Record Consistency Checker', link: '/projects/record-consistency-checker.md' },
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
        text: 'Solution ReadMes',
        items: [
            { text: 'UveCore', link: '/readmes/uve-core/index.md' },
        ]
    },
    {
        text: 'Other',
        items: [
            { text: 'Connecta', link: '/resources/connecta-datamodels.md' },
            { text: 'Reporta', link: '/resources/reporta-category-tree.md' },
        ]
    },


]
