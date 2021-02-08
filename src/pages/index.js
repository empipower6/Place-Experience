import React, { useEffect,useRef } from "react"
import { Helmet } from "react-helmet"

import Intro from '../components/intro'

import About from '../components/about'

import Services from '../components/services'

import Stories from '../components/stories'

import Logo from '../components/logo'


import '../stylesheets/style.scss'


import { useStaticQuery, graphql } from 'gatsby'


// markup
const IndexPage = () => {

  const orangeMenuRef = useRef(null);

  let data = useStaticQuery(graphql`
  query{

    media: allContentfulAsset {
      nodes {
        title
        fluid {
           aspectRatio
              base64
              src
              srcSet
        }
      }
    }

    aboutUsData: allContentfulAboutUsSection {
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
        introText {
          raw
        }
        nameOfTheSection
        subAnswer
        subQuestion
        subQuote
        subQuoteAnswer
        subIntro {
          raw
        }
      }
    }

    servicesData :allContentfulServicesSection {
      edges {
        node {
          introText {
            raw
          }
          servicesQuote
          serviceTitle1
          serviceTitle2
          serviceTitle3
          serviceTitle4
          serviceTitle5
          serviceTitle6
          serviceTitle7
          serviceTitle8
          serviceTitle9
          serviceTitle10
          service1 {
            raw
          }
          service10 {
            raw
          }
          service2 {
            raw
          }
          service3 {
            raw
          }
          service4 {
            raw
          }
          service5 {
            raw
          }
          service6 {
            raw
          }
          service7 {
            raw
          }
          service8 {
            raw
          }
          service9 {
            raw
          }
          service10 {
            raw
          }
         
        }
      }
    }

    storiesData:allContentfulStory {
      edges {
        node {
          slug
          title
          storyImage {
            fluid{
                aspectRatio
                base64
                src
                srcSet
            }
          }
        }
      }
    }
       
   


  }`
)


useEffect(()=>{




},[]);


 
  return (
    <>
    <Helmet title="Place Experience">
      
    </Helmet>
    
      <Intro logo={imageFinder(data.media,"Logo")} customer={imageFinder(data.media,"First Cover")} 
        experience={imageFinder(data.media,"Second Cover")} growth={imageFinder(data.media,"Third Cover")}
        orangeRef={orangeMenuRef} /> 
       
      <div className="orange-logo" ref={orangeMenuRef}>     

            <Logo image={imageFinder(data.media,"Logo")} logoText={imageFinder(data.media,"LogoFooter")}
                  phoneIcon ={imageFinder(data.media,"phone-icon")} />
      
      </div>

      <About squares={imageFinder(data.media,"Squares")} designIcon={imageFinder(data.media,"icon-design")} 
               analyticsIcon={imageFinder(data.media,"icon-analytics")} allIcon={imageFinder(data.media,"icon-allinone")} 
                pies={imageFinder(data.media,("Pie"))} texts={data.aboutUsData.nodes[0]}/>

      <Services texts={data.servicesData.edges[0].node} cover={imageFinder(data.media,"Services Cover")}
                 designIcon={imageFinder(data.media,"icon-services-design")} manageIcon={imageFinder(data.media,"icon-manage")}
                 transformIcon={imageFinder(data.media,"icon-transform")} cubes={imageFinder(data.media,"cubes")}
                 implementIcon={imageFinder(data.media,"icon-implement")} />

      <Stories rect={imageFinder(data.media,"rectangle")} rshape={imageFinder(data.media,"rShape")} 
               triangle={imageFinder(data.media,"triangle")} square={imageFinder(data.media,"singleSquare")} 
               storiesData={data.storiesData.edges} storiesCover ={imageFinder(data.media,"Stories Cover")} />

    </>
  )
}


export default IndexPage



const imageFinder = (data,name)=>{

  
  let image;
  let media = data.nodes;
  
  for(let i=0;i<media.length;i++){

   if(media[i].title === name){
      image = i;
   }
  }
  return media[image].fluid;
}