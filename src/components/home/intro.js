import React,{ useEffect } from "react"
import Img from "gatsby-image"




const Intro = ({triangle,square,r,rectangle}) => {
  
  useEffect(() => {

  
    
    
  }, [])


  return (
    <div className="intro-section">

    <div className="intro-text">

      <h1 className='intro-1'> <span className="underline">Know</span> your customer. </h1>
      <h1 className='intro-2'> <span className="underline">Deliver</span> the desired experience. </h1>
      <h1 className='intro-3'> <span className="underline">Generate </span> Economic Growth.  </h1>
    </div>
    <div className="intro-images">
        
         <div className="intro-image-1 rotate "><Img fluid={triangle} alt="A triangle graphic" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }}/></div>
         <div className="intro-image-2 rotate"><Img fluid={square} alt="A square graphic" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }}/></div>
         <div className="intro-image-3 rotate"><Img fluid={r} alt="An r shaped graphic" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }}/></div>
         <div className="intro-image-4 rotate"><Img fluid={rectangle} alt="A rectangle graphic" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }}/></div>

      
    </div>
    </div> 
  )
}

export default Intro
