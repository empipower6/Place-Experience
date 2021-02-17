import React, { useEffect,useState,useRef } from 'react' 

import InsightsFilter from './utils/insightsFilter'
import InsightsDisplay from './utils/insightsDisplay'


const Insights = ({articles,designIcon,implementIcon,transformIcon,manageIcon,whiteDesign, whiteImplement,whiteTransform,whiteManage,left,right})=>{


    const [filter , changeFilter ]= useState({Design:false,Manage:false,Transform:false,Implement:false});
    const [filteredArticles, changeArticles] =useState(articles.slice(0).reverse());

    const insightSection =useRef(null); 

    useEffect(()=>{

        handleFilterChange();

    },[filter])

    const handleFilterChange = () =>{

        const oldArticles = articles.slice(0).reverse();
        const newArticles=[];

        oldArticles.map((article,index)=>{

            if(articleVerify(article.node.categories.nodes)){
                newArticles.push(article);
            }

        })

        if(newArticles.length === 0 ){

            changeArticles(articles.slice(0).reverse());
        }
        else{

           changeArticles(newArticles);
        }


    }

    const articleVerify = (cats) =>{

        

        // filter.some((key,value) => value= true )
        const openCats = [];
        let flag =  false;

        Object.entries(filter).map((key)=>{
            if(key[1]){ openCats.push(String(key[0]))}
        });

        cats.map((category)=>{
            if(openCats.includes(category.name)){

                flag= true;

            }
        })

       
        return flag;

       
        




    }


 
  

    return(
      
        <>
        <div className="insights-section" id="section-insights"ref={insightSection}>
                <h1> INSIGHTS </h1>
                <div className="filter-box">
        
                    <p> FILTER BY CATEGORY</p>

                    <InsightsFilter designIcon={designIcon} implementIcon={implementIcon} 
                                    manageIcon={manageIcon} transformIcon={transformIcon}
                                    filterChange= {changeFilter} filter={filter} />
                </div>
                
            
                

                <InsightsDisplay filteredArticles={filteredArticles} design= {whiteDesign}  implement={whiteImplement}
                                transform= {whiteTransform} manage={whiteManage} left={left} right={right} filterChange ={changeFilter} insightsRef ={insightSection} />
                     
         </div>

        </>
    )
}

export default Insights;