import * as React from "react"
import Header from "./header"
import '../stylesheets/style.scss'

const Layout =(props)=>{

    

    return(
        <div className="header">
            <Header logo={props.logo} circle={props.circle}/>
            {props.children}
        </div>
    )
}

export default Layout;