export default [
    {
        text: 'About the portal',
        link: '/about',
    },
    {
        text: 'Our API ecosystem',
        link: '/api/',
        items: [
            { text: 'API Authorization 🔑', link: '/api/authorization' },
            {
                text: 'Connecta API',
                link: '/api/connecta/',
                items: [
                    { text: 'Specification', link: '/api/connecta/' },
                    { text: 'File Downloads', link: '/api/connecta/data-download' },
                    { text: 'Reference structures', link: '/api/connecta/structures' },
                    { text: 'iPaaS', link: '/api/connecta/iPaaS' },
                ]
            },
            { text: 'Data Access 🛠️', link: '/api/data-access' },
            { text: 'Task Management 🛠️', link: '/api/task-management' },
        ],
    },
]
