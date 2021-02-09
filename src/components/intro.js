import React,{ useEffect,useRef,useState } from 'react'
import Logo from './logo'
import BackgroundImage from 'gatsby-background-image'

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons'


const Intro = ({logo,customer,experience,growth,orangeRef})=>{
      
    const introRef = useRef();

    const introSlides=[];


    const firstRef =useRef();
    const secondRef =useRef();
    const thirdRef =useRef();

    introSlides.push(firstRef,secondRef,thirdRef);



    const [cover , setState]= useState(0);
    const [menuOpen , setMenu]= useState(false);

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    useEffect(()=>{
      menuOpen ? orangeRef.current.style.display="none": orangeRef.current.style.display="block";
    },[menuOpen])


    const introSwipe=(direction) =>{

      let current= introSlides[cover];

        if(direction){
          let next = cover==2 ? introSlides[0] : introSlides[cover+1]
          timeline(current,next,0);
        }
        else if(!direction){

          let back = cover==0 ? introSlides[2] : introSlides[cover-1];
          timeline(current,back,0);


        }

    }

    const timeline = (cur,to,repeatNum)=>{

      let tl= gsap.timeline({repeat:repeatNum});
      tl.to(cur.current,{autoAlpha:0,ease:"power2",duration:0.2})
      .to(introRef.current,{scrollTo:to.current,ease:"power2",duration:0.01})
      .fromTo(to.current,{autoAlpha:0},{autoAlpha:1,ease:"power2",duration:0.2},"-=0.21")
      .to(cur.current,{autoAlpha:1,ease:"power2",duration:0.01});


    }
    
  

    useEffect(()=>{

      //Snap Scroll is to make sure the snapping starts when the window.y is equal to 0.
      //Otherwise, what happens is when you're scrolling back into the snap container, the
      //snap can start even when it's in half height as long as the mouse is in the container.
      // snapScrollControl();

      

      const options={
        root:null,
        rootMargin:'0px',
        threshold:0.9
      };

      //Intersection Observer basically kills the main scroll while we're snapping. Once it reaches the third cover,
      //It enables the main scrolling again
      const observer = new IntersectionObserver((entries,observer)=>{

        entries.forEach(entry=>{
          if(entry.isIntersecting){
             
             if(entry.target.classList[1]=== "first-child"){

              setState(0);

             }

             else if(entry.target.classList[1]=== "second-child"){

              setState(1);


             }
             else if(entry.target.classList[1]=== "third-child"){

              setState(2);

             
             }
          }
        })

      },options);

      const children = document.querySelectorAll('.intro-flex .child');
      

      children.forEach(child=>{
        observer.observe(child);
      })
      

              
    },[]);
  
    return(

        <>
       
       

      <div class="intro-flex"  ref={introRef}> 
        <div class="left-arrow" onClick={()=>{introSwipe(false)}}>
          <FontAwesomeIcon icon={faChevronLeft} color="white" />
      
        </div>
        <section className="child first-child" ref={firstRef}>
          <BackgroundImage className="cover" fluid={customer}>    
           <p className="child-desc"> KNOW YOUR <br />CUSTOMER.</p>  
          </BackgroundImage>
        </section>

        <section className="child second-child" ref={secondRef}>
          <BackgroundImage className="cover" fluid={experience}>      
           <p className="child-desc"> DELIVER <br />THE DESIRED <br/> EXPERIENCE.</p>  
          </BackgroundImage>
        </section>


        <section className="child third-child" ref={thirdRef}>
          <BackgroundImage className="cover" fluid={growth}>      
           <p className="child-desc"> GENERATE <br />ECONOMIC <br/> GROWTH.</p>  
          </BackgroundImage>
        </section>
        <div class="right-arrow" onClick={()=>{introSwipe(true)}}>
       
       <FontAwesomeIcon icon={faChevronRight} color="white" />


          </div>
      </div>  

      <div className="container">
        
        <div className="fixed-header">
         <div className="fixed-header-logo">
            <Logo image={logo}  menuChecker={setMenu} />
         </div>
         
         <h1 className="fixed-header-title"> PLACE EXPERIENCE </h1>
         </div>      
 
       </div> 
      
       <div className="container-swipe-lines">

          <div className={cover=== 0?"swipe active-swipe":"swipe"}></div>
          <div className={cover=== 1?"swipe active-swipe":"swipe"}></div>
          <div className={cover=== 2?"swipe active-swipe":"swipe"}></div>

        </div> 

      
       
      
        </>

    )




}

export default Intro;


