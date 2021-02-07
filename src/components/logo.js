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

    }

     openMenu(){

        // if(!this.timeline.current){

        let children = this.mobileMenu.current.children[0].childNodes;
        console.log(children);

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
        gsap.fromTo(this.mobileMenu.current,{display:'none',y:100+'vh'},{display:'block',y:0,duration:1,ease:"power3.out"});


        //For the Intro Section's logo not overlapping with the normal logo menu
        if(this.props.menuChecker){
            this.props.menuChecker(true);
        }
      

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
    gsap.fromTo(this.mobileMenu.current,{display:'block',y:0},{display:'block',y:100+'vh',duration:1,ease:"power3.out"});
    
    //For the Intro Section's logo not overlapping with the normal logo menu
    if(this.props.menuChecker){
        this.props.menuChecker(false);

    }


   }
   



    componentDidMount(){

        console.log(this.props.logoText);
        
            
    }

    render(){

        return(
            <>
            <div onClick={()=>{this.openMenu()}} style={{cursor:"pointer"}}>
                    <Img ref={this.imageRef} fluid={this.props.image} alt="Main Logo" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} />
            </div>
            <div className="logo-menu" ref={this.mobileMenu}>
                <div className="left">
                    <ul>
                        <li  className="cancel-mobile" onClick={()=>{this.closeMenu()}} > X </li>
                        <li className="mobile-title"> </li>
                        <AnchorLink to="/#section-about" className="anchors"><li key={2} className="logo-menu-item"  onClick={()=>{this.closeMenu()}}> ABOUT US </li></AnchorLink>
                        <AnchorLink to="/#services" className="anchors"><li className="logo-menu-item" onClick={()=>{this.closeMenu()}}> SERVICES </li></AnchorLink>
                        <AnchorLink to="/#stories-section" className="anchors"><li className="logo-menu-item" onClick={()=>{this.closeMenu()}}> STORIES </li></AnchorLink>
                        <li className="logo-menu-item" onClick={()=>{this.closeMenu()}}> TEAM </li>
                        <li className="logo-menu-item" onClick={()=>{this.closeMenu()}}> INSIGHTS </li>
                        <li className="logo-menu-item" onClick={()=>{this.closeMenu()}}> MEET US </li>

                    </ul>
                </div>
                {/* <div className="right">
                    <div className="logo-text">
                        <Img fluid={this.props.logoText} alt="Logo with Text" imgStyle={{objectFit:'cover'}} />
                    </div>
                    <div className="menu-socials">
                        <div className="call-icon">
                            <Img fluid={this.props.phoneIcon} alt="Phone Icon with Text" imgStyle={{objectFit:'cover'}} />
                        </div>
                        <h1>SCHEDULE A CALL</h1>
                    </div>

                </div> */}
            </div>
            </>
        );
    }

   
}


export default Logo;