const path = require(`path`)

exports.createPages = async function({actions,graphql}){

    const {data} = await graphql(`

     query {
        allContentfulStory {
          edges {
            node {
              slug
              id
              title
              titleExplanation
              outcome {
                raw
              }
              solution {
                raw
              }
              challenge {
                raw
              }
              storyImage {
                fluid{
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                }
              }
            }
          }
        }
      }
      
    `)

    data.allContentfulStory.edges.forEach(({ node }) => {
        actions.createPage({
          path: node.slug,
          component: path.resolve(`./src/components/templates/story.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            content:node,
          },
        })
      })
}