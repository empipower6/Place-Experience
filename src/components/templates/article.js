// import React,{ useEffect,useRef,useState } from 'react'
// import Img from "gatsby-image"
// import { useStaticQuery, graphql } from 'gatsby'
// import Footer from '../footer'
// import Logo from '../logo'
// import { gsap } from "gsap/dist/gsap";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { Helmet } from "react-helmet"



// const Article = (props)=>{

//     gsap.registerPlugin(ScrollToPlugin);


//     let articleData = useStaticQuery(graphql`
//     query {

//       media: allContentfulAsset {
//         nodes {
//           title
//           fluid {
//              aspectRatio
//                 base64
//                 src
//                 srcSet
//           }
//         }
//       }

//       wpMedia:allWpMediaItem {
//         nodes {
//           title
//           localFile {
//             childImageSharp {
//               fluid {
//                 aspectRatio
//                 base64
//                 src
//                 srcSet
//               }
//             }
//           }
//         }
//       }
           
//     }
//     `)

//     const glance = useRef(null);
//     const text = useRef(null);
//     const top = useRef(null);
//     const cover =useRef(null);

//     const [disappear, setDisappear] = useState(true);

//     const scrollTop = () =>{

//         gsap.to(window,{scrollTo:{y:0},duration:1});


//     }

//     const stringToHTML =(str)=> {
//         var parser = new DOMParser();
//         var doc = parser.parseFromString(str, 'text/html');
//         return doc.body;
//     };

//     const createGlance = (arr) =>{


//         arr[0].innerHTML = arr[0].innerHTML.toUpperCase();

//         glance.current.appendChild(arr[0]);
//         glance.current.appendChild(arr[1]);


//     }

//     const createArticle = (contentArr) =>{

//         for(let i=0;i<contentArr.length;i++){

//              //all the other titles
//             if(contentArr[i].nodeName == "H2"){

//                 let hr = document.createElement('hr');
//                 hr.classList.add('article-content-text-separator');
//                 text.current.appendChild(hr);


//                 let newTitle= document.createElement('h2');
//                 newTitle.classList.add('article-content-text-title');
//                 newTitle.innerHTML =contentArr[i].innerText;

//                 text.current.appendChild(newTitle);

//             }
//             //glance section
//             else if(contentArr[i].nodeName == "H3"){

//                 let newTitle= document.createElement('h3');
//                 newTitle.classList.add('article-content-text-title-h3');
//                 newTitle.innerHTML =contentArr[i].innerText;

//                 text.current.appendChild(newTitle);

//             }

//             else if(contentArr[i].nodeName == "BLOCKQUOTE"){

//                 if(i !== 1){
//                 let hr = document.createElement('hr');
//                 hr.classList.add('article-content-text-separator');
//                 text.current.appendChild(hr);
//                 }

//                 text.current.appendChild(contentArr[i]);

//             }

//             else{
              
//               if(i==0){

//                 let hr = document.createElement('hr');
//                 hr.classList.add('article-content-text-separator-start');
//                 text.current.appendChild(hr);
//                 text.current.appendChild(contentArr[i]);


//               }

//               else if(i == contentArr.length-1){
//                 text.current.appendChild(contentArr[i]);

//                 let finalText = document.createElement('p');
//                 finalText.innerHTML= "Please contact us to hear more.";
//                 finalText.classList.add('article-content-text-final-contact');
//                 text.current.appendChild(finalText);


//                 let hr = document.createElement('hr');
//                 hr.classList.add('article-content-text-separator-end');
//                 text.current.appendChild(hr);
//               }

//               else{
//               text.current.appendChild(contentArr[i]);
//               }

//             }
//         }

        
//     }
    
//     // const newAuthorCreator = (data) =>{

//     //     let json = createContent(stringToHTML(props.pageContext.content.content),true);


        
//     //     return (
//     //     json.map((author,key)=>(


//     //         <Author name={author.name} title={author.title} desc={author.desc} pic= {wpImageFinder(articleData.wpMedia,author.name)} comma={key=== json.length-1 ? false : true} />
//     //     ))
//     //     )
        
        
//     // }
//     // const createAuthors = (authors) =>{

//     //     let jsonAuthors = [];

//     //     for(let i=0; i<authors.length; i++){

//     //         if(authors[i].nodeName == 'DIV'){

//     //             let image = authors[i];
//     //             let name = authors[i+1].innerText;
//     //             let title = authors[i+2].innerText;
//     //             let desc = authors[i+3].innerText;

//     //             let jsonAuthor ={ 
//     //                  "image": image,
//     //                  "name" : name,
//     //                  "title": title,
//     //                  "desc" :desc
//     //             };

//     //             jsonAuthors.push(jsonAuthor);

                
//     //         }
//     //     }

//     //     return jsonAuthors;
//     // }


//     const createContent =(data,ret = false)=>{
       
//         if(!ret){
//             let glanceSection = [];
//             glanceSection.push(data.children[0],data.children[1]);
//             createGlance(glanceSection);
//         }
//         //authors

