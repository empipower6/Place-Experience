import React from "react"
import Header from "./header"
import Footer from "./footer"

import '../stylesheets/style.scss'

import { useStaticQuery, graphql } from 'gatsby'



const Layout =(props)=>{

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
      footerLogo : allContentfulFooter {
        nodes {
          footerLogo {
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

      address : allContentfulFooter {
        nodes{
        address {
          raw
        }
      }
    }
      }
    `)

    return(
        <div className="header">
            <Header logo={data.logo.childImageSharp.fluid} circle={data.circle.childImageSharp.fluid}/>
            {props.children}
            <Footer footerLogo={data.footerLogo} address={data.address} />
        </div>
    )
}

export default Layout;