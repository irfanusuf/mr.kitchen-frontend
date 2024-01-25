import React, { useState } from 'react'

import '../styles/Navbar.scss'
import { Link } from 'react-router-dom'
import InstaIcon from '../assests/ig-instagram-icon.png'
import youtuIcon from '../assests/youtube-color-icon.png'
import faceIcon from '../assests/facebook-round-color-icon.png'
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

const Navbar = () => {


const [toggle , setToggle] =useState(false)





const handleToggle = ()=>{
setToggle(!toggle)
console.log(toggle)

}




  return (
    <div className='navbar'>


      <div className='brand-name'>
        <li> <Link to='/'>   MR .KITCHEN </Link>   </li>
      </div>


      <div className='central-nav'>
        <Link to='/order'>   Order Food</Link>
        <Link to='/foodGallery'>   Our Gallery</Link>

      </div>

      <div className='review'>
        <p> Get 20% flat off by reviewing our food  </p>
        <Link to='/Register'>  Register</Link>


      <  MdOutlineArrowDropDownCircle  onClick={handleToggle}/>

 {toggle && <div>dropdown</div>}
      </div>


     


      <div className='nav-icons'>

        <a href='https://www.instagram.com/' target='_blank' rel="noreferrer"><img src={InstaIcon} alt='icon' /></a>
        <a href='https://www.youtube.com/'  target="_blank" rel="noreferrer"><img src={youtuIcon} alt='icon' /></a>
       <a href='https://www.facebook.com/'  target="_blank" rel="noreferrer"> <img src={faceIcon} alt='icon' /></a>



      </div>

    </div>
  )
}

export default Navbar