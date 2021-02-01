import React from 'react'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Img from 'gatsby-image'


const About = ({squares, designIcon,analyticsIcon,allIcon, texts}) =>{

    const options = {
        renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br />, 
        text])
       }
   

    return (
        <>
       <div className="about-section" id="section-about">

        <div className="about-section-left">

                <h1 className="about-section-title"> ABOUT US. </h1>
                <div className="about-section-intro">{documentToReactComponents(JSON.parse(texts.introText.raw),options)}</div>
                <hr className="about-section-separator"></hr>
                <h1 className="about-section-subQuestion">{texts.subQuestion}</h1>
                <h1 className="about-section-subAnswer">{texts.subAnswer}</h1>
                <div className="about-section-subIntro">{documentToReactComponents(JSON.parse(texts.subIntro.raw),options)}</div>
                <h1 className="about-section-subQuote">{texts.subQuote}</h1>

        </div>
        <div className="about-section-right">

            <div className="about-section-squares">
                <Img fluid={squares} alt="Squares Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} cl/>
            </div>

            <div className="about-section-designIcon">
                <Img fluid={designIcon} alt="Design Icon Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} cl/>
            </div>
            <div className="about-section-design">{documentToReactComponents(JSON.parse(texts.designThinking.raw),options)}</div>
                


            <div className="about-section-analyticsIcon">
                <Img fluid={analyticsIcon} alt="Analytics Icon Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} cl/>
            </div>
            <div className="about-section-analytics">{documentToReactComponents(JSON.parse(texts.analytics.raw),options)}</div>



            <div className="about-section-allIcon">
                <Img fluid={allIcon} alt="All In One Icon Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} cl/>
            </div>
            <div className="about-section-all">{documentToReactComponents(JSON.parse(texts.allInOne.raw),options)}</div>
                        
        </div>
        
        </div>
        </>
    )
}

export default About