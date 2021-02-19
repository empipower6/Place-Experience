import React ,{useEffect,useRef} from 'react'
import { gsap} from "gsap/dist/gsap";
import Img from 'gatsby-image'


const Author = ({name,title,desc,pic,comma}) =>{

   
    const person = useRef(null);
    const timeline =useRef(null);

    const menuItems = useRef([]);

    menuItems.current =[];
   

    


    const addInto = (el) => {
        if (el && !menuItems.current.includes(el)) {
            menuItems.current.push(el);
        }
        };


    const openPerson = () =>{
        timeline.current.play();
        document.body.classList.add('body-disable');
    }

    const closePerson = () =>{
        timeline.current.reverse();
        document.body.classList.remove('body-disable');

    }

    useEffect(()=>{

        timeline.current = gsap.timeline({paused:true});
        timeline.current.fromTo(person.current,{display:'none'},{display:'flex',duration:0.1})
        .to(person.current,{width:'100%',height:'100%',duration:0.5})
        .fromTo(menuItems.current,{autoAlpha:0,y:100},{autoAlpha:1,ease:"power3.out",y:0,duration:0.4,stagger: 0.1});

        console.log(pic);



    })

    const imageHandler = (img) =>{

        let toReturn;

        if(img.children[0].children[0].attributes.src){

 
            toReturn = true;
        
        }
        else if(pic.children[0].childNodes[0].childNodes[1].attributes.src){

            let div = document.createElement
            let figure = pic.children[0];
            toReturn = false;

        }

        return toReturn;

    }


    return(
        <>
        <div className="author-name" onClick={()=>{openPerson()}}> {name.trim()}{comma? <span className="comma">,</span>:''} </div>

        <div className="summary" ref={person}>
                   <div className="left">
                        <p  className="cancel-mobile" onClick={()=>{closePerson()}} > X </p>
                        <p className="mobile-title" ref={addInto}> CLOSE </p>
                        <div className="summary-actual">
                            <div className="summary-image" ref={addInto}>
                              <Img fluid={pic} alt="Author Image" style={{maxHeight:'100%'}} />
                            </div>
                            <div className="summary-text">
                                <h1 ref={addInto}>{name.toUpperCase()}</h1>
                                <h2 ref={addInto}>{title.toUpperCase()}</h2>
                                <div ref={addInto}>{desc}</div>
                            </div>
                        </div>
                   </div>
                   {/* <div className="right">
                    <a href="https://www.linkedin.com/in/akulak/" target="_blank" rel="noreferrer">
                            <div className="linkedin"ref={addAlper} >
                                <Img fluid={linkedinWhite} alt="Linkedin Icon" style={{maxHeight:'100%'}} imgStyle={{objectFit:'cover'}} />
                            </div>
                        </a>                 
                    </div> */}
               </div>
        </>

       
    )

}

export default Author;