//         let authorsStart = 0;
//         let authorSection = [];

//         let contentSection = [];

//         for(let i=data.children.length-1; i>0; i--){
            
//             if(data.children[i].nodeName == "H2"){

//                 authorsStart = i;
//                 break;

//             }

//         }

//         for(let i=0 ; i<data.children.length; i++){

//             let child = data.children[i];

//             i< authorsStart? contentSection.push(child) : authorSection.push(child);
            

//         }

         
//         if(!ret){
          
//             createArticle(contentSection);

//         }
    
//         // if(ret){
        
//         // return createAuthors(authorSection)
        
//         // }

//     }

//     const scrollChecker =(pos)=>{

//         if(window.pageYOffset < pos){
//         }
//         else if(window.pageYOffset > pos){
  
//           gsap.to(top.current,{autoAlpha:1,duration:0.5});
  
//         }
//       }
  
 

//     useEffect(()=>{

//     createContent(stringToHTML(props.pageContext.content.content));  
   

//     const options={
//         root:null,
//         rootMargin:'0px',
//         threshold:0.3
//       };

//   // Intersection Observer basically kills the main scroll while we're snapping. Once it reaches the third cover,
//   // It enables the main scrolling again
//   const articleObserver = new IntersectionObserver((entries,observer)=>{

//     entries.forEach(entry=>{


//       if(entry.isIntersecting){

//         setDisappear(true);

//       }
//       else{

//         setDisappear(false);
//       }

//     })

//   },options);

//   articleObserver.observe(cover.current);
  

    
//     },[])

//     useEffect(()=>{
        
//         disappear ? gsap.to(top.current,{autoAlpha:0,duration:0.2}) : gsap.to(top.current,{autoAlpha:0.8,duration:0.2});


//     },[disappear]);

//     return(
//         <>

//         <Helmet title={props.pageContext.content.title}>
        
//         </Helmet>
//            <div className='article-section'>

//                 <div className="article-cover" ref={cover}>

//                     <Img fluid={imageFinder(articleData.media,props.pageContext.content.title+'-ARTICLE')} alt="Article Cover Image" style={{maxHeight:'100%'}} imgStyle={{objectFit:'cover',objectPosition:'top'}} />
                    
//                 </div>
//                 <div className="article-logo-header">
//                     <div className="article-logo-menu">
//                     <Logo image={imageFinder(articleData.media,"Logo")} logoText={imageFinder(articleData.media,"LogoFooter")} phoneIcon ={imageFinder(articleData.media,"phone-icon")} linkedin={imageFinder(articleData.media,"linkedinWhite")}/>
//                     </div>
//                     <h1 className="title"> PLACE EXPERIENCE</h1>
//                     <h1 className="insights-title"> INSIGHTS</h1>
//                 </div>
//             </div>
            
//             <div className="article-logo">     

//                 <Logo image={imageFinder(articleData.media,"Logo")} logoText={imageFinder(articleData.media,"LogoFooter")}
//                     phoneIcon ={imageFinder(articleData.media,"phone-icon")} linkedin={imageFinder(articleData.media,"linkedinWhite")}/>

//             </div>

//             <div className="top-arrow" ref={top}>     

//                 <div onClick={()=>{scrollTop()}}>
//                     <Img fluid={imageFinder(articleData.media,"arrowUpTop")} alt="Go To The Top Icon" style={{ maxHeight: "100%",cursor:'pointer' }}  imgStyle={{ objectFit: "contain" }}  />
//                 </div>
//             </div>
        

//             <div className="article">
               
//                 <div className="right">
//                     <h1 className="article-section-title">
//                         {props.pageContext.content.title.toUpperCase()}
//                     </h1>
//                     {/* <p className="article-section-date">{props.pageContext.content.date}</p>
//                     <div className="article-authors">
//                         {newAuthorCreator(props.pageContext.content.content)}

//                     </div> */}
//                     <div className='article-content'>

//                         <div className="glance" ref={glance}></div>

//                         <div className="text" ref={text}></div>

                    
//                     </div>
//                 </div>


                
               
//             </div>
          


//         <Footer mapIcon={imageFinder(articleData.media,"mapIcon")} phoneIcon={imageFinder(articleData.media,"phone-icon")} logoText={imageFinder(articleData.media,"LogoFooter")} linkedin={imageFinder(articleData.media,"linkedinWhite")} />

//         </>
//     )
// }

// export default Article

// const imageFinder = (data,name)=>{

// let image;
// let media = data.nodes;

// for(let i=0;i<media.length;i++){

//  if(media[i].title.toLowerCase() === name.toLowerCase()){
//     image = i;
//  }
// }
// return media[image].fluid;
// }

// // const wpImageFinder = (data,name)=>{

// //     let image;
// //     let media = data.nodes;
// //     let authorName = name.trim();
    
// //     for(let i=0;i<media.length;i++){
// //      if(media[i].title.trim() === name){
// //         image = i;
// //      }
// //     }
   
// //     return media[image].localFile.childImageSharp.fluid;
// //     }