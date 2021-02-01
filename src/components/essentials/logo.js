import React,{ useRef,useEffect } from 'react'
import Img from 'gatsby-image'
import { gsap } from "gsap/dist/gsap";
import { AnchorLink } from "gatsby-plugin-anchor-links";


const Logo =({image})=>{

    const mobileMenu= useRef();
    const menuUl= useRef();

    
    const openMenu=()=>{

        gsap.fromTo(mobileMenu.current,{display:'none',opacity:0,x:-200},{display:'block',opacity:1,x:0,duration:1});

    }
    const closeMenu=()=>{

        gsap.fromTo(mobileMenu.current,{display:'block',opacity:1,x:0},{display:'none',opacity:0,x:-200,duration:1});
        document.body.classList.remove('stop-scroll');

    }

    useEffect(() => {
     
    }, [])


    return(
        <>
        <div onClick={()=>{openMenu()}} style={{cursor:"pointer"}}>
          <Img fluid={image} alt="Main Logo" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} />
        </div>
        <div className="logo-menu" ref={mobileMenu}>
            <ul ref={menuUl}>
                <li  className="cancel-mobile"onClick={()=>{closeMenu()}} > X </li>
                <li className="mobile-title"> PLACE EXPERIENCE</li>
                <AnchorLink to="/#section-about" className="anchors"><li key={2} className="logo-menu-item"  onClick={()=>{closeMenu()}}> ABOUT US. </li></AnchorLink>
                <AnchorLink to="/#services" className="anchors"><li className="logo-menu-item" onClick={()=>{closeMenu()}}> SERVICES. </li></AnchorLink>
                <li className="logo-menu-item" onClick={()=>{closeMenu()}}> STORIES. </li>
                <li className="logo-menu-item" onClick={()=>{closeMenu()}}> TEAM. </li>
                <li className="logo-menu-item" onClick={()=>{closeMenu()}}> INSIGHTS. </li>



            </ul>
          </div>
        </>
    )



}

export default Logo