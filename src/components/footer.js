import React,{ useEffect } from 'react'
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-solid-svg-icons'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Img from "gatsby-image"


const Footer =({footerLogo,address})=>{
   
    useEffect(() => {
    }, [])

    const options = {
        renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br />, 
        text])
       }

    return(
        <>
         <div className="footer-flex">  
         
         <div className="flex-div">

            <div className="address">
                <h1> Our Address: </h1>
                <div>{documentToReactComponents(JSON.parse(address.nodes[0].address.raw),options) }</div>
                
            </div> 
          </div> 
          <div className="flex-div">
            <div className="socials">
                <Link to="https://calendly.com/ismail-ozenc/30min" style={{textDecorationColor:"white"}}><h1> Schedule a Call</h1></Link>
                <div className="links">
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-linkedin-in"></i>
                  <i class="fab fa-twitter"></i>
                                </div>
                <div></div>
                
            </div>    
          </div>    

          <div className="flex-div">
            <div className="footer-logo">
                    <Img fluid={footerLogo.nodes[0].footerLogo.fluid} alt="Footer Logo" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }}/>
                </div>
          </div>    


        </div> 
        </>
    )
}

export default Footer