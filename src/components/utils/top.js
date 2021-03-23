import React,{useEffect,useRef,useState} from 'react' 
import { gsap } from "gsap/dist/gsap";
import { GatsbyImage } from "gatsby-plugin-image";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const Top = ({arrow,disappearItem})=>{

  const top = useRef (null);
  const [disappear, setDisappear] = useState(true);

  gsap.registerPlugin(ScrollToPlugin);

    const scrollTop = ()=>{

        gsap.to(window,{scrollTo:{y:0},duration:1});

      }
    useEffect(() => {

     
     
     const options={
      root:null,
      rootMargin:'0px',
      threshold:0.3
    };

// Intersection Observer basically kills the main scroll while we're snapping. Once it reaches the third cover,
// It enables the main scrolling again
const articleObserver = new IntersectionObserver((entries,observer)=>{

  entries.forEach(entry=>{


    if(entry.isIntersecting){

      setDisappear(true);

    }
    else{

      setDisappear(false);
    }

  })

},options);

articleObserver.observe(disappearItem.current);


              
    }, [])

    useEffect(()=>{
        
      disappear ? gsap.to(top.current,{autoAlpha:0,duration:0.2}) : gsap.to(top.current,{autoAlpha:0.8,duration:0.2});


  },[disappear]);
      


    return <>
    <div onClick={()=>{scrollTop()}} ref={top}>
      <GatsbyImage
        image={arrow}
        alt="Go To The Top Icon"
        style={{ maxHeight: "100%",cursor:'pointer' }}
        imgStyle={{ objectFit: "contain" }} />
    </div>
    </>;
}

export default Top;