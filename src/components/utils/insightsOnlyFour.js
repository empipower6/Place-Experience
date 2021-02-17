import React from 'react'

import Img from 'gatsby-image'
import {Link} from 'gatsby'


const InsightsOnlyFour = ({show,design,manage,implement,transform})=>{

    const showIcon= (box)=>{
    
        let pic;

        if(box.node.categories.nodes.some(cat =>cat.name==='Design')){
            pic= design;
        }
        else if(box.node.categories.nodes.some(cat =>cat.name==='Manage')){
            pic= manage;
        }
        else if(box.node.categories.nodes.some(cat =>cat.name==='Implement')){
            pic= implement;
        }
        else if(box.node.categories.nodes.some(cat =>cat.name==='Transform')){
            pic= transform;
        }

        return(
    
                <div className="box-icon">
                    <Img fluid={pic} alt="Box Icon" style={{maxHeight:'100%'}} imgStyle={{objectFit:'contain'}} />
                </div>
        )
   }
    return(
        <>

      <div className='section'>
            {
            show.map((box,key)=>(

                    key===0? 

                        <div className="first-box" style={{cursor:'pointer'}}>

                            <Link to={`/${box.node.slug}`} style={{color:'none',textDecoration:'none'}}>
                                <Img fluid={box.node.featuredImage.node.localFile.childImageSharp.fluid} style={{maxHeight:'100%'}} />

                                <h1>{box.node.title.toUpperCase()}</h1>

                                {showIcon(box)}

                            </Link>

                        </div>

                        :

                        <div className={`others others-${key}`}>

                            <Link to={`/${box.node.slug}`} style={{color:'none',textDecoration:'none'}}>
                                    <h1>{ box.node.title.toUpperCase()}</h1>
                                
                            </Link>
                            {showIcon(box)}

                        </div>



                ))
            }
            </div>

        </>

    )

}

export default InsightsOnlyFour;