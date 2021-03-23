import React,{useRef,useEffect } from 'react'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { GatsbyImage } from "gatsby-plugin-image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const About = ({aboutCover,squares, designIcon,analyticsIcon,allIcon, texts,pies}) =>{

    const parallaxAboutCover = useRef(null);

    const squaresRef = useRef(null);
    const firstPie = useRef(null);
    const secondPie = useRef(null);
    const thirdPie = useRef(null);
    const fourthPie = useRef(null);
    

    gsap.registerPlugin(ScrollTrigger);

    const options = {
        renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br />, 
        text])
       }
    
    //GSAP ANIMATIONS
    
    useEffect(()=>{

        gsap.to(squaresRef.current,{top:5+'vw',rotation:10,scrollTrigger:{trigger:squares.current,scrub:true}});
        gsap.to(firstPie.current,{top:2+'vw',left:2+'vw',rotation:20,transformOrigin:'50% 50%',scrollTrigger:{trigger:firstPie.current,scrub:true}});
        gsap.to(secondPie.current,{top:12+'vw',left:18+'vw',transformOrigin:'50% 50%',scrollTrigger:{trigger:secondPie.current,scrub:true}});
        gsap.to(thirdPie.current,{top:30+'vw',left:1+'vw',rotation:10,transformOrigin:'50% 50%',scrollTrigger:{trigger:thirdPie.current,scrub:true}});
        gsap.to(fourthPie.current,{top:47+'vw',left:20+'vw',rotation:10,transformOrigin:'50% 50%',scrollTrigger:{trigger:fourthPie.current,scrub:true}});

        gsap.to(parallaxAboutCover.current, {
            y:40+'vh',
            scrollTrigger: {
              trigger: '.about-parallax',          
              top:'top bottom',
              bottom:'bottom bottom',
              toggleActions: "play complete reverse play",
              scrub: true,
             
            }, 
          });

    },[])
     
   

    return <>

    <div className="parallax-container about-parallax">
        <div className="parallax-cover" ref={parallaxAboutCover}>
            <GatsbyImage
              image={aboutCover}
              alt="About Us Section Cover"
              style={{maxHeight:'100%'}}
              imgStyle={{objectFit:'cover'}} />
        </div>
    </div>
   <div className="about-section" id="section-about">

    <div className="about-section-left">

            <h1 className="about-section-title"> ABOUT US </h1>
            <h1 className="about-section-subQuestion">{texts.subQuestion}</h1>
            <h1 className="about-section-subAnswer">{texts.subAnswer}</h1>
            <div className="about-section-subIntro">{documentToReactComponents(JSON.parse(texts.subIntro.raw),options)}</div>
            <div className="about-section-pies-group">
                <div className="about-section-pies pie1" ref={firstPie} >
                    <GatsbyImage
                        image={pies}
                        alt="Pie Illustration"
                        style={{ maxHeight: "100%" }}
                        imgStyle={{ objectFit: "contain" }} />
                </div>
                <div className="about-section-pies pie2" ref={secondPie}>
                    <GatsbyImage
                        image={pies}
                        alt="Pie Illustration"
                        style={{ maxHeight: "100%" }}
                        imgStyle={{ objectFit: "contain" }} />
                </div>
                <div className="about-section-pies pie3" ref={thirdPie}>
                    <GatsbyImage
                        image={pies}
                        alt="Pie Illustration"
                        style={{ maxHeight: "100%" }}
                        imgStyle={{ objectFit: "contain" }} />
                </div>
                <div className="about-section-pies pie4" ref={fourthPie}>
                    <GatsbyImage
                        image={pies}
                        alt="Pie Illustration"
                        style={{ maxHeight: "100%" }}
                        imgStyle={{ objectFit: "contain" }} />
                </div>
            </div>


    </div>
    <div className="about-section-right">

       <div className="about-section-intro">{documentToReactComponents(JSON.parse(texts.introText.raw),options)}</div>
       <hr className="about-section-separator"></hr>
       <h1 className="about-section-subQuote">{texts.subQuote}</h1>
       <div className="about-section-subQuoteAnswer">{texts.subQuoteAnswer}</div>


        <div className="about-section-squares" ref={squaresRef}>
            <GatsbyImage
                image={squares}
                alt="Squares Illustration"
                style={{ maxHeight: "100%" }}
                imgStyle={{ objectFit: "contain" }} />
        </div>

        <div className="about-section-designIcon">
            <GatsbyImage
                image={designIcon}
                alt="Design Icon Illustration"
                style={{ maxHeight: "100%" }}
                imgStyle={{ objectFit: "contain" }} />
        </div>
        <div className="about-section-design">{documentToReactComponents(JSON.parse(texts.designThinking.raw),options)}</div>
            


        <div className="about-section-analyticsIcon">
            <GatsbyImage
                image={analyticsIcon}
                alt="Analytics Icon Illustration"
                style={{ maxHeight: "100%" }}
                imgStyle={{ objectFit: "contain" }} />
        </div>
        <div className="about-section-analytics">{documentToReactComponents(JSON.parse(texts.analytics.raw),options)}</div>



        <div className="about-section-allIcon">
            <GatsbyImage
                image={allIcon}
                alt="All In One Icon Illustration"
                style={{ maxHeight: "100%" }}
                imgStyle={{ objectFit: "contain" }} />
        </div>
        <div className="about-section-all">{documentToReactComponents(JSON.parse(texts.allInOne.raw),options)}</div>
                    
    </div>
    
    </div>
    </>;
}

export default About