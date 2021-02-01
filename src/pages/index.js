import React, { useEffect } from "react"
import { Helmet } from "react-helmet"

import Intro from '../components/Home/Intro/intro'

import About from '../components/Home/About/about'

import Services from '../components/Home/Services/services'

import Logo from '../components/Essentials/logo'

import '../stylesheets/style.scss'


import { useStaticQuery, graphql } from 'gatsby'


// markup
const IndexPage = () => {
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
        experience={imageFinder(data.media,"Second Cover")} growth={imageFinder(data.media,"Third Cover")}/> 
       
       <div className="orange-logo">
         <Logo image={imageFinder(data.media,"Logo")} />
       </div>

       <About squares={imageFinder(data.media,"Squares")} designIcon={imageFinder(data.media,"icon-design")} 
               analyticsIcon={imageFinder(data.media,"icon-analytics")} allIcon={imageFinder(data.media,"icon-allinone")} 
                texts={data.aboutUsData.nodes[0]}/>

       {/* <Services texts={data.servicesData.edges[0].node} cover={imageFinder(data.media,"cover-services")}
                 designIcon={imageFinder(data.media,"icon-services-design")} manageIcon={imageFinder(data.media,"icon-manage")}
                 transformIcon={imageFinder(data.media,"icon-transform")} cubes={imageFinder(data.media,"cubes")}
                 implementIcon={imageFinder(data.media,"icon-implement")} /> */}

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