import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { gsap } from "gsap/dist/gsap";
import {Helmet} from "react-helmet";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";



class Header extends React.Component {


    constructor(props) {
      super(props)
      gsap.registerPlugin(ScrollTrigger); 
      gsap.registerPlugin(ScrollToPlugin);
      
      this.activateScrollTo= this.activateScrollTo.bind(this);

      this.state={imageSwitcher:this.props.logo};

      this.about = React.createRef();
      this.services = React.createRef();
      this.stories = React.createRef();


    }
    

    componentDidMount(){

        let tl = gsap.timeline({
            // yes, we can add it to an entire timeline!
            scrollTrigger: {
              trigger: ".menu",
              start: "top top", // when the top of the trigger hits the top of the viewport
              end: "+=200", // end after scrolling 200px beyond the start
              toggleActions: "play complete reverse reverse"
            }
          });

        tl.to(".title",{
            opacity:0,
            x:100,
            duration:1

        })
        .to(".menu",{
            paddingTop:1+'rem',
            paddingBottom:1+'rem',
            duration:1
        },'-=1');

        var menu = document.querySelector(".mobile-menu");
        menu.addEventListener("click",()=>{

            gsap.fromTo(".menu ul",{display:'none',opacity:0,x:200},{display:'block',opacity:1,x:0,duration:0.5});
            
        })

        var closeMenu = document.querySelector(".menu .cancel-mobile");
        closeMenu.addEventListener("click",()=>{

            gsap.fromTo(".menu ul",{display:'block',opacity:1,x:0},{display:'none',opacity:0,x:200,duration:0.5});
            
        })
        
        if(window.location.pathname== "/"){
        
        let serviceStart= document.querySelector('.examples .block-3 .desc').offsetTop+120;
        let teamStart= document.querySelector('.team-section').offsetTop+20;



        //Making sure the menu has a background when we're on the white background section
        ScrollTrigger.matchMedia({
         
            // desktop
            "(min-width: 980px)": function() {

                gsap.to(".menu", {
                    backgroundColor:"#2A4889",
                    opacity:1,
                    scrollTrigger: {
                      trigger: ".about .aboutIntro", 
                      start:'top top',
                      end: ()=>serviceStart, // end after scrolling 200px beyond the start
                      toggleActions: "play reset play reverse",
                    }, 
                  });

                gsap.to(".menu", {
                backgroundColor:"#2A4889",
                opacity:1,
                scrollTrigger: {
                    trigger: ".stories-section", 
                    start:'top top',
                    end: ()=>teamStart, // end after scrolling 200px beyond the start
                    toggleActions: "play reset play reverse",
                }, 
                });


            },
            

        
        });
    }
        
        this.activateScrollTo();
       
      
    }

    activateScrollTo(){
        //About Scroll To
        this.about.addEventListener('click',()=>{
            gsap.to(window,{duration: 1,scrollTo:{y: ".about", offsetY: 200}})
        });

        this.services.addEventListener('click',()=>{
            gsap.to(window,{duration: 1,scrollTo:{y: ".services", offsetY: 0}})
        });
        
        this.stories.addEventListener('click',()=>{
            gsap.to(window,{duration: 1,scrollTo:{y: ".stories-section", offsetY: 0}})
        });
     
    }
    
    render(){
          return(

            <>
                <Helmet>

                 <script src="https://kit.fontawesome.com/17ccd0b195.js" crossorigin="anonymous"></script>

                </Helmet>




                <div className="menu">
                    <div className="logo">
                        <Link to="/">
                            <Img className ="logoImage" fluid = {this.state.imageSwitcher} alt="Header Menu Logo" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} />
                        </Link>
                    </div>
                    <div className="title">
                        <p> | Place Experience</p>
                    </div>
                    <i className="fas fa-bars mobile-menu">

                    </i>

                    <ul>
                        <li className="cancel-mobile"> X </li>
                        <li className="first" ref={li => this.about = li}>  About </li>
                        <div className="mobile-menu-circle circle-1">
                            <Img fluid={this.props.circle} alt="Decorative blue circles for the mobile menu" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }}/></div>
                        <li ref={li => this.services = li}>Services</li>
                        <li ref={li => this.stories = li}>Stories</li>
                        <li>Team</li>
                        <li>Insights</li>

                        <div className="mobile-menu-circle circle-5">
                            <Img fluid={this.props.circle} alt="Decorative blue circles for the mobile menu" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }}/></div>
                        

                    </ul>

                </div>
    
    
    
    </>
          )
      }
    }


export default Header;