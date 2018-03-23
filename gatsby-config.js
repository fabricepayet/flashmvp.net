module.exports = {
  siteMetadata: {
    title: 'FlashMVP: Get your application in 4 weeks',
    desc:
      'FlashMVP développe la première version de votre application, dans le but de confronter au plus tôt vos hypothèses au marché',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
};
