import React,{ useEffect,useRef,useState } from 'react'
import { GatsbyImage } from "gatsby-plugin-image";
import { gsap, Power4} from "gsap/dist/gsap";




const Video = ({video,playIcon,pauseIcon}) =>{

    const videoRef = useRef();
    const controller = useRef();
   

    const [playSwitch, setPlaySwitch]= useState(false);
    const [mute,setMute] =useState(true);

    let timeline = useRef(null);
    
   

    const play  = ()=>{



 
        playSwitch ? videoRef.current.play() : videoRef.current.pause();

        timeline.current = new gsap.timeline({repeat:0});
        timeline.current.to(controller.current,{opacity:1,duration:1})
        .to(controller.current,{opacity:0,duration:1},'+=2');

        setPlaySwitch(!playSwitch);

    }

    useEffect(()=>{

        const options={
            root:null,
            rootMargin:'0px',
            threshold:0.6
          };

          const videoObserver = new IntersectionObserver((entries,observer)=>{

            entries.forEach(entry=>{
    
    
              if(entry.isIntersecting){
    
                 
                videoRef.current.play();
                setPlaySwitch(!playSwitch);

                 
            
              }
              else{
             videoRef.current.pause(); 
             setPlaySwitch(!playSwitch);
            }
             
            })
    
          },options);
          
          
          videoObserver.observe(videoRef.current);
    


    },[]);

    const mouseMoved = ()=>{

        if(!timeline.current.isActive()){
         timeline.current = new gsap.timeline({repeat:0});
         timeline.current.to(controller.current,{opacity:1,duration:1})
         .to(controller.current,{opacity:0,duration:1},'+=2');


        }
       

        

    }

    const muteSwitch = () =>{

        videoRef.current.muted=  mute ? true : false;

        setMute(!mute);
    }

    useEffect(()=>{
 
         videoRef.current.play();
        
         timeline.current = new gsap.timeline({paused:true});
         timeline.current.to(controller.current,{opacity:1,duration:1})
         .to(controller.current,{opacity:0,duration:1},'+=2');
         
         timeline.current.play();

    },[])



    return(
        <>
        
        <div className='video-container'>
         <video disablePictureInPicture loop className="video" ref={videoRef} >
            <source src={video.edges[0].node.file.url} type="video/mp4" />
            Your browser does not support the video tag.
        </video> 

       


        <div className='controllers'  onMouseMove={()=>{mouseMoved()}} >

        <div className="muteControls">
            <div className={mute ? "mute" :'inactive'}>
                
            <button onClick={()=>{muteSwitch()}}>Mute</button>

            </div>

            <div className={mute ? "inactive" :'mute'}>

            <button onClick={()=>{muteSwitch()}}>Muted</button>

            </div>
         </div>
            
         
         <div className="playPause" ref={controller} onClick={()=>{play()}}>
            <div className={playSwitch ? "play" :'inactive'}>
                
            <GatsbyImage image={pauseIcon} alt="Play Button"></GatsbyImage>

            </div>

            <div className={playSwitch ? "inactive" :'pause'}>

            <GatsbyImage image={playIcon} alt="Pause Button"></GatsbyImage>

            </div>
         </div>
        </div> 

        </div>
       
        </>
    )


}

export default Video;