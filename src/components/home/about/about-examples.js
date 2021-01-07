import React, { useEffect,useRef } from 'react'
import Img from "gatsby-image"
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { gsap } from "gsap/dist/gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


const AboutExamples = ({illustrations, descriptions, r, square ,rectangle}) =>{
  
  const rShape = useRef();
  const squ = useRef();
  const rect = useRef();


  const options = {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, next) => `<p>${next(node.content).replace(/\n/g, '<br/>')}</p>`,  },
  }


  useEffect(()=>{

      document.querySelector('.examples .block-1 .desc').innerHTML += documentToHtmlString(JSON.parse(descriptions.designThinking.raw),options);
      document.querySelector('.examples .block-2 .desc').innerHTML += documentToHtmlString(JSON.parse(descriptions.analytics.raw),options);
      document.querySelector('.examples .block-3 .desc').innerHTML += documentToHtmlString(JSON.parse(descriptions.allInOne.raw),options);

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
                <div className="desc"></div>
            </div>

            <div className="r" ref={rShape}>
                <Img  fluid = {r} alt="R-shape Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} />

                    
                </div>
            <div className="block block-2">
                <div className="illustration">
                <Img  fluid = {illustrations.image[1].fluid} alt="Analytics Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} />

                </div>
                <div className="desc"></div>
            </div>

            <div className="square" ref={squ}>
                <Img  fluid = {square} alt=" square Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} />       
            </div>
            
            
            <div className="block block-3">
                <div className="illustration">
                  <Img  fluid = {illustrations.image[2].fluid} alt="All In One Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} />             
                </div>
                <div className="desc"></div>
            </div>

           
            <div className="rectangle" ref={rect}>
                <Img  fluid = {rectangle} alt="rectangle Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} />       
            </div>



         </div>
         </>
    )
}
      
export default AboutExamples
    