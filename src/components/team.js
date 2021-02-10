import React,{useEffect} from 'react'

import Img from 'gatsby-image'

const Team =({alper,ismail,gunter})=>{

    useEffect(()=>{
           
    },[])

    return(

        <>
        <div className="team-section" id="team-section">
           <h1 className="team-title"> MEET THE TEAM </h1>
           <div className="team-pictures">
               <div className="background"></div>
            
               <div className="member">
                   <div className="member-pic alper">
                       <Img fluid={alper} alt="Alper Kulak's Picture"  style={{width:'20vw'}} imgStyle={{objectFit:'cover',objectPosition:'top'}} />
                   </div>
                   <h1 className="member-name">ALPER KULAK</h1>
                   <h2 className="member-position">SENIOR PARTNER</h2>
                   <hr className="member-separator"></hr>
                   <a href="mailto:alper@placeexperience.com"className="member-mail">alper@placeexperience.com</a>

               </div>
               <div className="member">
                   <div className="member-pic gunter">
                       <Img fluid={gunter} alt="Gunter Soydanbay's Picture" style={{width:'20vw'}} imgStyle={{objectFit:'cover',objectPosition:'top'}} />
                   </div>
                   <h1 className="member-name">GUNTER SOYDANBAY</h1>
                   <h2 className="member-position">BRAND STRATEGIST</h2>
                   <hr className="member-separator"></hr>
                   <a href="mailto:gunter@placeexperience.com"className="member-mail">gunter@placeexperience.com</a>

               </div>
               <div className="member">
                   <div className="member-pic ismail">
                       <Img fluid={ismail} alt="Ismail Ozenc's Picture" style={{width:'20vw'}} imgStyle={{objectFit:'cover',objectPosition:'top'}}/>
                   </div>
                   <h1 className="member-name">ISMAIL OZENC, CCXP</h1>
                   <h2 className="member-position">CUSTOMER EXPERIENCE LEAD</h2>
                   <hr className="member-separator"></hr>
                   <a href="mailto:ismail@placeexperience.com" className="member-mail">ismail@placeexperience.com</a>

               </div>
           </div>

        </div>



        </>
    )
}

export default Team;