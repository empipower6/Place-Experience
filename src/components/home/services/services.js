import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { useStaticQuery, graphql } from 'gatsby'


import Img from "gatsby-image"

const Services = ({texts , images , triangle})=>{

    let data = useStaticQuery(graphql`
    query servicesimages{
        first: file(relativePath: {eq: "services1.png"}) {
         childImageSharp {
           fluid{
            ...GatsbyImageSharpFluid
           }
         }
       }
       second: file(relativePath: {eq: "services2.png"}) {
        childImageSharp {
          fluid{
           ...GatsbyImageSharpFluid
          }
        }
      }
      third: file(relativePath: {eq: "services3.png"}) {
        childImageSharp {
          fluid{
           ...GatsbyImageSharpFluid
          }
        }
      }
      }
    `)




    const options = {
        renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br />, 
        text])
       }



    return(
        <>
        <div className="services">

                                                    
          
            <div className="services-title-outline">
                <Img fluid={images[0].fluid} alt="Our Services Outline" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }}/>
            </div>
            <h1 className="services-title">{texts.title}</h1>





            <div className="intro-text"> {documentToReactComponents(JSON.parse(texts.introText.raw),options)}</div>
            


            <div className="service-flex">
               <div className="service-flex-box">
                        <h1> Design </h1>
                        <div className="service-box-image">
                            <Img fluid={data.third.childImageSharp.fluid} alt="Our Services Outline" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }}/>
                        </div>
               </div>
               <div className="service-flex-box">
                        <h1> Implement </h1>
                        <div className="service-box-image">
                            <Img fluid={data.first.childImageSharp.fluid} alt="Our Services Outline" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }}/>
                        </div>
               </div>
               <div className="service-flex-box">
                        <h1> Manage</h1>
                        <div className="service-box-image">
                            <Img fluid={data.second.childImageSharp.fluid} alt="Our Services Outline" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }}/>
                        </div>
               </div>
               <div className="service-flex-box">
                        <h1> Transform </h1>
                        <div className="service-box-image">
                            <Img fluid={data.third.childImageSharp.fluid} alt="Our Services Outline" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }}/>
                        </div>
               </div>

               
           </div>
            
           <div className="section1-intro">{texts.introOfFirstSection}</div>


            <div className="flex1">
                <div className="section1-text1">{documentToReactComponents(JSON.parse(texts.section1Text1.raw),options)}</div>

                <div className="cubes" >
                    <Img fluid={images[2].fluid} alt="Cubes Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }}/>
                </div>
                <div className="squares" >
                    <Img fluid={images[1].fluid} alt="Intertwined Squares Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }}/>
                </div>
                <div className="section1-text2">{documentToReactComponents(JSON.parse(texts.section1Text2.raw),options)}</div>

            </div>

            <div className="flex2">
                <div className="section1-text3">{documentToReactComponents(JSON.parse(texts.section1Text3.raw),options)}</div>
                <div className="pies">
                    <Img fluid={images[4].fluid} alt="Pies Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }}/>
                </div>


                <div className="section1-text4">{documentToReactComponents(JSON.parse(texts.section1Text4.raw),options)}</div>

                <div className="lines">
                    <Img fluid={images[3].fluid} alt="Line Art Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }}/>
                </div>
                <div className="section1-text5">{documentToReactComponents(JSON.parse(texts.section1Text5.raw),options)}</div>

                <div className="triangle">
                    <Img fluid={triangle} alt="Triangle Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }}/>
                </div>
            </div>

        

          

        </div>

        <div className="second-services">
            <div className="section2-intro"> {texts.introOfSecondSection} </div>
            

            <div className="flex3">
                    <div className="section2-text1">{documentToReactComponents(JSON.parse(texts.section2Text1.raw),options)}</div>

                    <div className="squares">
                        <Img fluid={images[1].fluid} alt="Intertwined Squares Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }}/>
                    </div>
                    <div className="cubes">
                        <Img fluid={images[2].fluid} alt="Cubes Squares Illustration" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }}/>
                    </div>
                    <div className="section2-text2">{documentToReactComponents(JSON.parse(texts.section2Text2.raw),options)}</div>

                </div>
            </div>

        </>
    )
}

export default Services;