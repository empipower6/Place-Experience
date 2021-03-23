import React, {useEffect,useRef,useState} from 'react' 
import { GatsbyImage } from "gatsby-plugin-image";

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


const Services =({boxes,texts,cover,designIcon,implementIcon,manageIcon,transformIcon,cubes,arrow})=>{

    const parallaxServiceCover = useRef(null);
    const parallaxCubes = useRef(null);
    const sliderContainer = useRef(null);


    const servicesContainerRef =useRef(null);
    const slides = useRef([]);


    const chunk = (array, size) =>
    Array.from({length: Math.ceil(array.length / size)}, (value, index) => array.slice(index * size, index * size + size));


    const servicesBlocks = chunk(boxes,3);
        

    const [slider , setSlider] =useState(-1);
    

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);



    const options = {
        renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br />, 
        text])
       }
  
    const slide = (direction,goTo)=>{

      
      let number = direction ? 1 : -1;
      const slideDestination = typeof(goTo)=='number' ? slides.current[goTo] : slides.current[slider+number];
      let timeline = new gsap.timeline({repeat:0,paused:true});
      console.log(slideDestination);
      timeline.to(slides.current[slider],{autoAlpha:0,display:'none',zIndex:-1,duration:0.5})
      .to(slideDestination,{autoAlpha:1,display:'flex',zIndex:0,duration:0.5},'-=0.5');
    
      if(direction && slider < slides.current.length-1){
        
        timeline.play();
      }
      else if(!direction && slider > 0){
        timeline.play();
      }
      else if(goTo){
        timeline.play();
      }

    }

    const slideBack =() =>{

      let timeline = new gsap.timeline({repeat:0});

      slides.current.map(slide=>{
        timeline.to(slide,{autoAlpha:0,display:'none',zIndex:-1,duration:0.1});
      })

      setSlider(-1);
  

    }

    useEffect(()=>{

      if( slider == -1){
        gsap.to(slides.current[0],{autoAlpha:1,display:'flex',zIndex:0,duration:0.5});

      }

    },[slider])

    useEffect(()=>{
               
        gsap.to(parallaxServiceCover.current, {
            y:40+'vh',
            scrollTrigger: {
              trigger: '.services-parallax',          
              top:'top bottom',
              bottom:'bottom bottom',
              toggleActions: "play complete reverse play",
              scrub: true,
             
            }, 
          });

        gsap.to(parallaxCubes.current,{
            y:-100,
            rotation:10,
            scrollTrigger:{
              trigger:parallaxCubes.current,
              scrub:true
            },
        });




          const options={
            root:null,
            rootMargin:'0px',
            threshold:0.3
          };

      // Intersection Observer basically kills the main scroll while we're snapping. Once it reaches the third cover,
      // It enables the main scrolling again
      const slideObserver = new IntersectionObserver((entries,observer)=>{

        entries.forEach(entry=>{


          if(entry.isIntersecting){

             
            if(entry.target.classList[0]=== "slide"){

              setSlider(Number(entry.target.classList[1].split('-')[1]));

             }

             
        
          }
          else{

            if(entry.target.classList[0] ==='services-section-services-container' )

             slideBack();
          
          }
         
        
        })

      },options);

      slides.current.map((slide)=>{
        slideObserver.observe(slide);
      })

      
      
      slideObserver.observe(servicesContainerRef.current);


      

    },[]);

   



    return <>
    {/* <div className="parallax-container services-parallax">
        <div className="parallax-cover" ref={parallaxServiceCover}>
            <Img fluid={cover} alt="Our Services Picture" style={{maxHeight:'100%'}} imgStyle={{objectFit:'cover'}} />
        </div>
    </div> */}
    



    <div className="services-section" id="services">

        <div className="services-section-left">

            <h1 className="services-section-title"> SERVICES </h1>
            <div className="services-section-intro">{documentToReactComponents(JSON.parse(texts.introText.raw),options)}</div>
            <hr className="services-section-separator"></hr>
            <h1 className="services-section-quote">{texts.servicesQuote}</h1>
            

        </div>
        <div className="services-section-right">

          <div className="icon-flex">
            <div className="services-section-design">
            <GatsbyImage
              image={designIcon}
              alt="Design Icon Illustration"
              style={{ maxHeight: "100%" }}
              imgStyle={{ objectFit: "contain" }}
              cl />
            </div>

            <h1> DESIGN </h1>
          </div>
          <div className="icon-flex">
            <div className="services-section-implement">
            <GatsbyImage
              image={implementIcon}
              alt="Implement Icon Illustration"
              style={{ maxHeight: "100%" }}
              imgStyle={{ objectFit: "contain" }}
              cl />
            </div>

            <h1> IMPLEMENT </h1>
          </div>
          <div className="icon-flex">
            <div className="services-section-manage">
            <GatsbyImage
              image={manageIcon}
              alt="Manage Icon Illustration"
              style={{ maxHeight: "100%" }}
              imgStyle={{ objectFit: "contain" }}
              cl />
            </div>

            <h1> MANAGE </h1>
          </div>
          <div className="icon-flex">
            <div className="services-section-transform">
            <GatsbyImage
              image={transformIcon}
              alt="Transform Icon Illustration"
              style={{ maxHeight: "100%" }}
              imgStyle={{ objectFit: "contain" }}
              cl />
            </div>

            <h1> TRANSFORM </h1>
          </div>
          <div className="services-section-cubes" ref={parallaxCubes}>
            <GatsbyImage
              image={cubes}
              alt="Cubes Icon Illustration"
              style={{ maxHeight: "100%" }}
              imgStyle={{ objectFit: "contain" }}
              cl />
            </div>

    
        </div>

    </div>


    <div className="services-section-services-container" ref={servicesContainerRef}>

      <div class={slider == 0 ? "disable-arrow":"left-arrow"} onClick={()=>{slide(false)}}>
        <GatsbyImage
          image={arrow}
          alt="Arrow Image"
          style={{maxHeight:'100%'}}
          imgStyle={{objectFit:'cover'}} />
      </div>

    

        <div className="services-section-services" ref={sliderContainer}>
          {
            servicesBlocks.map((slide,slideIndex)=>(
              <div className={`slide slide-${slideIndex}`} ref={el => slides.current[slideIndex]=el} >

                {
                  slide.map((box,index)=>(
                    <div className="box" key={index*slideIndex}>
                      <h1> {box.titleOfTheBox}</h1>
                      <div> {documentToReactComponents(JSON.parse(box.boxDescription.raw),options)}</div>
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>

    <div class={slider == slides.current.length-1 ? "disable-arrow":"right-arrow"}  onClick={()=>{slide(true)}}>
     <GatsbyImage
       image={arrow}
       alt="Arrow Image"
       style={{maxHeight:'100%'}}
       imgStyle={{objectFit:'cover'}} />
    </div>

    <div className="container-swipe-lines">
      {
      slides.current.map((el,index)=>(
     <div className={slider=== index?"swipe active-swipe":"swipe"} onClick={()=>{slide(true,index)}}></div>

      ))
     }
  

    </div> 

  </div>

    
  

    </>;

}

export default Services