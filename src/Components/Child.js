function Child({onIncreament}){
     console.log("child rendered");
     
    return(
        <>
        
        <button onClick={onIncreament}>Increament</button>
        </>
    )
} 
export default Child;