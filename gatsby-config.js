if(process.env.NODE_ENV == 'development'){

      require("dotenv").config({
        path: `.env`,
      })
}

module.exports = {
  siteMetadata: {
    title: "Place Experience",
  },
  plugins: [
    // {
    //   resolve: "gatsby-source-wordpress-experimental",
    //   options: {
    //     url: "https://mis-resources.com/graphql",
    //   },
    // },
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-anchor-links",
    "gatsby-plugin-fontawesome-css",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `3s9rlh9hyulv`,
      accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
    },
  },
  ],
};
