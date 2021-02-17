import React,{useEffect,useRef} from 'react' 
import { gsap } from "gsap/dist/gsap";
import Img from 'gatsby-image'

const Top = ({arrow})=>{

  const top = useRef (null);

    const scrollTop = ()=>{

        gsap.to(window,{scrollTo:{y:0},duration:1});

      }
    const scrollChecker =(pos)=>{

      if(window.pageYOffset < pos){
        gsap.to(top.current,{autoAlpha:0,duration:1});
      }
      else if(window.pageYOffset > pos){

        gsap.to(top.current,{autoAlpha:1,duration:1});

      }
    }

    useEffect(() => {

      let subQuote = document.querySelector('.about-section .about-section-subQuestion');

     
      window.addEventListener('scroll',()=>{scrollChecker(subQuote.offsetTop)});
    

              
    }, [])
      


    return(
        <>
        <div onClick={()=>{scrollTop()}} ref={top}>
          <Img fluid={arrow} alt="Go To The Top Icon" style={{ maxHeight: "100%",cursor:'pointer' }}  imgStyle={{ objectFit: "contain" }}  />
        </div>
        </>
    )
}

export default Top;