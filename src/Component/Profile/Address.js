import React from "react"
const ad = {
    email : "tayachii.yosra@gmail.com" ,
    city : "Bhira Bizerte" , 
    ville : "Bizerte" , 
    tel : "+216123456"

}
const Email = ()=> {
    return(

         <h5>{ad.email} </h5> 
    );
}
const City = ()=> {
    return(

         <h5>{ad.city} </h5> 
    );
}
const Tel = ()=> {
    return(

         <h5>{ad.tel} </h5> 
    );
}
const Ville = ()=> {
    return(

         <h5>{ad.ville} </h5> 
    );
}
export  { Ville , Tel , Email , City } 