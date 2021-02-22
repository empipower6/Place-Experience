import React,{useEffect,useState,useRef} from 'react' 
import Img from 'gatsby-image'
import InsightsOnlyFour from './insightsOnlyFour'

const InsightsDisplay = ({filterChange,insightsRef,filteredArticles,design,implement,transform,manage,left,right}) =>{

    const [where,setWhere] = useState(0);
    const [filterShows, setFilterShows] = useState(filteredArticles);
    const [timer,setTimer] = useState(false);
    const [clicked,setClicked] = useState(false);
    
    //initial when articles come in
    useEffect(()=>{
        
        if(where>0){
            
            //if you're not on the first slide, then you should first get there.
            setWhere(0);
        }
        else{

        
           //if you're on the first slide, then we can most definitely simply push the shows in
         setFilterShows(filteredArticles.slice(where,where+4));
        
        }


    },[filteredArticles])
   
    //when arrow keys are clicked
    useEffect(()=>{

        
      if(where +4 > filteredArticles.length){

        let newArticles = [];
        //the amount of shows that's left before we proceed to the first one
        filteredArticles.slice(where,filteredArticles.length).every((play) => newArticles.push(play));
        //the amount that needs to be shown after the first play
        let startList = filteredArticles.length> 4 ? 4-(filteredArticles.length- where): where;
        filteredArticles.slice(0,startList).every((play) => newArticles.push(play));

        setFilterShows(newArticles);


      }
      else{

        setFilterShows(filteredArticles.slice(where,where+4));

      }
    },[where])



    const move=(dir)=>{

        const inc = dir ? 1 :-1;


        if(dir){

            if(where+1 === filteredArticles.length){
              setWhere(0);
            }
            else{

            setWhere(where+inc);

            }
        }
        
        else if(!dir){

            if(where - 1 === -1){

              setWhere(filteredArticles.length-1);
            }
            else{

            setWhere(where+inc);
            }

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
         <div className="left-arrow" onClick={()=>{move(false);setClicked(true);}}>
             <Img fluid={left} alt="Left Arrow Icon" style={{maxHeight:'100%'}} imgStyle={{objectFit:'contain'}} />
         </div>


            <InsightsOnlyFour show={filterShows} design={design} implement={implement} 
                           transform={transform} manage ={manage} left={left} right={right} allShows={filteredArticles} />
        
            <div className="right-arrow" onClick={()=>{move(true);setClicked(true);}}>
             <Img fluid={right} alt="Right Arrow Icon" style={{maxHeight:'100%'}} imgStyle={{objectFit:'contain'}} />
         </div>
        </div> 

        </>
    )
}

export default InsightsDisplay