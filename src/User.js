import React,{ useCallback } from "react";
const User = (props) => {
  
  return (
    <div className="border border-black">
      <h1>functional coomponent</h1>
      <h1>name:{props.name}</h1>
      <h2>pune:{props.location}</h2>
    </div>
  );
};

export default User;
