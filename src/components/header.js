import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { gsap } from "gsap/dist/gsap";
import {Helmet} from "react-helmet";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



class Header extends React.Component {


    constructor(props) {
      super(props)
      gsap.registerPlugin(ScrollTrigger); 

      this.state={imageSwitcher:this.props.logo};
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
                <i class="fas fa-bars mobile-menu">

                </i>

                <ul>
                    <li className="cancel-mobile"> X </li>
                    <li className="first">About
                    <div className="mobile-menu-circle circle-1"><Img fluid={this.props.circle} alt="Decorative blue circles for the mobile menu" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }}/></div>
                    </li>
                    <li>Services</li>
                    <li>Stories</li>
                    <li>Team</li>
                    <li>                    
                    <div className="mobile-menu-circle circle-5"><Img fluid={this.props.circle} alt="Decorative blue circles for the mobile menu" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }}/></div>
                    Insights</li>

                </ul>

    
    
    
    
    
    </div>
    
    
    
    </>
          )
      }
    }


export default Header;