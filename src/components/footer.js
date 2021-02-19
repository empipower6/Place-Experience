import React ,{ useEffect }from 'react' 

import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';



const Footer = ({logoText,mapIcon,phoneIcon, linkedin})=>{


    const options = {
        renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br />, 
        text])
       }

    const data = useStaticQuery(graphql `
    
       query{

        footer: allContentfulFooter {
            nodes {
              address {
                raw
              }
            }
          }
       }
    
    `)


    return (
        <>

        <div className="footer-section" id="section-footer">

            <div className="footer-flex">
             
             <div className="column column-1">
                 <div className="logo">
                     <Img fluid={logoText} alt="Logo with Text" style={{maxHeight:'100%'}} imgStyle={{objectFit:"contain"}} />
                 </div>
             </div>

             <div className="column column-2">
                <div className="addressIcon">
                   <Img fluid={mapIcon} alt="Map Icon" style={{maxHeight:'100%'}} imgStyle={{objectFit:"contain"}} />
                </div>
                <div className="address"> {documentToReactComponents(JSON.parse(data.footer.nodes[0].address.raw ),options) }</div>
             </div>

             <div className="column column-3">
             
                <div className="callIcon">
                    <Img fluid={phoneIcon} alt="Phone Icon" style={{maxHeight:'100%'}} imgStyle={{objectFit:"contain"}} />
                </div>
                <div>
                <h1><a href="https://calendly.com/ismail-ozenc/30min" target="_blank" style={{textDecoration:'none',color:'black'}}> SCHEDULE <br />A CALL</a></h1>
                <hr />
                </div>
                <div className="linkedinIcon">
                  <a href="https://www.linkedin.com/company/maven-insights-and-solutions/" target="_blank"><Img fluid={linkedin} alt="Phone Icon" style={{maxHeight:'100%'}} imgStyle={{objectFit:"contain"}} /></a> 
                </div>
                <p className="coder-credits"> <span className="first"></span>Site by <a href="https://www.linkedin.com/in/emre-kelleci/" style={{textDecoration:"none", color:'black'}} className="name"> Emre Kelleci</a></p>


             </div>
            </div>

             

        </div>
        </>
    )

}

export default Footer;