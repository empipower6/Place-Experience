import React from 'react'
import Layout from '../components/layout'

import { useStaticQuery, graphql } from 'gatsby'

import Articles from '../components/insights/articles'



const Insights = ()=>{

    let data = useStaticQuery(graphql`

            query{
                articles:   allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "Place Experience Article"}}}}}) {
                    edges {
                    node {
                        slug
                        title
                        date(formatString: "MMM DD,YYYY")
                        excerpt
                        categories {
                            nodes {
                                name
                            }
                        }
                        featuredImage {
                        node {
                            localFile {
                            childImageSharp {
                                fluid {
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
                    }
                }      
    }`


)

    return(
        <>
        <Layout>
        
        <Articles articles={data.articles} />

        </Layout>
        </>
    )
}

export default Insights