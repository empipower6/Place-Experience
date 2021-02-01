import React from 'react'
import Img from "gatsby-image"
import { Link } from "gatsby"

import ReactHtmlParser from 'react-html-parser';




class Articles extends React.Component {

    constructor(props) {
        super(props)
        
        this.state={filterState:"all"};

        this.implement =[];
        this.manage =[];
        this.transform=[];
        this.design=[];
        this.content =this.props.articles;

        this.changeState = this.changeState.bind(this);
        this.sortCategories = this.sortCategories.bind(this);
        this.changeContent = this.changeContent.bind(this);
  
      }

   

    componentDidMount(){
        this.sortCategories();
        console.log(this.props.articles)

    }

    sortCategories(){

        this.content.edges.map((article,key)=>{
            let categoryAmount = article.node.categories.nodes.length;
            let categories = article.node.categories.nodes;

            for(let i=0;i<categoryAmount;i++){
                
                if(categories[i].name=="Implement"){
;                    this.implement.push(article);
                    break;
                }
                else if(categories[i].name=="Design"){
                    this.design.push(article);
                    break;
                }
                else if(categories[i].name=="Transform"){
                    this.transform.push(article);
                    break;
                }
                else if(categories[i].name=="Manage"){
                    this.manage.push(article);
                    break;
                }

            }
        })

    }

    

    changeState(e){
        this.setState({filterState:e.target.value})
        this.changeContent()

    }

    changeContent(){
       
        this.content = this.implement;
        console.log(this.content);
    }

    render(){
        return(

        <>
        
        
           <div className="filter-bar">
           <form>

            <label for="categories">Choose a category:</label>
             <select name="categories" value={this.state.filterState} onChange={(e)=>{this.changeState(e)}} className="categories">
                <option value="design">Design</option>
                <option value="transform">Transform</option>
                <option value="implement">Implement</option>
                <option value="Manage">Manage</option>
                <option value="all">All</option>

             </select> 

             </form>
            </div>
            <div className="insights-flex">
            
                       
            {

                
                this.props.articles.edges.map((article,index) =>(

              <div className="postShort">
                <Link to={"/"+article.node.slug} style={{ textDecoration: 'none',display:"flex",flexFlow:"column nowrap",alignItems:"center" }}>

                    <div className="postShort-image">
                        <Img fluid={article.node.featuredImage.node.localFile.childImageSharp.fluid} alt="Main Image" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "cover" }}/>
                    </div>
                    <div className="postShort-details">

                        <h1 className="postShort-Title">{article.node.title}</h1>
                        <p className="postShort-Date">{article.node.date} </p>
                        <div className="postShort-Excerpt">{ReactHtmlParser(article.node.excerpt)}</div>
                    
                    </div>

                </Link>

                 </div>

                ))

            }
            </div>

        </>
    )
}
}

export default Articles