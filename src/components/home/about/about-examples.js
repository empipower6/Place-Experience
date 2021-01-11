import React, { useEffect,useRef } from 'react'
import Img from "gatsby-image"

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { gsap } from "gsap/dist/gsap";


const AboutExamples = ({illustrations, descriptions, r, square ,rectangle}) =>{
  
  const rShape = useRef();
  const squ = useRef();
  const rect = useRef();


  const options = {
    renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br />, 
    text])
   }


  useEffect(()=>{

    
      gsap.to(squ.current, {
        y: -100,
        scrollTrigger: {
          trigger: squ.current,          
          scrub: true
        }, 
      });
      gsap.to(rShape.current, {
        y: -100,
        scrollTrigger: {
          trigger: rShape.current,          
          scrub: true
        }, 
      });
      gsap.to(rect.current, {
        y: -100,
        scrollTrigger: {
          trigger: rect.current,          
          scrub: true
        }, 
      });
    },[]);

    return(
         <>

         <div className="examples">
            <p className="intro">{descriptions.introText} </p>

            <div className="block block-1">
                <div className="illustration">
                <Img  fluid = {illustrations.image[0].fluid} alt="Design Thinking Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} />

                    
                </div>
                <div className="desc">{documentToReactComponents(JSON.parse(descriptions.designThinking.raw),options)}</div>
            </div>

            <div className="r" ref={rShape}>
                <Img  fluid = {r} alt="R-shape Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} />

                    
                </div>
            <div className="block block-2">
                <div className="illustration">
                <Img  fluid = {illustrations.image[1].fluid} alt="Analytics Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} />

                </div>
                <div className="desc">{documentToReactComponents(JSON.parse(descriptions.analytics.raw),options)}</div>
            </div>

            <div className="square" ref={squ}>
                <Img  fluid = {square} alt=" square Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} />       
            </div>
            
            
            <div className="block block-3">
                <div className="illustration">
                  <Img  fluid = {illustrations.image[2].fluid} alt="All In One Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} />             
                </div>
                <div className="desc">{documentToReactComponents(JSON.parse(descriptions.allInOne.raw),options)}</div>
            </div>

           
            <div className="rectangle" ref={rect}>
                <Img  fluid = {rectangle} alt="rectangle Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} />       
            </div>



         </div>
         </>
    )
}
      
export default AboutExamples
    