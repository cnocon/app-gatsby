const path = require(`path`)
const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://cristin.io',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    siteUrl: siteUrl,
    title: `Cristin O'Connor | Front End Developer`,
    author: `Cristin O'Connor`,
    jobTitle: `Front End Developer`,
    description: `Professional Front End Development Blog and CV Site`,
    twitter: `@cnocon`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-134680170-1",
        head: false,
        exclude: ["/preview**"],
        pageTransitionDelay: 0,
        defer: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "cristin.io",
      },
    },
    {
      resolve: `gatsby-source-buttercms`,
      options: {
        authToken: process.env.GATSBY_BUTTER_API_KEY,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CRISTINIO`,
        short_name: `CRISTINIO`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#5ec5ed`,
        display: `standalone`,
        icon: `src/images/square-portrait.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://cristin.io',
        sitemap: 'https://cristin.io/sitemap.xml',
        resolveEnv: () => process.env.NETLIFY_ENV,
        env: {
          production: {
            policy: [{ 
              userAgent: '*', 
              allow: ['/', '/static/']
            }]
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["styles/*.scss"],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto\:300,400,500,700,900`,
          `oswald\:200,400,700`,
          `lato\:300,400,700,900`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [``, `/resume`, `/articles/page-1`, `/articles/page-2`, `/articles/page-3`, `/portfolio`],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allButterPost } }) => {
              return allButterPost.edges.map(edge => {
                return Object.assign({}, edge.node, {
                  description: edge.node.summary,
                  date: edge.node.published,
                  url: site.siteMetadata.siteUrl + '/' + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.slug,
                  category: "Web Development",
                  custom_elements: [
                    { "content:encoded": edge.node.body },
                  ],
                })
              })
            },
            query: `
              {
                allButterPost(
                  sort: { order: DESC, fields: [created] },
                ) {
                  edges {
                    node {
                      summary
                      body
                      slug
                      title
                      published
                      created
                      featured_image
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "CRISTIN.IO // Front End Development Blog",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/blog/"
          },
        ],
      },
    },
  ],
}
