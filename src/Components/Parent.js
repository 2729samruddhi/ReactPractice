import { useCallback, useState } from "react";
import Child from "./Child";


function Parent (){
    const[count,setCount] = useState(0)
    const increament = useCallback(()=>{
        setCount(c=>c+1)
    },[])
    return (
        <>
        <div>{count}</div>
        <Child onIncreament={increament}/>

        </>
    )
}

export default Parent;