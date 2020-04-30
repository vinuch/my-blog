const path = require('path');

module.exports = {
  siteName: 'Developer Vince',
  siteDescription: 'My takes, My views, and My opinions🌚',
  siteUrl: 'http://localhost:8080',

  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true,
      }
    },
    {
      use: 'gridsome-source-static-meta',
      options: {
        path: 'content/site/*.json'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Author',
        path: 'content/author/*.md'
      }
    }, 
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Blog',
        path: 'content/posts/*.md',
        refs: {
          author: 'Author',
          tags: {
            typeName: 'Tag',
            create: true
          },
          category: {
            typeName: 'Category',
            create: true
          }
        }
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    },
    {
      use: 'gridsome-plugin-image-cdn',
      options: {
        site: {
          baseUrl: 'https://vince-blog.netlify.app/'
        },
        cdn: {
          baseUrl: 'https://res.cloudinary.com/vincecloud',
          preset: 'cloudinary',
          imagePrefix: '/image/upload/f_auto/v1588110321/blog%20assets/'
        },
        types: [
          {
            typeName: 'Blog',
            sourceField: 'image'
          }
        ]
      }
    }
  ],

  transformers : {
    remark : {
      plugins : [
        '@noxify/gridsome-remark-table-align',
        ['@noxify/gridsome-remark-classes', {
          'paragraph': 'text-normal font-serif py-2',
          'table': 'table table-striped',
          'tableCell[align=center]' : 'text-center',
          'tableCell[align=right]': 'text-right',
          'list[ordered=true]': 'list-decimal ml-5',
          'list:not([ordered=true])': 'list-disc ml-5'
        }]
      ]
    }
  },

  templates: {
    Blog: [
      {
        path: '/blog/:title'
      }
    ],
    Category: [{
      path: '/category/:title',
      component: '~/templates/Category.vue'
    }],
    Author: [{
      path: '/author/:name',
      component: '~/templates/Author.vue'
    }],
    Tag: [{
      path: '/tags/:title',
    }],
  }
}