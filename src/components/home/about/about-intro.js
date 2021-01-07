import React,{ useEffect, useRef } from 'react'
import Img from "gatsby-image"
import { gsap } from "gsap/dist/gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


const AboutIntro = ({sectionName, introText, map, mapText,outline,square,triangle,rectangle}) =>{
      
     const tri = useRef();
     const squ = useRef();
     const rect = useRef();

      
      useEffect(()=>{

         document.querySelector('.about .introText').innerHTML += introText;
         document.querySelector('.about .mapSection .mapText').innerHTML += mapText;

         gsap.to(squ.current, {
          y: -100,
          scrollTrigger: {
            trigger: squ.current,          
            scrub: true
          }, 
        });
        gsap.to( tri.current, {
          y: -100,
          scrollTrigger: {
            trigger: tri.current,          
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



      },[])
      return(
       
        <>

        <div className="about">
        

         <div className="titleOutline1">
                  <Img  fluid = {outline} alt="Outline Illustration for About Us Title" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} />
          </div>
          <h1> {sectionName}</h1>
          <div className="square" ref={squ}>
                  <Img  fluid = {square} alt="Map Image" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} />
          </div>

          <div className="mapSection">
              <p className="mapText"></p>
            
              <div className="map">
                  <Img  fluid = {map} alt="Map Image" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} />
              </div>
          </div>
          <div className="triangle" ref={tri}>
                  <Img  fluid = {triangle} alt="Map Image" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} />
              </div>
          

              <div className="rectangle" ref={rect}>
                  <Img  fluid = {rectangle} alt="Map Image" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} />
              </div>
              
              <div className="aboutIntro">

                <p className="introText"></p>

              </div>

              
          
             
        </div>
       
        </>


      )

}

export default AboutIntro