import React from "react"
import Header from "./header"
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
    }
    `)

    return(
        <div className="header">
            <Header logo={data.logo.childImageSharp.fluid} circle={data.circle.childImageSharp.fluid}/>
            {props.children}
        </div>
    )
}

export default Layout;