import React,{useEffect,useRef} from 'react'
import Img from "gatsby-image"
import { Link } from "gatsby"
import { gsap } from "gsap/dist/gsap";



const Stories = (props)=>{
    
    const tri = useRef();
    const squ = useRef();
    const rect = useRef();

  
    useEffect(()=>{
      console.log(props.media);

        gsap.to(squ.current, {
            y: -100,
            scrollTrigger: {
              trigger: squ.current,          
              scrub: true
            }, 
          });
          gsap.to(tri.current, {
            y: -100,
            scrollTrigger: {
              trigger: tri.current,          
              scrub: true
            }, 
          });
          gsap.to(rect.current, {
            y: -100,
            scrollTrigger: {
              trigger: rect.current,          
              scrub: true
            }, 
          });       

    },[]);

    return(
        <>
        <div className="stories-section">

           <div className="stories-triangle" ref={tri}>
                <Img fluid={props.triangle} alt="Triangle Illustrations" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }}/>
            </div>
            <h1 className="stories-section-title"> Stories </h1>
            <div className="stories-title-outline">
                <Img fluid={props.media[1].fluid} alt="Stories Outline" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }}/>
            </div>
            <p className="stories-section-desc"> We do not just deliver; we create everlasting capabilities. </p>
            
            
           <div className="stories-rectangle" ref={rect}>
                <Img fluid={props.rectangle} alt="Rectangle Illustrations" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }}/>
            </div>

            <div className="stories-flex">
            
            {
                props.info.edges.map((item,index) =>(

                    <div className="story-box" key={index}>
                         <Link to={`/${item.node.slug}`} style={{ textDecoration: 'none',display:"flex",flexFlow:"column nowrap",alignItems:"center" }}>
                         <div className={`story-stroke ${index%2===0?"circle-left":"circle-right"}`}>
                           <Img fluid={props.media[0].fluid} alt="Stroke Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }}/>
                         </div>
                        <div className="story-image">
                             <Img fluid={item.node.storyImage.fluid} alt={`Image of ${item.node.title}`} 
                                  style={{ maxHeight: "100%",
                                           height: "100%",
                                            width: "100%",
                                            objectFit:"cover",
                                            objectPosition: "0% 0%",
                                            borderRadius:"100%"

                                           }}  
                                        /> 
                        </div>
                    <h1 className="story-box-title"> {item.node.title} </h1>
                     </Link>

                    </div>

                ))
            }

            <div className="stories-square" ref={squ}>
                <Img fluid={props.square} alt="Square Illustrations" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }}/>
            </div>
            </div>

        </div>

        </>
    )


}

export default Stories;