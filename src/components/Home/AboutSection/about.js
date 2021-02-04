import React,{useEffect,useRef} from 'react'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Img from 'gatsby-image'

import { gsap } from "gsap/dist/gsap";

const About = ({squares, designIcon,analyticsIcon,allIcon, texts}) =>{

    const options = {
        renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br />, 
        text])
       }

    const squaresRef =useRef(null);

    useEffect(() => {
        gsap.to(squaresRef.current,{
            y:-150,
            rotation:5,
            scrollTrigger:{
              trigger:squaresRef.current,
              scrub:true,
            },
        });
        console.log(texts);
       }, [])
   

    return (
        <>
       <h1 className="about-section-title"  id="section-about"> ABOUT US </h1>

       <div className="about-intro-section">
          <div className="qa-section">
            <h1 className="about-section-subQuestion">{texts.subQuestion}</h1>
            <h1 className="about-section-subAnswer">{texts.subAnswer}</h1>

          </div>
            <div className="about-section-subIntro">{documentToReactComponents(JSON.parse(texts.subIntro.raw),options)}</div>
            
       </div>
       <div className="about-section">

        <div className="about-section-left">
                
                <hr className="about-section-separator"></hr>
                <div className="about-section-intro">{documentToReactComponents(JSON.parse(texts.introText.raw),options)}</div>
                <h1 className="about-section-subQuote">{texts.subQuote}</h1>
                <h1 className="about-section-subAnswer">{texts.subQuoteAnswer}</h1>
               

        </div>
        <div className="about-section-right">
            

            <div class="icon-box">

                <div className="about-section-designIcon">
                    <Img fluid={designIcon} alt="Design Icon Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} cl/>
                </div>
                <div className="about-section-design">{documentToReactComponents(JSON.parse(texts.designThinking.raw),options)}</div>
            </div>     

            <div class="icon-box">

                <div className="about-section-analyticsIcon">
                    <Img fluid={analyticsIcon} alt="Analytics Icon Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} cl/>
                </div>
                <div className="about-section-analytics">{documentToReactComponents(JSON.parse(texts.analytics.raw),options)}</div>

            </div>
            <div class="icon-box">

                <div className="about-section-allIcon">
                    <Img fluid={allIcon} alt="All In One Icon Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} cl/>
                </div>
                <div className="about-section-all">{documentToReactComponents(JSON.parse(texts.allInOne.raw),options)}</div>
            </div>
          
        </div>
        <div className="about-section-squares" ref={squaresRef}>
                <Img fluid={squares} alt="Squares Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} cl/>
        </div>
        
    </div>
        </>
    )
}

export default About