import React from 'react'
import img from "./img2.png"

export default function Navbar() {
  // const fn="sneha";
  // const ln="Mandal"
  return (
    
    <div>
    <nav className='Navbar'>
        <img src={img} alt="" className='logoimg'></img>
        <span>Airbnb </span>
        </nav>
    </div>
  )
}
