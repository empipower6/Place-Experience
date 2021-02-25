import React,{useLayoutEffect,useRef} from 'react'

import Img from 'gatsby-image'

const InsightsFilter = ({designIcon,implementIcon,manageIcon,transformIcon,filterChange,filter,leftRef,rightRef})=>{

    const filters = useRef(null);


    useLayoutEffect(()=>{

        document.addEventListener('click',(e)=>{
            handleClick(e);
        })

        return()=>{
            document.removeEventListener('click',()=>{handleClick()})
        }
        
    
    },[])    

    const handleClick = (e) =>{

        if(filters.current){

            if(!filters.current.contains(e.target)&& !rightRef.current.contains(e.target) && !leftRef.current.contains(e.target)){
            
                filterChange({Design:false,Manage:false,Transform:false,Implement:false});
            }

        }
    }
    
    return (

        <>

            <div className="filter-icons" ref={filters}>
                {/* <div className="icon" onClick={()=>{changeFilter('all')}} style={{cursor:"pointer"}}>
                    <h1> All </h1>
                </div> */}
                <div className={filter.Design ? "icon-click" :"icon "} onClick ={()=>{ filterChange({...filter, Design: (filter.Design?false:true)});}}style={{cursor:"pointer"}}>
                        <Img fluid={designIcon} alt="Design Icon" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }}/>
                </div>
                <div className={filter.Implement ? "icon-click" :"icon "}  onClick ={()=>{ filterChange({...filter, Implement: (filter.Implement ? false:true)})}} style={{cursor:"pointer"}}>
                        <Img fluid={implementIcon} alt="Implement Icon" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} />
                </div>
                <div className={filter.Manage ? "icon-click" :"icon "} onClick ={()=>{ filterChange({...filter, Manage: (filter.Manage?false:true)})}}  style={{cursor:"pointer"}}>
                        <Img fluid={manageIcon} alt="Manage Icon" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} />
                </div>
                <div className={filter.Transform ? "icon-click" :"icon "} onClick ={()=>{ filterChange({...filter, Transform: (filter.Transform?false:true)})}} style={{cursor:"pointer"}}>
                        <Img fluid={transformIcon} alt="Transform Icon" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} />
                </div>
                
            </div>
        </>


    )
}

export default InsightsFilter;