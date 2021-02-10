import React,{useEffect,useRef} from 'react'
import { gsap, Power4} from "gsap/dist/gsap";
import Img from 'gatsby-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const Team =({alper,ismail,gunter,linkedin,summaries,linkedinWhite})=>{
    
    const alperSummary = useRef(null);
    const gunterSummary = useRef(null);
    const ismailSummary = useRef(null);

    const alperMenu = useRef([]);
    const gunterMenu = useRef([]);
    const ismailMenu= useRef([]);

    alperMenu.current =[];
    gunterMenu.current=[];
    ismailMenu.current=[];

    const tlAlper = useRef(null);
    const tlGunter = useRef(null);
    const tlIsmail = useRef(null);


    const addAlper = (el) => {
        if (el && !alperMenu.current.includes(el)) {
            alperMenu.current.push(el);
        }
        };

    const addGunter = (el) => {
        if (el && !gunterMenu.current.includes(el)) {
            gunterMenu.current.push(el);
        }
        };

    const addIsmail = (el) => {
        if (el && !ismailMenu.current.includes(el)) {
            ismailMenu.current.push(el);
        }
        };
    


    const options = {
        renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br />, 
        text])
       }
    
   

    const openPerson=(timeline)=>{  timeline.current.play();  }

    const closePerson=(timeline)=>{ timeline.current.reverse(); }

    useEffect(()=>{

        tlAlper.current = gsap.timeline({paused:'true'});
        tlAlper.current.fromTo(alperSummary.current,{display:'none'},{display:'block',duration:0.1})
        .to(alperSummary.current,{width:'100%',height:'100%',duration:0.5})
        .fromTo(alperMenu.current,{autoAlpha:0,y:100},{autoAlpha:1,ease:"power3.out",y:0,duration:0.4,stagger: 0.1});

        tlGunter.current = gsap.timeline({paused:'true'});
        tlGunter.current.fromTo(gunterSummary.current,{display:'none'},{display:'block',duration:0.1})
        .to(gunterSummary.current,{width:'100%',height:'100%',duration:0.5})
        .fromTo(gunterMenu.current,{autoAlpha:0,y:100},{autoAlpha:1,ease:"power3.out",y:0,duration:0.4,stagger: 0.1});

        tlIsmail.current = gsap.timeline({paused:'true'});
        tlIsmail.current.fromTo(ismailSummary.current,{display:'none'},{display:'block',duration:0.1})
        .to(ismailSummary.current,{width:'100%',height:'100%',duration:0.5})
        .fromTo(ismailMenu.current,{autoAlpha:0,y:100},{autoAlpha:1,ease:"power3.out",y:0,duration:0.4,stagger: 0.1});


    },[])

    return(

        <>
        <div className="team-section" id="team-section">
           <h1 className="team-title"> MEET THE TEAM </h1>
           <div className="team-pictures">
               <div className="background"></div>
            
               <div className="member">
                   <div className="member-pic alper" onClick={()=>{openPerson(tlAlper)}}>
                       <Img fluid={alper} alt="Alper Kulak's Picture"  style={{width:'20vw'}} imgStyle={{objectFit:'cover',objectPosition:'top'}} />
                   </div>
                   <h1 className="member-name">ALPER KULAK</h1>
                   <h2 className="member-position">SENIOR PARTNER</h2>
                   <hr className="member-separator"></hr>
                    <a href="mailto:alper@placeexperience.com"className="member-mail" style={{textDecoration:'none'}}>alper@placeexperience.com</a>
                    <a href="https://www.linkedin.com/in/akulak/" target="_blank" rel="noreferrer">
                        <div className="linkedin" >
                            <Img fluid={linkedin} alt="Linkedin Icon" style={{maxHeight:'100%'}} imgStyle={{objectFit:'cover'}} />
                        </div>
                    </a>
               </div>

               <div className="summary summary-alper" ref={alperSummary}>
                   <div className="left">
                        <p  className="cancel-mobile" onClick={()=>{closePerson(tlAlper)}} > X </p>
                        <p className="mobile-title" ref={addAlper}> CLOSE </p>
                        <div className="summary-actual">
                            <div clasName="summary-image" ref={addAlper}>
                                <Img fluid={alper} alt="Alper Kulak's Picture"  style={{width:'20vw'}} imgStyle={{objectFit:'cover',objectPosition:'top'}} />
                            </div>
                            <div className="summary-text">
                                <h1 ref={addAlper}>ALPER KULAK</h1>
                                <h2 ref={addAlper}>SENIOR PARTNER</h2>
                                <div ref={addAlper}>{documentToReactComponents(JSON.parse(summaries.alperSummary.raw),options)}</div>
                            </div>
                        </div>
                   </div>
                   <div className="right">
                    <a href="https://www.linkedin.com/in/akulak/" target="_blank" rel="noreferrer">
                            <div className="linkedin"ref={addAlper} >
                                <Img fluid={linkedinWhite} alt="Linkedin Icon" style={{maxHeight:'100%'}} imgStyle={{objectFit:'cover'}} />
                            </div>
                        </a>                 
                    </div>
               </div>



               <div className="member">
                   <div className="member-pic gunter" onClick={()=>{openPerson(tlGunter)}}>
                       <Img fluid={gunter} alt="Gunter Soydanbay's Picture" style={{width:'20vw'}} imgStyle={{objectFit:'cover',objectPosition:'top'}} />
                   </div>
                   <h1 className="member-name">GUNTER SOYDANBAY</h1>
                   <h2 className="member-position">BRAND STRATEGIST</h2>
                   <hr className="member-separator"></hr>
                    <a href="mailto:gunter@placeexperience.com"className="member-mail" style={{textDecoration:'none'}}>gunter@placeexperience.com</a>
                    <a href="https://www.linkedin.com/in/soydanbay/" target="_blank" rel="noreferrer">
                        <div className="linkedin" >
                        <Img fluid={linkedin} alt="Linkedin Icon" style={{maxHeight:'100%'}} imgStyle={{objectFit:'cover'}} />
                        </div>
                    </a>
               </div>

               <div className="summary" ref={gunterSummary}>
                   <div className="left">
                        <p  className="cancel-mobile" onClick={()=>{closePerson(tlGunter)}} > X </p>
                        <p className="mobile-title" ref={addGunter}> CLOSE </p>
                        <div className="summary-actual">
                            <div clasName="summary-image" ref={addGunter}>
                                <Img fluid={gunter} alt="Gunter Soydanbay's Picture"  style={{width:'20vw'}} imgStyle={{objectFit:'cover',objectPosition:'top'}} />
                            </div>
                            <div className="summary-text">
                                <h1 ref={addGunter}>GUNTER SOYDANBAY</h1>
                                <h2 ref={addGunter}>BRAND STRATEGIST</h2>
                                <div ref={addGunter}>{documentToReactComponents(JSON.parse(summaries.gunterSummary.raw),options)}</div>
                            </div>
                        </div>
                   </div>
                   <div className="right">
                    <a href="https://www.linkedin.com/in/soydanbay/" target="_blank" rel="noreferrer">
                            <div className="linkedin"ref={addGunter} >
                                <Img fluid={linkedinWhite} alt="Linkedin Icon" style={{maxHeight:'100%'}} imgStyle={{objectFit:'cover'}} />
                            </div>
                        </a>                 
                    </div>
               </div>



               <div className="member">
                   <div className="member-pic ismail" onClick={()=>{openPerson(tlIsmail)}}>
                       <Img fluid={ismail} alt="Ismail Ozenc's Picture" style={{width:'20vw'}} imgStyle={{objectFit:'cover',objectPosition:'top'}}/>
                   </div>
                   <h1 className="member-name">ISMAIL OZENC, CCXP</h1>
                   <h2 className="member-position">CUSTOMER EXPERIENCE LEAD</h2>
                   <hr className="member-separator"></hr>
                    <a href="mailto:ismail@placeexperience.com" className="member-mail" style={{textDecoration:'none'}}>ismail@placeexperience.com</a>
                    <a href="https://www.linkedin.com/in/ismailozenc/" target="_blank" rel="noreferrer">
                        <div className="linkedin" >
                        <Img fluid={linkedin} alt="Linkedin Icon" style={{maxHeight:'100%'}} imgStyle={{objectFit:'cover'}} />
                        </div>
                    </a>
               </div>

               <div className="summary" ref={ismailSummary}>
                    <div className="left">
                            <p  className="cancel-mobile" onClick={()=>{closePerson(tlIsmail)}} > X </p>
                            <p className="mobile-title" ref={addIsmail}> CLOSE </p>
                            <div className="summary-actual">
                                <div clasName="summary-image" ref={addIsmail}>
                                    <Img fluid={ismail} alt="Ismail Ozenc's Picture"  style={{width:'20vw'}} imgStyle={{objectFit:'cover',objectPosition:'top'}} />
                                </div>
                                <div className="summary-text">
                                    <h1 ref={addIsmail}>ISMAIL OZENC, CCXP</h1>
                                    <h2 ref={addIsmail}>CUSTOMER EXPERIENCE LEAD</h2>
                                    <div ref={addIsmail}>{documentToReactComponents(JSON.parse(summaries.ismailSummary.raw),options)}</div>
                                </div>
                            </div>
                    </div>
                    <div className="right">
                        <a href="https://www.linkedin.com/in/ismailozenc/" target="_blank" rel="noreferrer">
                                <div className="linkedin"ref={addIsmail} >
                                    <Img fluid={linkedinWhite} alt="Linkedin Icon" style={{maxHeight:'100%'}} imgStyle={{objectFit:'cover'}} />
                                </div>
                            </a>                 
                    </div>
                </div>

            </div>


      </div>

        </>
    )
}

export default Team;