import React from "react"
import Layout from '../layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const Story = (props)=>{

  const data = props.pageContext.content;
  const options = {
    renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br />, 
    text])
   }

  

  
  return(
    <>
    <Layout>
      
     <div className="story">

        <h1 className="story-title">{data.title}</h1>
        <p className="story-title-explanation">{data.titleExplanation}</p>

           
        <h1 > The Challenge</h1>
        <div className="challenge"> {documentToReactComponents(JSON.parse(data.challenge.raw ),options) } </div>
        <h1 > Our Solution</h1>
        <div className="solution"> {documentToReactComponents(JSON.parse(data.solution.raw ),options) } </div>
        <h1> Outcomes</h1>
        <div className="outcomes">{documentToReactComponents(JSON.parse(data.outcome.raw ),options) } </div>

      </div>
    </Layout>
    </>
  )
}

export default Story;
