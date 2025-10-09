import { render } from "@testing-library/react"
import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props)
      console.log("child constructor is called");
      this.state={
        userInfo:{
             name:"default",
       location:"dummy"
        }
      
      }
    }

   async componentDidMount(){
    const data = await fetch("https://68ce4a6d6dc3f350777e912f.mockapi.io/userInfo");
    const json =await data.json()
    console.log(json);

    this.setState={
     userInfo:json
    }
    }
     componentDidUpdate(){
        console.log("componentDidUpdate is updated"); 
     }
     componentWillUnmount(){
        console.log("componentWillUnmount is called");
     }

    render(){
        const {id,name,location} = this.state.userInfo
        console.log("child render is called");
        return(
            <div className="border border-black">
                <h1>Userclass component</h1>
                {/* <h1>name:{this.props.name}</h1>
                <h2>location:{this.props.location}</h2> */}
                <h1>id:{id}</h1>
                <h1>name:{name}</h1>
                <h2>location:{location}</h2>
            </div>
        )
    }
}
export default UserClass;