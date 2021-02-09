import React,{useRef,useEffect,useState} from 'react'

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import Img from 'gatsby-image'

import { Link } from 'gatsby'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp,faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Stories = ({rect,rshape,triangle,square,storiesData,storiesCover}) => {

    const squareRef =useRef(null);
    const rshapeRef =useRef(null);
    const triRef = useRef(null);
    const rectRef =useRef(null);

    const storyBlocks=useRef([]);
    const storiesContainer =useRef(null);

    const [whichSection , setSection ]=useState(0);


    const parallaxStoryCover =useRef(null);

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);


    const chunk = (array, size) =>
    Array.from({length: Math.ceil(array.length / size)}, (value, index) => array.slice(index * size, index * size + size));
    
    const newStories = chunk(storiesData, 3);

    const slideToStories = (direction)=>{
       
      let inc = direction? 1 :-1;
      let timeline = new gsap.timeline({repeat:0,paused:true});
      timeline.to(storyBlocks.current[whichSection],{opacity:0,ease:"power2",duration:0.1})
      .to(storiesContainer.current,{duration:0.01,scrollTo:storyBlocks.current[whichSection+inc], ease: "power2"})
      .fromTo(storyBlocks.current[whichSection+inc],{opacity:0},{opacity:1,ease: "power2",duration:0.1},"-=0.5")
      .to(storyBlocks.current[whichSection],{opacity:1,ease:"power2",duration:0.01});


        if(direction && whichSection+1<4){
            
            timeline.play();
        }
        else if(!direction && whichSection-1>-1){

            timeline.play();

        }
    }




    useEffect(()=>{

        gsap.to(squareRef.current, {
            left:18+'vw',
            top:10+'vw',
            rotation:10,
            transformOrigin:'0% 0%',
            scrollTrigger: {
              trigger: squareRef.current,          
              top:'top bottom',
              bottom:'bottom bottom',
              toggleActions: "play complete reverse play",
              scrub: true,
             
            }, 
          });  
          gsap.to(rshapeRef.current, {
            top:10+'vw',
            rotation:10,
            transformOrigin:'0% 0%',
            scrollTrigger: {
              trigger: rshapeRef.current,          
              top:'top bottom',
              bottom:'bottom bottom',
              toggleActions: "play complete reverse play",
              scrub: true,
             
            }, 
          }); 
          gsap.to(triRef.current, {
            top:25+'vw',
            rotation:10,
            transformOrigin:'0% 0%',
            scrollTrigger: {
              trigger: triRef.current,          
              top:'top bottom',
              bottom:'bottom bottom',
              toggleActions: "play complete reverse play",
              scrub: true,
             
            }, 
          }); 
          gsap.to(rectRef.current, {
            top:45+'vw',
            left:5+'vw',
            rotation:10,
            transformOrigin:'0% 0%',
            scrollTrigger: {
              trigger: rectRef.current,          
              top:'top bottom',
              bottom:'bottom bottom',
              toggleActions: "play complete reverse play",
              scrub: true,
             
            },
          }); 

        
        gsap.to(parallaxStoryCover.current, {
          y:40+'vh',
          scrollTrigger: {
              trigger: '.stories-parallax',          
              top:'top bottom',
              bottom:'bottom bottom',
              toggleActions: "play complete reverse play",
              scrub: true,
             
            }, 
          });  




          const options={
            root:null,
            rootMargin:'0px',
            threshold:0.3
          };

      
      const slideObserver = new IntersectionObserver((entries,observer)=>{

        entries.forEach(entry=>{
          if(entry.isIntersecting){
              
              let section = Number(entry.target.classList[0].split("-")[1]);
              setSection(section);
          }
        })

      },options);

      storyBlocks.current.map((block)=>{

        slideObserver.observe(block);


      })

    






    },[])

    return(
        <>
        <div className="parallax-container stories-parallax">
            <div className="parallax-cover" ref={parallaxStoryCover}>
                <Img fluid={storiesCover} alt="Stories Section Cover" style={{maxHeight:'100%'}} imgStyle={{objectFit:'cover'}} />
            </div>
        </div>

        <div className="stories-section" id="stories-section">
            <div className="stories-section-left">
              <h1 className="stories-section-title"> STORIES </h1>
              <p className="stories-section-quote">WE DO NOT JUST DELIVER; WE CREATE EVERLASTING CAPABILITIES.</p>
              <hr className="stories-section-separator"></hr>
              <div className="stories-section-images">
                    <div className="stories-section-icon square" ref={squareRef} >
                        <Img fluid={square} alt="Square Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }}/>
                    </div>
                    <div className="stories-section-icon rshape" ref={rshapeRef}>
                        <Img fluid={rshape} alt="R Shape Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} />
                    </div>
                    <div className="stories-section-icon triangle" ref={triRef}>
                        <Img fluid={triangle} alt="Triangle Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} />
                    </div>
                    <div className="stories-section-icon rectangle" ref={rectRef}>
                        <Img fluid={rect} alt="Rectangle Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} />
                    </div>
              </div>

            </div>
            <div className="stories-section-right">
                <div className="arrows">
                    <div class="up-arrow" onClick={()=>{slideToStories(false)}}>
                        <FontAwesomeIcon icon={faChevronUp} color="#E6B77F" />

                    </div>
                    <div class="down-arrow" onClick={()=>{slideToStories(true)}}>
                        <FontAwesomeIcon icon={faChevronDown} color="#E6B77F" />
                    </div>
                 </div>
                <div className="stories-section-container" ref={storiesContainer}>
                
               {
                 
                  newStories.map((story,index)=>(
                    <div className={`section-${index} section`} ref={el => storyBlocks.current[index]=el}>
                     {story.map((box,boxIndex)=>(
                     <Link to={`/${box.node.slug}`}> 
                      <div className="stories-section-box" key={(index+1)*(boxIndex+1)}>
                        <h1 className="stories-section-box-title"> {box.node.title} </h1>
                        <div className="stories-section-story-image">
                            <Img fluid={box.node.storyImage.fluid} alt={`${box.node.title} Image`} style={{ height:'45vh'}}  imgStyle={{ objectFit: "cover"}} />
                        </div>
                      </div>
                    </Link>
                  ))}
                    </div>

                  ))
               }
               </div>

            </div>

        </div>
        </>
    )
}

export default Stories;