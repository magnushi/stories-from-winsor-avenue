export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d8c026ca8470db0f5242866',
                  title: 'Sanity Studio',
                  name: 'stories-from-winsor-avenue-studio',
                  apiId: '5b8bfc87-e72d-45a7-95f7-8ba0a2e98ae9'
                },
                {
                  buildHookId: '5d8c026c7ce66eb08bfcb1be',
                  title: 'Blog Website',
                  name: 'stories-from-winsor-avenue',
                  apiId: '8c38a7a8-abec-4e8b-bf1c-c2b5bc6a2593'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magnushi/stories-from-winsor-avenue',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://stories-from-winsor-avenue.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
