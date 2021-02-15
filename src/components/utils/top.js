import React from 'react' 
import { gsap } from "gsap/dist/gsap";
import Img from 'gatsby-image'

const Top = ({arrow})=>{

    const scrollTop = ()=>{

        gsap.to(window,{scrollTo:{y:0},duration:1});

      }
      


    return(
        <>
        <div onClick={()=>{scrollTop()}}>
          <Img fluid={arrow} alt="Go To The Top Icon" style={{ maxHeight: "100%",cursor:'pointer' }}  imgStyle={{ objectFit: "contain" }}  />
        </div>
        </>
    )
}

export default Top;