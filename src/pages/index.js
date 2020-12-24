import * as React from "react"
import Layout from '../components/layout'
import Intro from '../components/home/intro'
import { useStaticQuery, graphql } from 'gatsby'

// markup
const IndexPage = () => {
  let data = useStaticQuery(graphql`
    query image{
        circle: file(relativePath: {eq: "blue-circle.png"}) {
         childImageSharp {
           fluid{
            ...GatsbyImageSharpFluid
           }
         }
       }
       logo: file(relativePath: {eq: "logoSquare.png"}) {
        childImageSharp {
          fluid{
           ...GatsbyImageSharpFluid
          }
        }
      }
      triangle: file(relativePath: {eq: "triangle.png"}) {
         childImageSharp {
           fluid{
            ...GatsbyImageSharpFluid
           }
         }
       }
       square: file(relativePath: {eq: "square.png"}) {
        childImageSharp {
          fluid{
           ...GatsbyImageSharpFluid
          }
        }
      }
      r: file(relativePath: {eq: "r.png"}) {
        childImageSharp {
          fluid{
           ...GatsbyImageSharpFluid
          }
        }
      }
      rectangle: file(relativePath: {eq: "rectangle.png"}) {
        childImageSharp {
          fluid{
           ...GatsbyImageSharpFluid
          }
        }
      }
       
    }`
)
  return (
    <Layout logo={data.logo.childImageSharp.fluid} circle={data.circle.childImageSharp.fluid}>
    
       <Intro triangle={data.triangle.childImageSharp.fluid} square={data.square.childImageSharp.fluid} r={data.r.childImageSharp.fluid} rectangle={data.rectangle.childImageSharp.fluid}/>
    

    </Layout>  
  )
}

export default IndexPage
