import React, { useEffect } from "react"
import Layout from '../components/layout'
import { Helmet } from "react-helmet"

import Intro from '../components/home/intro'

import AboutIntro from '../components/home/about/about-intro'
import AboutExamples from '../components/home/about/about-examples'

import Services from '../components/home/services/services'

import Stories from '../components/home/stories/stories'

import Team from '../components/home/team/team'



import { useStaticQuery, graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


// markup
const IndexPage = () => {
  let data = useStaticQuery(graphql`
  query{
       
   

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

  servicesTexts : allContentfulOurServices {
    nodes {
      title
      introText {
        raw
      }
      introOfFirstSection

      section1Text1 {
        raw
      }

      section1Text2 {
        raw
      }
      section1Text3 {
        raw
      }
      section1Text4 {
        raw
      }
      section1Text5 {
        raw
      }
      introOfSecondSection

      section2Text1 {
        raw
      }
      section2Text2 {
        raw
      }
      
    }
  }

    servicesImages : allContentfulOurServices {
      nodes {
        servicesImages {
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

    stories: allContentfulStory {
      edges {
        node {
          slug
          title
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
    storiesAssets: allContentfulStoriesSectionMedia {
      nodes {
        storyAssets {
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
    
    teamMembers :  allContentfulTeamMember {
      edges {
        node {
          emailAddress
          name
          photo {
            fluid {
              aspectRatio
                base64
                sizes
                src
                srcSet
            }
          }
          position
        }
      }
    }

    teamAssets : allContentfulTeamSection {
      edges {
        node {
          images {
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

    
       
    }`


)

//to make sure the rich text has the line-breaks
const options = {
  renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br />, 
  text])
 }


useEffect(()=>{

},[]);

  
 
  return (
    <>
    <Helmet title="Place Experience">
      
    </Helmet>
    <Layout>
    
       <Intro triangle={data.about.edges[0].node.introPictures[2].fluid} 
              square={data.about.edges[0].node.introPictures[3].fluid} 
              r={data.about.edges[0].node.introPictures[1].fluid} 
              rectangle={data.about.edges[0].node.introPictures[0].fluid}/>
       
       <AboutIntro sectionName={data.aboutTitle.nodes[0].aboutUsTitle} 
                   introText={documentToReactComponents(JSON.parse(data.aboutIntro.nodes[0].text.raw),options)} 
                   map={data.mapImage.nodes[0].worldMa.fluid} 
                   outline={data.aboutUsOutline.nodes[0].titleOutline1.fluid} 
                   mapText={documentToReactComponents(JSON.parse(data.aboutIntro.nodes[0].textNextToMap.raw))} 
                   triangle={data.about.edges[0].node.introPictures[2].fluid}
                   square={data.about.edges[0].node.introPictures[3].fluid} 
                   rectangle={data.about.edges[0].node.introPictures[0].fluid} />
       
       <AboutExamples illustrations={data.aboutExampleIllustrations.nodes[0]}
                      descriptions={data.aboutExamplesDescs.nodes[0]} 
                      r={data.about.edges[0].node.introPictures[1].fluid} 
                      square={data.about.edges[0].node.introPictures[3].fluid}
                      rectangle={data.about.edges[0].node.introPictures[0].fluid}/>

      
        <Services texts={data.servicesTexts.nodes[0]}
                  images={data.servicesImages.nodes[0].servicesImages}
                  triangle={data.about.edges[0].node.introPictures[2].fluid} 
                   />

        <Stories info={data.stories} 
                  media={data.storiesAssets.nodes[0].storyAssets}
                  triangle={data.about.edges[0].node.introPictures[2].fluid}
                  rectangle={data.about.edges[0].node.introPictures[0].fluid}
                  square={data.about.edges[0].node.introPictures[3].fluid} />

        <Team members={data.teamMembers} assets={data.teamAssets}/>

    </Layout>  
    </>
  )
}

export default IndexPage
