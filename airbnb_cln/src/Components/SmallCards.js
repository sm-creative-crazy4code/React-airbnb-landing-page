import React from 'react'

export default function SmallCards(props) {
let badgeText;
if(props.client.openspots===0){
  badgeText="SOLD OUT";
} else if(props.client.loc==="online"){
  badgeText="Online";
}





  return (

<div className="card MydefaultCards mx-4" >
    <img src={props.client.imgs}  style={{height:"300px"}  }  className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.client.title} {badgeText && <span className="badge badge-secondary">{badgeText}</span>}</h5>
      <p className="card-text"><span className="badge badge-success ">Reviews :{props.client.reviewCount}</span>  <span className="badge badge-info mx-2">Ratings :{props.client.rating}</span></p>
      <p className="card-text">Country :{props.client.country}</p>
      <p className="card-text">title :{props.client.tagline}</p>
      <span className="badge badge-warning mx-0" style={{display:"block" , width:"75px", textAlign:"left"}}>Prices:${props.client.price}</span>
      <a href="/" className="btn btn-danger my-3" >know more</a>
    </div>
</div>
  )
}
