import React, { useEffect, useState } from 'react'

function GitHub() {
const {data,setData}=useState([]);
useEffect(
    
   ()=>{
     fetch('https://api.github.com/users/hiteshchoudhary')
     .then((res)=>res.json)
     .then((data)=>{console.log(data)
        setData(data);
     })

   },[]

)

  return (
    <div>
      Github Followers :  {data.followers}
    </div>
  )
}

export default GitHub
