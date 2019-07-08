/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: `/overview/`,
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "CMS",
        fieldName: "cms",
        url: `http://127.0.0.1:8000/api/graphql`,
      }
    },
    /*{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `overview`,
        short_name: `overview`,
        start_url: `/overview`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },*/
    `gatsby-plugin-offline`,
  ]
}
