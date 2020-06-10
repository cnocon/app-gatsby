module.exports = {
  siteMetadata: {
    title: `Cristin O'Connor | Front End Developer`,
    author: `Cristin O'Connor`,
    jobTitle: `Front End Developer`,
    description: `Professional blog and portfolio site for Cristin O'Connor, professional Front End Developer`,
    twitter: `@cnocon`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-buttercms`,
      options: {
        authToken: process.env.REACT_APP_BUTTER_API_KEY,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
