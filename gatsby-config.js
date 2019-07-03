module.exports = {
  siteMetadata: {
    title: 'Remaster',
    description: 'Your integration partner in smart, secure and multimedia appliances.',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-142285450-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "remaster.sk",
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {},
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
