import React,{ useEffect } from 'react'
import Img from "gatsby-image"



const Article = (props)=>{

    useEffect(()=>{
    },[])

    return(
        <>

            <div className="article-page">

            <div className="article-image">
                    <Img fluid={props.pageContext.content.featuredImage.node.localFile.childImageSharp.fluid} alt="Main Image" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }}/>
            </div>


            <h1 className="article-title"> {props.pageContext.content.title} </h1>

            <div className='article-content'  dangerouslySetInnerHTML={{ __html:`${props.pageContext.content.content}`}}>
            </div>

            </div>

        </>
    )
}

export default Article