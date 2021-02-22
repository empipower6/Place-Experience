const path = require(`path`)

exports.createPages = async function({actions,graphql}){

    const result = await graphql(`

     {
        contentful: allContentfulStory(sort: {fields: createdAt}) {
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
                    src
                    srcSet
                }
              }
              solutionMedias {
                fluid {
                  aspectRatio
                  base64
                  src
                  srcSet
                }
              }
              outcomeMedias {
                fluid {
                  aspectRatio
                  base64
                  src
                  srcSet
                }
              }
            }
          }
        }
        wordpress:  allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "Place Experience Article"}}}}}) {
          edges {
            node {
              slug
              title
              content
              date(formatString: "MMMM DD, YYYY")
              
            }
          }
        }


      }
      
    `)


    result.data.contentful.edges.forEach(({ node }) => {
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
    result.data.wordpress.edges.forEach(({ node }) => {
        actions.createPage({
          path: node.slug,
          component: path.resolve(`./src/components/templates/article.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            content:node,
          },
        })
      })
  }


