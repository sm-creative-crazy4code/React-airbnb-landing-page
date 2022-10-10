import React from 'react'
import SmallCards from './SmallCards'
import clientData from '../Clientdata'
// import pic from "../imgs/imgs1.jpg"
// import pic1 from "../imgs/portrait-3098319_1920.jpg"
// import pic2 from "../imgs/woman-1284411_1920.jpg"
// import pic3 from "../imgs/people-875597_1920.jpg"

export default function Cards() {
  const airbnbExp=clientData.map((client)=>{
     return <SmallCards 
      key={client.id}
      client={client}
    //  title= {client.title} sssss
    //  reviewCount={client.reviewCount}
    //  rating={client.rating}
    //  country={client.country}
    //  tagline={client.tagline}
    //  price={client.price}
    //  imgs={client.imgs}
    //  openspots={client.openspots}
    //  loc={client.loc}

    // the methos of passing props shown in above lines is equivalent as 
    // {...client}===> here we donythave to mention prps.item .title etc wehen we are destructuring the props
     
     />
  })




  return (
    <div className='BigCards d-flex' >
    {airbnbExp}
      
    </div>

  )
}
