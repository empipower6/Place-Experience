import React,{useRef,useEffect} from 'react'
import Img from 'gatsby-image'
import { gsap, Power4} from "gsap/dist/gsap";
import { AnchorLink } from "gatsby-plugin-anchor-links";



const Logo =(props)=>{

  
        const mobileMenu=useRef(null);
        const imageRef= useRef(null);
        const timeline=useRef(null);
        const menuItems =useRef([]);
        const secondMenuItems =useRef([]);

        menuItems.current=[];
        secondMenuItems.current=[];
      

    const addToRefs = (el) => {
        if (el && !menuItems.current.includes(el)) {
            menuItems.current.push(el);
        }
        };

    const addToSecondRefs = (el) => {
        if (el && !secondMenuItems.current.includes(el)) {
            secondMenuItems.current.push(el);
        }
        };

     const openMenu = ()=>{

       
        // let children = mobileMenu.current.children[0].childNodes[0].childNodes;
        console.log(secondMenuItems.current);
        timeline.current = gsap.timeline({repeat: 0});
    
        timeline.current.fromTo(mobileMenu.current,{display:'none'},{display:'block',duration:0.1})
        .to(mobileMenu.current,{width:'100%',height:'100%',duration:0.5})
        // .to(mobileMenu.current,{height:'100%',duration:0.5})
        .fromTo(menuItems.current,{autoAlpha:0,y:100},{autoAlpha:1,ease:"power3.out",y:0,duration:0.4,stagger: 0.1})
        .fromTo(secondMenuItems.current,{autoAlpha:0,y:100},{autoAlpha:1,y:0,ease:"power3.out",duration:0.3,stagger: 0.2},"-=1")


        // children.forEach((element,key) => {
        //     .to(element,{opacity:1,ease: Power4.easeOut,duration:0.5},"-=0.5");
        // });  
        

       
        // gsap.fromTo(mobileMenu.current,{display:'none',y:100+'vh'},{display:'block',y:0,duration:1,ease:"power3.out"});


        //For the Intro Section's logo not overlapping with the normal logo menu
        if(props.menuChecker){
            props.menuChecker(true);
        }
      

    }

   const closeMenu=()=>{

    // if(!timeline.current){

    //     let children = mobileMenu.current.children[0].childNodes;

    //     timeline.current = gsap.timeline({repeat: 0});
    
    //     timeline.current.fromTo(mobileMenu.current,{display:'none',opacity:0},{display:'block',opacity:1,duration:0.5},"first");
    //     children.forEach((element,key) => {
    //         timeline.current.to(element,{opacity:1,ease: Power4.easeOut,duration:1},"-=0.8");
    //     });  
    // }
    timeline.current.reverse();

    // gsap.fromTo(this.mobileMenu.current,{display:'block',y:0},{display:'block',y:100+'vh',duration:1,ease:"power3.out"});
    
    //For the Intro Section's logo not overlapping with the normal logo menu
    if(props.menuChecker){
        props.menuChecker(false);

    }


   }

   useEffect(() => {
    console.log(props);       
   }, [])
   


        return(
            <>
            <div onClick={()=>{openMenu()}} style={{cursor:"pointer"}}>
                    <Img ref={imageRef} fluid={props.image} alt="Main Logo" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} />
            </div>
            <div className="logo-menu" ref={mobileMenu}>
                <div className="left">
                    <ul>
                        <li  className="cancel-mobile" onClick={()=>{closeMenu()}} ref={addToRefs}> X </li>
                        <li className="mobile-title" ref={addToRefs}> CANCEL </li>
                        <div className="animated-item" ref={addToRefs}> <AnchorLink to="/#section-about" className="anchors"  ><li key={2} className="logo-menu-item"  onClick={()=>{closeMenu()}} > ABOUT US </li></AnchorLink></div>
                        <div className="animated-item" ref={addToRefs}> <AnchorLink to="/#services" className="anchors"  ref={addToRefs}><li className="logo-menu-item" onClick={()=>{closeMenu()}} > SERVICES </li></AnchorLink></div>
                        <div className="animated-item" ref={addToRefs}> <AnchorLink to="/#stories-section" className="anchors" ref={addToRefs}><li className="logo-menu-item" onClick={()=>{closeMenu()}}> STORIES </li></AnchorLink></div>
                        <div className="animated-item" ref={addToRefs}> <AnchorLink to="/#team-section" className="anchors"  ref={addToRefs}><li className="logo-menu-item" onClick={()=>{closeMenu()}} > TEAM </li></AnchorLink></div>
                        <div className="animated-item" ref={addToRefs}> <AnchorLink to="/#section-about" className="anchors"  ><li className="logo-menu-item" onClick={()=>{closeMenu()}}> INSIGHTS </li></AnchorLink></div>
                        <div className="animated-item" ref={addToRefs}> <AnchorLink to="/#section-about" className="anchors"  ><li className="logo-menu-item" onClick={()=>{closeMenu()}} > MEET US </li></AnchorLink></div>
                        
                    </ul>
                </div>
                <div className="right">
                    
                    <div className="menu-socials">
                        <a href="https://calendly.com/ismail-ozenc/30min" target="_blank">
                        <div className="call-icon" ref={addToSecondRefs}>
                            <Img fluid={props.phoneIcon} alt="Phone Icon with Text" imgStyle={{objectFit:'cover'}} />
                        </div>
                        </a>
                        <div class="menu-socials-inner">
                        <a href="https://calendly.com/ismail-ozenc/30min" target="_blank" style={{textDecoration:'none'}}>
                            <h1 ref={addToSecondRefs}>SCHEDULE <br/>A CALL</h1>
                            <hr ref={addToSecondRefs} />
                         </a>
                        </div>
                        <a href="https://www.linkedin.com/in/ismailozenc/" target="_blank">
                            <div className="linkedin" ref={addToSecondRefs}>
                            <Img fluid={props.linkedin} alt="LinkedIn Icon" style={{maxHeight:'100%'}} />
                            </div>
                        </a>
                       
                    </div>
                    <div className="logo-text" ref={addToSecondRefs}>
                        <Img fluid={props.logoText} alt="Logo with Text" imgStyle={{objectFit:'cover'}} />
                    </div>

                   

                </div>
            </div>
            </>
        );
    }

   



export default Logo;