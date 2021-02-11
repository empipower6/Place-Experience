import React,{ useEffect,useRef,useState } from 'react'
import Logo from './logo'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons'


const Intro = ({logo,customer,experience,growth,orangeRef,left,right,logoText,linkedin,phoneIcon})=>{
      
    const introRef = useRef();

    const introSlides=[];



    const firstRef =useRef();
    const secondRef =useRef();
    const thirdRef =useRef();

    introSlides.push(firstRef,secondRef,thirdRef);



    const [cover , setCover]= useState(0);
    const [time,setTimeState]=useState(0);
    const [menuOpen , setMenu]= useState(false);
    const [clicker,setClicker]=useState(false);

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    useEffect(()=>{
      menuOpen ? orangeRef.current.style.display="none": orangeRef.current.style.display="block";
    },[menuOpen])


    const introSwipe=(direction) =>{

      if(!clicker){
      let current= introSlides[cover];
        if(direction){
          let next = cover==2 ? introSlides[0] : introSlides[cover+1]

          timeline(current,next);
        }
        else if(!direction){

          let back = cover==0 ? introSlides[2] : introSlides[cover-1];
          timeline(current,back);


        }
      }
      else{
        setTimeout(()=>{
          return setClicker(false),3000});
      }


    }

    const timeline = (cur,to)=>{

      let tl= gsap.timeline({repeat:0});
      tl.to(cur.current,{display:'none',autoAlpha:0,duration:0.5})
      .to(to.current,{display:'block',autoAlpha:1,duration:0.5},"-=0.5");

      

    }
    const useInterval= (callback, delay)=> {
      
      const savedCallback = useRef();
      if(time){
        delay=0;
        setTimeState(false);
      }
      console.log("entered with delay"+delay);
      // Remember the latest callback.
      useEffect(() => {
        savedCallback.current = callback;
      }, [callback]);
    
      // Set up the interval.
      useEffect(() => {
        function tick() {
          savedCallback.current();
        }
        if (delay !== null) {
          let id = setInterval(tick, delay);
          return () => clearInterval(id);
        }
      }, [delay]);
    }


      useInterval(()=>{introSwipe(true)},3000);


  
  


    useEffect(()=>{

      

      const options={
        root:null,
        rootMargin:'0px',
        threshold:0.5
      };

      //Intersection Observer basically kills the main scroll while we're snapping. Once it reaches the third cover,
      //It enables the main scrolling again
      const observer = new IntersectionObserver((entries,observer)=>{

        entries.forEach(entry=>{

          if(entry.isIntersecting){

            console.log(entry.target);

             if(entry.target.classList[1]=== "first-child"){

              setCover(0);

             }

             else if(entry.target.classList[1]=== "second-child"){

              setCover(1);


             }
             else if(entry.target.classList[1]=== "third-child"){

              setCover(2);

             
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
        <div class="left-arrow" onClick={()=>{introSwipe(false);setTimeState(true);setClicker(true);}}>
          <Img fluid={left} alt="Left Arrow Image" style={{maxHeight:'100%'}} imgStyle={{objectFit:"cover"}} />
      
        </div>
          <div className="child first-child"  ref={firstRef}>
            <BackgroundImage fluid={customer} className="cover">    
              <p className="child-desc"> KNOW YOUR <br />CUSTOMER.</p>  
            </BackgroundImage>
          </div>
          <div className="child second-child"  ref={secondRef}>
            <BackgroundImage fluid={experience} className="cover" >      
            <p className="child-desc"> DELIVER <br />THE DESIRED <br/> EXPERIENCE.</p>  
            </BackgroundImage>
          </div>
          
          <div className="child third-child"  ref={thirdRef}>
            <BackgroundImage  fluid={growth} className="cover">      
            <p className="child-desc"> GENERATE <br />ECONOMIC <br/> GROWTH.</p>  
            </BackgroundImage>
          </div>

        <div class="right-arrow" onClick={()=>{introSwipe(true);setTimeState(true);setClicker(true);}}>
       
       <Img fluid={right} alt="Right Arrow Image" style={{maxHeight:'100%'}} imgStyle={{objectFit:"cover"}} />


          </div>

          <div className="container-swipe-lines">
            <div className={cover=== 0?"swipe active-swipe":"swipe"}></div>
            <div className={cover=== 1?"swipe active-swipe":"swipe"}></div>
            <div className={cover=== 2?"swipe active-swipe":"swipe"}></div>
          </div> 
      </div>  

      <div className="container">
        
        <div className="fixed-header">
         <div className="fixed-header-logo">
            <Logo image={logo}  menuChecker={setMenu} logoText={logoText} linkedin={linkedin} phoneIcon={phoneIcon} />
         </div>
         
         <h1 className="fixed-header-title"> PLACE EXPERIENCE </h1>
         </div>      
 
       </div> 
      
      

      
       
      
        </>

    )




}

export default Intro;


