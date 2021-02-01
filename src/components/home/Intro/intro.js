import React,{ useEffect,useRef,useState } from 'react'
import Logo from '../../essentials/logo'
import BackgroundImage from 'gatsby-background-image'



const Intro = ({logo,customer,experience,growth})=>{
      
    const container = useRef();

    const [cover , setState]= useState(0);


    const snapScrollControl = ()=>{

        
      window.addEventListener('scroll',()=>{

          
        if(window.pageYOffset > 0){
         container.current.classList.add('inactive-container');
         container.current.classList.remove('container');

    
        }
        else if(window.pageYOffset === 0){
      container.current.classList.add('container');
      container.current.classList.remove('inactive-container');
    
        }
    
      });
      
    }
    
   

    
    useEffect(()=>{

      //Snap Scroll is to make sure the snapping starts when the window.y is equal to 0.
      //Otherwise, what happens is when you're scrolling back into the snap container, the
      //snap can start even when it's in half height as long as the mouse is in the container.
      snapScrollControl();
      
      

      const options={
        root:null,
        rootMargin:'0px',
        threshold:1.0
      };

      //Intersection Observer basically kills the main scroll while we're snapping. Once it reaches the third cover,
      //It enables the main scrolling again
      const observer = new IntersectionObserver((entries,observer)=>{

        entries.forEach(entry=>{
          if(entry.isIntersecting){
             
             if(entry.target.classList[1]=== "first-child"){

              document.body.classList.add('stop-scroll');
              setState(0);

             }

             else if(entry.target.classList[1]=== "second-child"){

              document.body.classList.add('stop-scroll');
              setState(1);


             }
             else if(entry.target.classList[1]=== "third-child"){

              document.body.classList.remove('stop-scroll');
              setState(2);

             
             }
          }
        })

      },options);

      const children = document.querySelectorAll('.container .child');


      children.forEach(child=>{
        observer.observe(child);
      })
      

              
    },[]);
  
    return(

        <>
      <div className="container" ref={container}>
        
       <div className="fixed-header">
        <div className="fixed-header-logo">
           <Logo image={logo} />
        </div>
        
        <h1 className="fixed-header-title"> PLACE EXPERIENCE </h1>
        </div>      

        <div className="container-swipe-lines">

          <div className={cover=== 0?"swipe active-swipe":"swipe"}></div>
          <div className={cover=== 1?"swipe active-swipe":"swipe"}></div>
          <div className={cover=== 2?"swipe active-swipe":"swipe"}></div>
        </div>       
        
        <section className="child first-child" >
          <BackgroundImage className="cover" fluid={customer}>    
           <p className="child-desc"> KNOW YOUR <br />CUSTOMER.</p>  
          </BackgroundImage>
        </section>

        <section className="child second-child">
          <BackgroundImage className="cover" fluid={experience}>      
           <p className="child-desc"> DELIVER <br />THE DESIRED <br/> EXPERIENCE.</p>  
          </BackgroundImage>
        </section>


        <section className="child third-child" >
          <BackgroundImage className="cover" fluid={growth}>      
           <p className="child-desc"> GENERATE <br />ECONOMIC <br/> GROWTH.</p>  
          </BackgroundImage>
        </section>
        

      </div>
       
      
        </>

    )




}

export default Intro;


