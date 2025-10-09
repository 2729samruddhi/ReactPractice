import { render } from "@testing-library/react"
import React from "react"
import User from "./User";
import UserClass from "./UserClass";

class About extends  React.Component{
    constructor(props){
        super(props);
        console.log("parent constructor is called"); 
    }

    componentDidMount(){
        console.log("parent componentdidmount is called");
        
    }
    // componentDidUpdate(){
    //     console.log("parent componentDidUpdate is called"); 
    //  }
    //  componentWillUnmount(){
    //     console.log("parent componentWillUnmount is called");
    //  }
    render(){
        console.log("parent render called");
        
        return(
            <div className="mt-2">
                <h1>class based component</h1>
                {/* <User name={"samruddhi"} location={"pune"}/> */}
                {/* <UserClass  name={"sam"} location={"kolhapur"}/> */}
                <UserClass/>
            </div>
        )
    }
}

export default About