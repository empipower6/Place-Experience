import React from 'react'
import Img from 'gatsby-image'
import { gsap, Power4} from "gsap/dist/gsap";
import { AnchorLink } from "gatsby-plugin-anchor-links";


class Logo extends React.Component{

    constructor(props){

        super(props);
        this.mobileMenu= React.createRef();
        this.imageRef= React.createRef();
        this.timeline = React.createRef();
        this.openMenu= this.openMenu.bind(this);
        this.closeMenu= this.closeMenu.bind(this);
        this.checkIfOutside= this.checkIfOutside.bind(this);

    }

     openMenu(){

        // if(!this.timeline.current){

        // let children = this.mobileMenu.current.children[0].childNodes;

        // this.timeline.current = gsap.timeline({repeat: 0});
    
        // this.timeline.current.fromTo(this.mobileMenu.current,{display:'none',opacity:0},{display:'block',opacity:1,duration:0.3});
        // children.forEach((element,key) => {
        //     console.log(element);
        //     this.timeline.current.to(element,{opacity:1,ease: Power4.easeOut,duration:0.5},"-=0.3");
        // });  
        // }

        // else{
        //     this.timeline.current.play();
        // }
        gsap.to(this.mobileMenu.current, {display:'block',opacity:1,duration:0.5});


        //For the Intro Section's logo not overlapping with the normal logo menu
        if(this.props.menuChecker){
            this.props.menuChecker(true);
        }
        window.addEventListener('click',(e)=>{
    
        this.checkIfOutside(e);
    
        });

    }

   closeMenu(){

    // if(!this.timeline.current){

    //     let children = this.mobileMenu.current.children[0].childNodes;

    //     this.timeline.current = gsap.timeline({repeat: 0});
    
    //     this.timeline.current.fromTo(this.mobileMenu.current,{display:'none',opacity:0},{display:'block',opacity:1,duration:0.5},"first");
    //     children.forEach((element,key) => {
    //         this.timeline.current.to(element,{opacity:1,ease: Power4.easeOut,duration:1},"-=0.8");
    //     });  
    // }
    
    // this.timeline.current.reverse();
    gsap.to(this.mobileMenu.current, {display:'none',opacity:0,duration:0.5});
    
    //For the Intro Section's logo not overlapping with the normal logo menu
    if(this.props.menuChecker){
        this.props.menuChecker(false);

    }



    document.body.classList.remove('stop-scroll');
    window.removeEventListener('click',(e)=>{

        this.checkIfOutside(e);
 
     });

    }

    checkIfOutside(e){
     
    if(e.target && !this.mobileMenu.current.contains(e.target)){

        if(e.target !== this.imageRef.current.imageRef.current){


            this.closeMenu();


        }
    }

    }

    componentDidMount(){

        
            
    }

    render(){

        return(
            <>
            <div onClick={()=>{this.openMenu()}} style={{cursor:"pointer"}}>
                    <Img ref={this.imageRef} fluid={this.props.image} alt="Main Logo" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} />
            </div>
            <div className="logo-menu" ref={this.mobileMenu}>
                <ul>
                    <li  className="cancel-mobile"onClick={()=>{this.closeMenu()}} > X </li>
                    <li className="mobile-title"> PLACE EXPERIENCE</li>
                    <AnchorLink to="/#section-about" className="anchors"><li key={2} className="logo-menu-item"  onClick={()=>{this.closeMenu()}}> ABOUT US </li></AnchorLink>
                    <AnchorLink to="/#services" className="anchors"><li className="logo-menu-item" onClick={()=>{this.closeMenu()}}> SERVICES </li></AnchorLink>
                    <li className="logo-menu-item" onClick={()=>{this.closeMenu()}}> STORIES </li>
                    <li className="logo-menu-item" onClick={()=>{this.closeMenu()}}> TEAM </li>
                    <li className="logo-menu-item" onClick={()=>{this.closeMenu()}}> INSIGHTS </li>
                    <li className="logo-menu-item" onClick={()=>{this.closeMenu()}}> MEET US </li>

                </ul>
            </div>
            </>
        );
    }

   
}


export default Logo;