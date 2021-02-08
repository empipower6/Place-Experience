import React,{useEffect} from "react"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Logo from '../logo'


const Story = (props)=>{

  const data = props.pageContext.content;
  const options = {
    renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br />, 
    text])
   }
  
   let storyData = useStaticQuery(graphql`
    query {

      cover:allContentfulAsset(filter: {title: {eq: "Stories Cover"}}) {
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
      icon1:allContentfulAsset(filter: {title: {eq: "storiesIcon1"}}) {
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
      icon2:allContentfulAsset(filter: {title: {eq: "storiesIcon2"}}) {
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
      icon3:allContentfulAsset(filter: {title: {eq: "storiesIcon3"}}) {
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
      logo:allContentfulAsset(filter: {title: {eq: "Logo"}}) {
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

       
      }
    `)

  useEffect(()=>{

    console.log(props);
  },[])

  

  
  return(
    <>
      
     <div className="story">
       <div className="story-cover">

         <Img fluid={storyData.cover.nodes[0].fluid} alt="Story Cover Image" style={{maxHeight:'100%'}} imgStyle={{objectFit:'cover'}} />
         
       </div>
       <div className="story-logo-header">
        <div className="story-logo-menu">
          <Logo image={storyData.logo.nodes[0].fluid} />
        </div>
        <h1 className="title"> PLACE EXPERIENCE</h1>
        <h1 className="story-title"> STORIES</h1>
       </div>

       <div className="story-intro">
         <div className="story-intro-left">
            <h1 className="story-title">{data.title}</h1>
            <p className="story-title-explanation">{data.titleExplanation}</p>
         </div>
         <div className="story-intro-right">
            <div className="story-icon">

                <Img fluid={storyData.icon1.nodes[0].fluid} alt="Story Icon Image"  imgStyle={{objectFit:'cover'}} />

            </div>
            <div className="story-icon">

                <Img fluid={storyData.icon2.nodes[0].fluid} alt="Story Icon Image" imgStyle={{objectFit:'cover'}} />

            </div>
            <div className="story-icon">

              <Img fluid={storyData.icon3.nodes[0].fluid} alt="Story Icon Image"  imgStyle={{objectFit:'cover'}} />

            </div>
         </div>
        </div>
       {/* <div className="story-images">
           {
             props.pageContext.content.storymedia ? props.pageContext.content.allOtherImages.map((image,index)=>(
              <div className={`story-image-${index} story-image`}>

              <Img fluid={image.fluid} alt={`${data.title} image ${index}`} style={{maxHeight:'100%'}} imgStyle={{objectFit:'cover'}} />

            </div>


             )):""

           }
       </div> */}

        <div className="story-text">

        <div className="challenge-images">
           {
             props.pageContext.content.challengeMedias ? props.pageContext.content.challengeMedias.map((image,index)=>(
              <div className={`story-image-challenge-${index} story-image-challenge`}>

              <Img fluid={image.fluid} alt={`${data.title} image ${index}`} style={{maxHeight:'100%'}} imgStyle={{objectFit:'cover'}} />

            </div>


             )):""

           }
       </div>
            
          <h1 className="story-text-title"> THE CHALLENGE</h1>
          <div className="story-text-desc"> {documentToReactComponents(JSON.parse(data.challenge.raw ),options) } </div>
          <hr className="story-separator" />

          <div className="solution-images">
           {
             props.pageContext.content.solutionMedias ? props.pageContext.content.solutionMedias.map((image,index)=>(
              <div className={`story-image-solution-${index} story-image-solution`}>

              <Img fluid={image.fluid} alt={`${data.title} image ${index}`} style={{maxHeight:'100%'}} imgStyle={{objectFit:'cover'}} />

            </div>


             )):""

           }
       </div>
          <h1 className="story-text-title"> OUR SOLUTION</h1>
          <div className="story-text-desc"> {documentToReactComponents(JSON.parse(data.solution.raw ),options) } </div>
          <hr className="story-separator" />
          <div className="outcome-images">
           {
             props.pageContext.content.outcomeMedias  ? props.pageContext.content.outcomeMedias.map((image,index)=>(
              <div className={`story-image-outcome-${index} story-image-outcome`}>

              <Img fluid={image.fluid} alt={`${data.title} image ${index}`} style={{maxHeight:'100%'}} imgStyle={{objectFit:'cover'}} />

            </div>


             )):""

           }
       </div>
          <h1 className="story-text-title"> OUTCOMES</h1>
          <div className="story-text-desc">{documentToReactComponents(JSON.parse(data.outcome.raw ),options) } </div>

        </div>
      </div>
    </>
  )
}

export default Story;
