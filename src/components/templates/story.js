import React,{useEffect} from "react"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useStaticQuery, graphql } from 'gatsby'
import Footer from '../footer'
import { GatsbyImage } from "gatsby-plugin-image";
import Logo from '../logo'


const Story = (props)=>{

  const data = props.pageContext.content;

  const options = {
    renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br />, 
    text])
   }
  
  let storyData = useStaticQuery(graphql`
    query {

      media: allContentfulAsset(filter: {file: {contentType: {ne: "video/mp4"}}}) {
        nodes {
          title
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
           
    }
    `)

  useEffect(()=>{

  },[])

  

  
  return <>
    
   <div className="story">
     <div className="story-cover">

       <GatsbyImage
         image={imageFinder(storyData.media,"Stories Cover")}
         alt="Story Cover Image"
         style={{maxHeight:'100%'}}
         imgStyle={{objectFit:'cover'}} />
       
     </div>
     <div className="story-logo-header">
      <div className="story-logo-menu">
        <Logo image={imageFinder(storyData.media,"Logo")} logoText={imageFinder(storyData.media,"LogoFooter")} phoneIcon ={imageFinder(storyData.media,"phone-icon")} linkedin={imageFinder(storyData.media,"linkedinWhite")}/>
      </div>
      <h1 className="title"> PLACE EXPERIENCE</h1>
      <h1 className="story-title"> STORIES</h1>
     </div>

     <div className="story-intro">
       <div className="story-intro-left">
          <h1 className="story-title">{data.title}</h1>
          <p className="story-title-explanation">{data.titleExplanation}</p>
       </div>
    
      </div>

      <div className="story-text">

    
          
        <h1 className="story-text-title"> THE CHALLENGE</h1>
        <div className="story-text-desc"> {documentToReactComponents(JSON.parse(data.challenge.raw ),options) } </div>
        <hr className="story-separator" />

        <div className="solution-images">
         {
           props.pageContext.content.solutionMedias ? (
          <div className={`story-image-1 story-image`}>

            <GatsbyImage
              image={props.pageContext.content.solutionMedias.gatsbyImageData}
              alt={`${props.pageContext.content.solutionMedias.title} image`}
              style={{width:'100%',height:'40vw'}}
              imgStyle={{objectFit:'contain',objectPosition:'top'}} />

          </div>
           ):''

          }

         
     </div>
        <h1 className="story-text-title"> OUR SOLUTION</h1>
        <div className="story-text-desc"> {documentToReactComponents(JSON.parse(data.solution.raw ),options) } </div>
        <hr className="story-separator" />
        <div className="outcome-images">
       
            <div className=" story-image">

            <GatsbyImage
              image={props.pageContext.content.outcomeMedias.gatsbyImageData}
              alt={`${props.pageContext.content.outcomeMedias.title} image`}
              style={{width:'100%',height:'40vw'}}
              imgStyle={{objectFit:'contain',objectPosition:'top'}} />

          </div>

     </div>
        <h1 className="story-text-title"> OUTCOMES</h1>
        <div className="story-text-desc">{documentToReactComponents(JSON.parse(data.outcome.raw ),options) } </div>

      </div>
    </div>

    <Footer mapIcon={imageFinder(storyData.media,"mapIcon")} phoneIcon={imageFinder(storyData.media,"phone-icon")} logoText={imageFinder(storyData.media,"LogoFooter")} linkedin={imageFinder(storyData.media,"linkedinWhite")} />

    
  </>;
}

export default Story;

const imageFinder = (data,name)=>{

  let image;
  let media = data.nodes;
  
  for(let i=0;i<media.length;i++){

   if(media[i].title === name){
      image = i;
   }
  }
  return media[image].gatsbyImageData;
}