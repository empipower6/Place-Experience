import React, { useEffect } from "react"
import { BLOCKS } from '@contentful/rich-text-types';

import Layout from '../components/layout'
import { Helmet } from "react-helmet"

import Intro from '../components/home/intro'

import AboutIntro from '../components/home/about/about-intro'
import AboutExamples from '../components/home/about/about-examples'

import ServicesIntro from '../components/home/services/servicesIntro'


import { useStaticQuery, graphql } from 'gatsby'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

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
   

    about: allContentfulIntroSection {
    edges {
      node {
        introPictures {
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


  aboutTitle: allContentfulAboutUsSection1 {
    nodes {
      aboutUsTitle
    }
  }

  mapImage: allContentfulAboutUsSection1 {
    nodes {
      worldMa {
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

  aboutUsOutline: allContentfulAboutUsSection1 {
    nodes {
      titleOutline1 {
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
  
  aboutIntro: allContentfulAboutUsSection1 {
    nodes {
      textNextToMap {
        raw
      }
      text {
        raw
      }
    }
  }

  aboutExamplesDescs: allContentfulAboutUsSection2 {
    nodes {
      allInOne {
        raw
      }
      
      analytics {
        raw
      }
      designThinking {
        raw
      }
      introText
    }
  }
   aboutExampleIllustrations: allContentfulAboutUsSection2 {
    nodes {
      image {
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
   
       
    }`


)

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, next) => `<p>${next(node.content).replace(/\n/g, '<br/>')}</p>`,  },
}

useEffect(()=>{


},[]);

  
 
  return (
    <>
    <Helmet title="Place Experience">
      
    </Helmet>
    <Layout logo={data.logo.childImageSharp.fluid} circle={data.circle.childImageSharp.fluid}>
    
       <Intro triangle={data.about.edges[0].node.introPictures[2].fluid} 
              square={data.about.edges[0].node.introPictures[3].fluid} 
              r={data.about.edges[0].node.introPictures[1].fluid} 
              rectangle={data.about.edges[0].node.introPictures[0].fluid}/>
       
       <AboutIntro sectionName={data.aboutTitle.nodes[0].aboutUsTitle} 
                   introText={documentToHtmlString(JSON.parse(data.aboutIntro.nodes[0].text.raw),options)} 
                   map={data.mapImage.nodes[0].worldMa.fluid} 
                   outline={data.aboutUsOutline.nodes[0].titleOutline1.fluid} 
                   mapText={documentToHtmlString(JSON.parse(data.aboutIntro.nodes[0].textNextToMap.raw))} 
                   triangle={data.about.edges[0].node.introPictures[2].fluid}
                   square={data.about.edges[0].node.introPictures[3].fluid} 
                   rectangle={data.about.edges[0].node.introPictures[0].fluid} />
       
       <AboutExamples illustrations={data.aboutExampleIllustrations.nodes[0]}
                      descriptions={data.aboutExamplesDescs.nodes[0]} 
                      r={data.about.edges[0].node.introPictures[1].fluid} 
                      square={data.about.edges[0].node.introPictures[3].fluid}
                      rectangle={data.about.edges[0].node.introPictures[0].fluid}/>

      
        <ServicesIntro />
    </Layout>  
    </>
  )
}

export default IndexPage
