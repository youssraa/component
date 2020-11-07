import React from 'react'
const user = {
    name: "Yosra",
    lastName: "Tayachi",
    status : "Full stack JavaScript"
  };
  
  export const FullName = () => {
    return (
      <div className="user-container">
        <h4> {user.name} {user.lastName} </h4>
       

      </div>
    );
  };

export const Status=()=>{
  return (<h6> {user.status} </h6> 
    ); 
} 
  
  
  export default {  FullName , Status }  
  
  