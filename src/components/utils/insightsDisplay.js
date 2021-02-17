import React,{useEffect,useState,useRef} from 'react' 
import Img from 'gatsby-image'
import InsightsOnlyFour from './InsightsOnlyFour'

const InsightsDisplay = ({filterChange,insightsRef,filteredArticles,design,implement,transform,manage,left,right}) =>{

    const [where,setWhere] = useState(0);
    const [filterShows, setFilterShows] = useState(filteredArticles);
    const [timer,setTimer] = useState(false);
    const [clicked,setClicked] = useState(false);
    
    //initial when articles come in
    useEffect(()=>{
        
        if(where>0){
            setWhere(0);
        }
        else{
        setFilterShows(filteredArticles.slice(where,where+4));
        
        }


    },[filteredArticles])
   
    //when arrow keys are clicked
    useEffect(()=>{

        setFilterShows(filteredArticles.slice(where,where+4));


    },[where])



    const move=(dir)=>{

        const inc = dir ? 1 :-1;

       

        if(where+1 < filteredArticles.length &&  dir){

            setWhere(where+inc);
        }
        
        else if(where - 1 > -1 && !dir){

            setWhere(where+inc);

        }

    }
    const useInterval= (callback, delay)=> {
      
        const savedCallback = useRef();
        if(clicked){
          delay=0;
          setClicked(false);
        }
        // Remember the latest callback.
        useEffect(() => {
          savedCallback.current = callback;
        }, [callback]);
      
        // Set up the interval.
        useEffect(() => {
          function tick() {
            savedCallback.current();
          }
          if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
          }
        }, [delay]);
      }
  


    useInterval(()=>{move(true)},timer ? 10000 : null);


    useEffect(()=>{

        
        const options={
            root:null,
            rootMargin:'0px',
            threshold:0.3
          };
    
          //Intersection Observer basically kills the main scroll while we're snapping. Once it reaches the third cover,
          //It enables the main scrolling again
          const observer = new IntersectionObserver((entries,observer)=>{
    
            entries.forEach(entry=>{

              if(entry.isIntersecting){
                  setTimer(true);
              }
              else{
    
                  setTimer(false);
                  filterChange({Design:false,Manage:false,Transform:false,Implement:false});

              }
            })
    
          },options);
    
                  
    
          observer.observe(insightsRef.current);

       

    },[])


    return(
        <>
        <div className="filter-field">
         <div className={where - 1 > -1? "left-arrow":"disable-arrow"} onClick={()=>{move(false);setClicked(true);}}>
             <Img fluid={left} alt="Left Arrow Icon" style={{maxHeight:'100%'}} imgStyle={{objectFit:'contain'}} />
         </div>


            <InsightsOnlyFour show={filterShows} design={design} implement={implement} 
                           transform={transform} manage ={manage} left={left} right={right} />
        
            <div className={where+1 < filteredArticles.length? "right-arrow":'disable-arrow'} onClick={()=>{move(true);setClicked(true);}}>
             <Img fluid={right} alt="Right Arrow Icon" style={{maxHeight:'100%'}} imgStyle={{objectFit:'contain'}} />
         </div>
        </div> 

        </>
    )
}

export default InsightsDisplay