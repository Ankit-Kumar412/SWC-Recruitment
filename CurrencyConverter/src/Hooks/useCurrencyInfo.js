/* Making a custom Hooks 
  These custom hooks can also use the already present hooks in the react library
     */



import React from 'react'
import {useState,useEffect} from "react"




function useCurrencyInfo(currency) {
// to hold the fetched data declaring a data vaiable and asking react to look at this 
// also ,in case the fetch request retuns a empty , object to prevent the program to crash 
// passing a {} empty object 
const [data,setData]=useState({});


// we want the api to be called when there is some change in the dependencies and when the website rolls out again 

useEffect(()=>{
// now fetcing the data from the api 
fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res)=>res.json())
      .then((res)=>setData(res[currency]));

},[currency])

return data ;
  
}

export default useCurrencyInfo;
