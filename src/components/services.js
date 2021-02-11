import React, {useEffect,useRef,useState} from 'react' 
import Img from 'gatsby-image'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Services =({texts,cover,designIcon,implementIcon,manageIcon,transformIcon,cubes,arrow})=>{

    const parallaxServiceCover = useRef(null);
    const parallaxCubes = useRef(null);
    const sliderContainer = useRef(null);

   
    const slides = [];
    
    const firstSlide = useRef(null);
    const secondSlide = useRef(null);
    const thirdSlide = useRef(null);
    const fourthSlide = useRef(null);

    

    slides.push(firstSlide,secondSlide,thirdSlide,fourthSlide);
    

    const [slider , setSlider] =useState(0);
    

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);



    const options = {
        renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br />, 
        text])
       }
  
    const slide = (direction)=>{

      let number = direction ? 1 : -1;
      let timeline = new gsap.timeline({repeat:0,paused:true});
      timeline.to(slides[slider].current,{autoAlpha:0,display:'none',zIndex:-1,duration:0.5})
      .to(slides[slider+number].current,{autoAlpha:1,display:'flex',zIndex:0,duration:0.5},'-=0.5');
    
      if(direction && slider < 3){

        
        timeline.play();
      }
      else if(!direction && slider > 0){
        timeline.play();
      }

    }
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

        gsap.to(slides[slider].current,{autoAlpha:1,display:'flex',zIndex:0,duration:0.5});


        // slides.forEach((boxSection,index)=>{

        //   ScrollTrigger.create({
        //     trigger: boxSection.current,
        //     horizontal:true,
        //     onEnter: (self) => slide(self.direction)
        //   });
        // })
        

          const options={
            root:null,
            rootMargin:'0px',
            threshold:0.9
          };

      // Intersection Observer basically kills the main scroll while we're snapping. Once it reaches the third cover,
      // It enables the main scrolling again
      const slideObserver = new IntersectionObserver((entries,observer)=>{

        entries.forEach(entry=>{
          if(entry.isIntersecting){

            console.log(entry.target);

             
            if(entry.target.classList[1]=== "first-slide"){


              setSlider(0);

             }

             else if(entry.target.classList[1]=== "second-slide"){

              setSlider(1);


             }
             else if(entry.target.classList[1]=== "third-slide"){

              setSlider(2);

             
             }
             else if(entry.target.classList[1]=== "fourth-slide"){

              setSlider(3);

             
             }
          }
        })

      },options);

      slideObserver.observe(firstSlide.current);
      slideObserver.observe(secondSlide.current);
      slideObserver.observe(thirdSlide.current);
      slideObserver.observe(fourthSlide.current);


      

    },[])



    return(
        <>
        <div className="parallax-container services-parallax">
            <div className="parallax-cover" ref={parallaxServiceCover}>
                <Img fluid={cover} alt="Our Services Picture" style={{maxHeight:'100%'}} imgStyle={{objectFit:'cover'}} />
            </div>
        </div>
        



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
                <Img fluid={designIcon} alt="Design Icon Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} cl/>
                </div>

                <h1> DESIGN </h1>
              </div>
              <div className="icon-flex">
                <div className="services-section-implement">
                <Img fluid={implementIcon} alt="Implement Icon Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} cl/>
                </div>

                <h1> IMPLEMENT </h1>
              </div>
              <div className="icon-flex">
                <div className="services-section-manage">
                <Img fluid={manageIcon} alt="Manage Icon Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} cl/>
                </div>

                <h1> MANAGE </h1>
              </div>
              <div className="icon-flex">
                <div className="services-section-transform">
                <Img fluid={transformIcon} alt="Transform Icon Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} cl/>
                </div>

                <h1> TRANSFORM </h1>
              </div>
              <div className="services-section-cubes" ref={parallaxCubes}>
                <Img fluid={cubes} alt="Cubes Icon Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} cl/>
                </div>

        
            </div>

        </div>

      <div className="services-section-services-container">

        <div class={slider == 0 ? "disable-arrow":"left-arrow"} onClick={()=>{slide(false)}}>
          <Img fluid={arrow} alt="Arrow Image" style={{maxHeight:'100%'}} imgStyle={{objectFit:'cover'}} />
        </div>
 
        <div className="services-section-services" ref={sliderContainer}>
          <div className="slide first-slide" ref={firstSlide} >
            <div className="box">
              <h1> {texts.serviceTitle1}</h1>
              <div> {documentToReactComponents(JSON.parse(texts.service1.raw),options)}</div>
            </div>
            <div className="box">
            <h1> {texts.serviceTitle2}</h1>
              <div> {documentToReactComponents(JSON.parse(texts.service2.raw),options)}</div>
            </div>
            <div className="box third">
            <h1> {texts.serviceTitle3}</h1>
              <div> {documentToReactComponents(JSON.parse(texts.service3.raw),options)}</div>
            </div>
          </div>
          
          <div className="slide second-slide" ref={secondSlide}>
            <div className="box">
              <h1> {texts.serviceTitle4}</h1>
              <div> {documentToReactComponents(JSON.parse(texts.service4.raw),options)}</div>
            </div>
            <div className="box">
            <h1> {texts.serviceTitle5}</h1>
              <div> {documentToReactComponents(JSON.parse(texts.service5.raw),options)}</div>
            </div>
            <div className="box third">
            <h1> {texts.serviceTitle6}</h1>
              <div> {documentToReactComponents(JSON.parse(texts.service6.raw),options)}</div>
            </div>
          </div>

          <div className="slide third-slide" ref={thirdSlide} >
            <div className="box">
              <h1> {texts.serviceTitle7}</h1>
              <div> {documentToReactComponents(JSON.parse(texts.service7.raw),options)}</div>
            </div>
            <div className="box">
            <h1> {texts.serviceTitle8}</h1>
              <div> {documentToReactComponents(JSON.parse(texts.service8.raw),options)}</div>
            </div>
            <div className="box third">
            <h1> {texts.serviceTitle9}</h1>
              <div> {documentToReactComponents(JSON.parse(texts.service9.raw),options)}</div>
            </div>

             
          </div>  
          <div className="slide fourth-slide" ref={fourthSlide} >
            <div className="box">
              <h1> {texts.serviceTitle10}</h1>
              <div> {documentToReactComponents(JSON.parse(texts.service10.raw),options)}</div>
            </div>
            

             
          </div>        
          
        </div>

        <div class={slider == 3 ? "disable-arrow":"right-arrow"}  onClick={()=>{slide(true)}}>
         <Img fluid={arrow} alt="Arrow Image" style={{maxHeight:'100%'}} imgStyle={{objectFit:'cover'}} />
        </div>

        <div className="container-swipe-lines">

          <div className={slider=== 0?"swipe active-swipe":"swipe"}></div>
          <div className={slider=== 1?"swipe active-swipe":"swipe"}></div>
          <div className={slider=== 2?"swipe active-swipe":"swipe"}></div>
          <div className={slider=== 3?"swipe active-swipe":"swipe"}></div>


        </div> 

        </div>
      

        </>
    )

}

export default Services