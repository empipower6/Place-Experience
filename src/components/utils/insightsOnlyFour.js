import React,{useRef,useEffect,useState} from 'react'

import Img from 'gatsby-image'
import {Link} from 'gatsby'
import FlipMove from 'react-flip-move';

import { gsap} from "gsap/dist/gsap";
import { useStaticQuery, graphql } from 'gatsby'



const InsightsOnlyFour = ({show,design,manage,implement,transform})=>{{

    let articleImage = useStaticQuery(graphql`
    query {

      media: allContentfulAsset {
        nodes {
          title
          fluid {
             aspectRatio
                base64
                src
                srcSet
          }
        }
      }
           
    }
    `)
    const boxFirst = useRef(null);
    const backBox = useRef(null);



    const [display, setDisplay] = useState(show);

    const [newOnes, setNewOnes] = useState(false); //true is new

  

    let timeline = useRef(null);

   
    const prev = usePrevious(display);

    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
          ref.current = value;
        });
        return ref.current;
      }

 


    useEffect(()=>{

     setNewOnes(!newOnes);

    
     

    },[show]);


    useEffect(()=>{

      if(newOnes){

      let tl = gsap.timeline({repeat:0});
      tl.to(backBox.current,{opacity:0,duration:0.5})
      .to(boxFirst.current,{opacity:1,duration:0.5},'-=0.5');
     setTimeout(()=>{setDisplay(show);},500);
      


      }

      else if(!newOnes){
    

        let tl = gsap.timeline({repeat:0});
        tl.to(backBox.current,{opacity:1,duration:0.5})
        .to(boxFirst.current,{opacity:0,duration:0.5},'-=0.5');
        setTimeout(()=>{setDisplay(show);},500);




      }

     
 
     },[newOnes]);

   
 

   const showIcon= (box)=>{
    
        let pic;

        if(box.node.categories.nodes.some(cat =>cat.name==='Design')){
            pic= design;
        }
        else if(box.node.categories.nodes.some(cat =>cat.name==='Manage')){
            pic= manage;
        }
        else if(box.node.categories.nodes.some(cat =>cat.name==='Implement')){
            pic= implement;
        }
        else if(box.node.categories.nodes.some(cat =>cat.name==='Transform')){
            pic= transform;
        }

        return(
    
                <div className="box-icon">
                    <Img fluid={pic} alt="Box Icon" style={{maxHeight:'100%'}} imgStyle={{objectFit:'contain'}} />
                </div>
        )
   }



   

    return(
        <>
       
        <div className='section'>

          {show?
          
          

          show.map((box,key)=>(

             key===0 ? 
                <div className="first-box" style={{cursor:'pointer'}} key={0}>

                {newOnes?  
                  <div className="box" ref={boxFirst}>
                      {show ?

                      <Link to={`/${box.node.slug}`} style={{color:'none',textDecoration:'none'}}>
                          <Img fluid={imageFinder(articleImage.media,box.node.title)} 
                          style={{maxHeight:'100%'}} />

                          <h1>{box.node.title.toUpperCase()}</h1>

                          {showIcon(box)}

                      </Link>
                      :""}

                  </div>
                :""

                }
                {newOnes ? ""

                :
                  <div className="boxBack" ref={backBox} style={{opacity:0}}>
                    {show ?

                    <Link to={`/${box.node.slug}`} style={{color:'none',textDecoration:'none'}}>
                      <Img fluid={imageFinder(articleImage.media,box.node.title)} style={{maxHeight:'100%'}} />

                        <h1>{box.node.title.toUpperCase()}</h1>

                        {showIcon(box)}

                    </Link>
                    :""
                    }
                  
                  </div>
                } 

            </div>
                  
            

          :

            <div className={`others others-${key}`} key={key}>

                <Link to={`/${box.node.slug}`} style={{color:'none',textDecoration:'none'}}>
                        <h1>{ box.node.title.toUpperCase()}</h1>
                    
                </Link>
                {showIcon(box)}

            </div>
          ))
          
            
           


      :""}  
            

      </div>

      </>

     


    )

}
}
export default InsightsOnlyFour;

const imageFinder = (data,name)=>{

    let image;
    let media = data.nodes;
    
    for(let i=0;i<media.length;i++){
  
     if(media[i].title === name){
        image = i;
     }
    }
    return media[image].fluid;
  }