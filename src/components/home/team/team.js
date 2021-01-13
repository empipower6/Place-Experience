import React,{useEffect} from 'react'

import Img from "gatsby-image"


const Team =(props)=>{

    useEffect(() => {
    }, [])
   return(
       <>

       <div className="team-section">

           <h1> Meet the Team</h1>
           <div className="team-outline">
                <Img fluid={props.assets.edges[0].node.images[0].fluid} alt="Meet the Team Outline" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }}/>
           </div>
           <div className="team-flex">
           {
               props.members.edges.map((item)=> 
               <div className="team-member">
                <div className="team-member-picture">
                <Img fluid={item.node.photo.fluid} alt={`${item.node.name} picture`} 
                                  style={{ maxHeight: "100%",
                                           height: "100%",
                                           width: "100%",
                                           borderRadius:"0%",


                                          }}/>
                </div>
               <h1 className="member-name">{item.node.name}</h1>
               <p className="member-position">{item.node.position}</p>

               <div class="vl"></div>

               <p className="member-mail">{item.node.emailAddress}</p>

               </div>
               
               )
           }
           </div>

           
       </div>
       </>
   )


}

export default Team;