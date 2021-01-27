module.exports = {
  siteMetadata: {
    title: `Perła Warmi`,
    description: `- Zespół tańca ludowego.`,
    author: `nettom`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,    
  ],
}
