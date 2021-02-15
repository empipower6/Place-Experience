import React, { useEffect,useState,useRef } from 'react' 

import Img from 'gatsby-image'
import {Link} from 'gatsby'
import { gsap} from "gsap/dist/gsap";

const Insights = ({articles,designIcon,implementIcon,transformIcon,manageIcon,whiteDesign, whiteImplement,whiteTransform,whiteManage,left,right})=>{

   
    const chunk = (array, size) => Array.from({length: Math.ceil(array.length / size)}, (value, index) => array.slice(index * size, index * size + size));

    const [filter, setFilter] = useState(chunk(articles.slice(0).reverse(),4));
    const [filterSection, setFilterSection] = useState(0);

    const filterBlocks= useRef(new Array());
    

    useEffect(()=>{

        observers();



    },[])
   
    const observers =()=>{
 
        const options={
            root:null,
            rootMargin:'0px',
            threshold:0.3
          };

      
      const filterObserver = new IntersectionObserver((entries,observer)=>{

        entries.forEach(entry=>{
          if(entry.isIntersecting){
              
              let section = Number(entry.target.classList[1].split("-")[1]);
              setFilterSection(section);
          }
        })

      },options);

     filterBlocks.current.map((block)=>{
         filterObserver.observe(block);
     })     
     


    }
 



    const changeFilter = (cat) =>{

        filterBlocks= [];

        let temp = cat === 'all' ? articles.slice(0).reverse() :articles.slice(0).reverse().filter(article => article.node.categories.nodes.some((category)=> category.name == cat))
        let chunked = chunk(temp,4);

        setFilter(chunked);
        observers();
    }
   

   const move = (dir) =>{

    console.log(filterBlocks);

    const inc = dir ? 1: -1;
    let timeline = new gsap.timeline({repeat:0,paused:true});
    timeline.to(filterBlocks.current[filterSection+inc],{display:'flex',autoAlpha:1,duration:0.5})
    .to(filterBlocks.current[filterSection],{autoAlpha:0,display:'none',duration:0.5},"-=0.5");

      if(dir && filterSection+1<filterBlocks.current.length){
          
          timeline.play();
      }
      else if(!dir && filterSection-1>-1){

          timeline.play();

      }

   }
   const showIcon= (box)=>{
    
        let pic;

        if(box.node.categories.nodes.some(cat =>cat.name==='Design')){
            pic= whiteDesign;
        }
        else if(box.node.categories.nodes.some(cat =>cat.name==='Manage')){
            pic= whiteManage;
        }
        else if(box.node.categories.nodes.some(cat =>cat.name==='Implement')){
            pic= whiteImplement;
        }
        else if(box.node.categories.nodes.some(cat =>cat.name==='Transform')){
            pic= whiteTransform;
        }

        return(
    
                <div className="box-icon">
                    <Img fluid={pic} alt="Box Icon" style={{maxHeight:'100%'}} imgStyle={{objectFit:'contain'}} />
                </div>
        )
   }

    return(
      
        <>
        <div className="insights-section">
        <h1> INSIGHTS </h1>
        <div className="filter-box">

            <p> FILTER BY CATEGORY</p>

            <div className="filter-icons">
                <div className="icon" onClick={()=>{changeFilter('all')}} style={{cursor:"pointer"}}>
                    <h1> All </h1>
                </div>
                <div className="icon" onClick={()=>{changeFilter('Design')}} style={{cursor:"pointer"}}>
                        <Img fluid={designIcon} alt="Design Icon" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} />
                </div>
                <div className="icon" onClick={()=>{changeFilter('Implement')}} style={{cursor:"pointer"}}>
                        <Img fluid={implementIcon} alt="Implement Icon" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} />
                </div>
                <div className="icon" onClick={()=>{changeFilter('Manage')}} style={{cursor:"pointer"}}>
                        <Img fluid={manageIcon} alt="Manage Icon" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} />
                </div>
                <div className="icon" onClick={()=>{changeFilter('Transform')}} style={{cursor:"pointer"}}>
                        <Img fluid={transformIcon} alt="Transform Icon" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} />
                </div>
                
            </div>
        </div>
        
       
        <div className="filter-field">
         <div className={filterSection-1>-1? "left-arrow":"disable-arrow"} onClick={()=>{move(false)}}>
             <Img fluid={left} alt="Left Arrow Icon" style={{maxHeight:'100%'}} imgStyle={{objectFit:'contain'}} />
         </div>
         {
         filter.map((section,index)=>(

            <div className={`section section-${index}`} key={index} ref={(el)=>{filterBlocks.current[index]=el}}>

                {
                    section.map((box,key)=>(
                        key==0? 
                        <div className="first-box">

                            <Link to={`/${box.node.slug}`} style={{color:'none',textDecoration:'none'}}>
                                <Img fluid={box.node.featuredImage.node.localFile.childImageSharp.fluid} style={{maxHeight:'100%'}} />

                                <h1>{box.node.title.toUpperCase()}</h1>
                                

                            </Link>
                            {showIcon(box)}

                        </div>

                        :
                        <div className="others">

                            <Link to={`/${box.node.slug}`} style={{color:'none',textDecoration:'none'}}>
                                    <h1>{ box.node.title.toUpperCase()}</h1>
                                
                            </Link>
                            {showIcon(box)}

                        </div>



                    ))
                }
            
            </div>
          
         ))

        }
          <div className={filterSection+1<filterBlocks.current.length? "right-arrow":"disable-arrow"} onClick={()=>{move(true)}}>
             <Img fluid={right} alt="Right Arrow Icon" style={{maxHeight:'100%'}} imgStyle={{objectFit:'contain'}} />
         </div>
        </div> 

        </div>

        </>
    )
}

export default Insights;